import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/Video/VideoPlayer';
import CommentSection from '../components/Video/CommentSection';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({
    id: id,
    title: `Sample Video ${id}`,
    src: `http://localhost:3000/api/daily_updates/video`, // Default to medium resolution
    views: 1234,
    liked: false,
    comments: [
      { id: 1, text: 'Great video!' },
      { id: 2, text: 'Thanks for sharing.' }
    ]
  });

  const [error, setError] = useState(null);
  const [selectedResolution, setSelectedResolution] = useState('medium'); // Default resolution

  const handleLike = () => {
    setVideo((prevVideo) => ({
      ...prevVideo,
      liked: !prevVideo.liked
    }));
  };

  // Update video source based on selected resolution
  useEffect(() => {
    setVideo((prevVideo) => ({
      ...prevVideo,
      src: `http://localhost:3000/api/daily_updates/video`
    }));
  }, [selectedResolution]);

  // Error handling for video source
  useEffect(() => {
    const checkVideoSource = async () => {
      try {
        const response = await fetch(video.src, { method: 'HEAD' });
        if (!response.ok) {
          throw new Error('Video source not found');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    checkVideoSource();
  }, [video.src]);

  return (
    <div className="p-4 lg:p-8">
      {error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <>
          <VideoPlayer videoSrc={video.src} />
          <div className="mt-4">
            <label className="mr-2">Select Resolution:</label>
            <select
              value={selectedResolution}
              onChange={(e) => setSelectedResolution(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="low">Low (640p)</option>
              <option value="medium">Medium (1280p)</option>
              <option value="high">High (1920p)</option>
            </select>
          </div>
        </>
      )}
      <div>  
        <h1 className="text-3xl font-bold mb-4 p-4">{video.title}</h1>
        <div className="flex items-center mt-4 p-4">
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
      </div>
  );
};

export default VideoDetail;
