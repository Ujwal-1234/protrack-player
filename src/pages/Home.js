import React from 'react';
import VideoCard from '../components/Video/VideoCard';

const Home = () => {
  // Dummy video data
  const videos = [
    { id: 1, title: 'Sample Video 1', src: '/path/to/video1.mp4' },
    { id: 2, title: 'Sample Video 2', src: '/path/to/video2.mp4' },
    // Add more dummy videos
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
