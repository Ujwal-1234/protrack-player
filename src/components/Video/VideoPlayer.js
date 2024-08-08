import React from 'react';

const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="w-full h-64 bg-black">
      <video controls className="w-full h-full">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
