import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <Link to={`/video/${video.id}`}>
        <img src={video.src} alt={video.title} className="w-full h-40 object-cover mb-2" />
        <h2 className="text-xl font-bold">{video.title}</h2>
      </Link>
    </div>
  );
};

export default VideoCard;
