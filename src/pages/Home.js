import React, { useEffect, useState } from 'react';
import VideoCard from '../components/Video/VideoCard';
import axios from 'axios';
import Search from './Search';
import { BiSearch } from "react-icons/bi";
import { fetchData, setAuthToken } from '../service/apiservice';


const Home = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Dummy search results
    setResults([
      // { id: 1, title: 'Search Result 1', src: '/path/to/video1.mp4' },
      // { id: 2, title: 'Search Result 2', src: '/path/to/video2.mp4' },
      // Add more dummy results
    ]);
  };
  console.log(localStorage.getItem('pro-token'));

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setAuthToken(localStorage.getItem('pro-token'));
        const response = await fetchData('http://localhost:3000/api/user/listvideos'); // Adjust endpoint if necessary
        if (response.data.message === 'Data fetched successfully') {
          setVideos(response.data.data);
        } else {
          console.error('Error fetching videos:', response.data.message);
        }
      } catch (error) {
        if (error.response.status === 401) {
          alert(error.response.data.message);
        }
        if (error.response.status === 403){
          localStorage.removeItem('pro-token');
        }
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="p-4">
      <p className=' flex items-center mb-4 justify-center'>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" p-2 w-full lg:w-1/2 shadow border rounded"
        />
        <button onClick={handleSearch} className="p-2 ml-4 border border-white hover:border-slate-300 bg-white text-slate-600 rounded"><BiSearch className=' text-4xl'/></button>
      </p>
      <div className=" overflow-auto flex-wrap justify-start items-start h-full sm:grid-cols-2 flex gap-4">
        {videos.map(video => (
          <VideoCard
            key={video.user_id + video.title} // Use a unique key if possible
            video={{
              title: video.title,
              id:video.video_id,
              duration:video.duration,
              likes:video.likes,
              dislikes:video.dislikes,
              src: video.medium_url, // Adjust based on how you want to use this
              thumbnail: video.thumbnail_url // Adjust based on how you want to use this
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;