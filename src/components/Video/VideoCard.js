import React from 'react';
import play from '../../asset/play.png'
import { BiLike, BiDislike } from "react-icons/bi";
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const thumbnailSrc = video.thumbnail
    ? `http://localhost:3000/${video.thumbnail.replace(/\\/g, '/')}`
    : '/path/to/default-thumbnail.png'; // Fallback image if thumbnail_url is empty

  // Prepare the query parameters
  const videoParams = new URLSearchParams({
    id: video.id,
    title: video.title,
    src: `http://localhost:3000/${video.src}`, // Assuming medium_url is the video source
    duration: video.duration,
    likes:video.likes,
    dislikes: video.dislikes,
  }).toString();

  return (
    <nav className=' w-full lg:m-4 lg:w-auto'>
      <Link to={`/videoplayer?${videoParams}`}>
        <div className="border rounded-lg w-full lg:w-64 hover:cursor-pointer hover:bg-slate-200">
          <div className='w-full z-0 relative'>
            <img
              src={thumbnailSrc}
              alt={video.title}
              className="w-full h-32 object-cover mb-2"
              onError={(e) => e.target.src = play} // Fallback image
            />
            <p className="absolute text-white bg-slate-700 bottom-0 right-2">{`Duration: ${video.duration} sec`}</p>
          </div>
          <h2 className="text-xl ml-2 font-semibold mb-2">{video.title.length>20?video.title.slice(0, 22)+" ...":video.title}</h2>
          <div>
            <span className=' m-2 inline-block items-center justify-center'><BiLike className=' inline'/> {video.likes}</span>
            <span className='m-2 inline-block items-center justify-center'><BiDislike className=' inline'/> {video.dislikes}</span>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default VideoCard;