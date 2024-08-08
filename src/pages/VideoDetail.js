import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/Video/VideoPlayer';
import CommentSection from '../components/Video/CommentSection';

const VideoDetail = () => {
  const { id } = useParams();
  
  // Dummy video data
  const [video, setVideo] = useState({
    id: id,
    title: `Sample Video ${id}`,
    src: '/path/to/video.mp4',
    views: 1234,
    liked: false,
    comments: [
      { id: 1, text: 'Great video!' },
      { id: 2, text: 'Thanks for sharing.' }
    ]
  });

  const handleLike = () => {
    setVideo((prevVideo) => ({
      ...prevVideo,
      liked: !prevVideo.liked
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
      <VideoPlayer videoSrc={video.src} />
      <div className="flex items-center mt-4">
        <button
          onClick={handleLike}
          className={`p-2 border rounded ${video.liked ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        >
          {video.liked ? 'Unlike' : 'Like'}
        </button>
        <span className="ml-4">Views: {video.views}</span>
      </div>
      <CommentSection initialComments={video.comments} />
    </div>
  );
};

export default VideoDetail;
