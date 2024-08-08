// Example of a simple API utility
const API_BASE = 'https://api.example.com';

export const fetchVideos = async () => {
  // Fetch dummy data
  return [
    { id: 1, title: 'Sample Video', src: '/path/to/video.mp4' },
    // Add more dummy videos
  ];
};

export const uploadVideo = async (videoData) => {
  // Handle video upload
};

export const authenticateUser = async (credentials) => {
  // Handle authentication
};
