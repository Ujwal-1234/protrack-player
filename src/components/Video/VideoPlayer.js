import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiLike, BiDislike } from "react-icons/bi";
import VideoCard from './VideoCard';
import Tooltip from '../ToolTip';
import { fetchData, setAuthToken } from '../../service/apiservice';
import SignIn from '../Auth/SignIn';
import { SiGin } from 'react-icons/si';

const VideoPlayer = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);
  const [videos, setVideos] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const videoSrc = queryParams.get('src');
  const videoTitle = queryParams.get('title');
  const videoDuration = queryParams.get('duration');
  const likes = queryParams.get('likes');
  const dislikes = queryParams.get('dislikes');

  useEffect(() => {
    const token = localStorage.getItem('pro-token');
    console.log('Token from localStorage:', token); // Debug token retrieval

    if (!token) {
      console.log('No token found, redirecting to /login');
      navigate('/login');
    } else {
      setIsAuthenticated(true);
      setAuthToken(token);

      const fetchVideos = async () => {
        try {
          const response = await fetchData('http://localhost:3000/api/user/listvideos');
          console.log('Fetched videos:', response.data); // Debug video fetch
          if (response.data.message === 'Data fetched successfully') {
            setVideos(response.data.data);
          } else {
            console.error('Error fetching videos:', response.data.message);
          }
        } catch (error) {
          console.error('Error fetching videos:', error);
        }
      };
      fetchVideos();
    }
  }, [navigate]);


  return (
    <div className='flex flex-col lg:flex-row'>
      <div className="lg:w-1/2 lg:fixed w-full z-10 bg-white sticky top-16 lg:h-[calc(100vh-56px)] lg:flex lg:flex-col lg:items-start lg:justify-start lg:p-4">
        <video controls autoPlay src={videoSrc} className="w-full object-cover">
          Your browser does not support the video tag.
        </video>
        <h1 className="text-2xl lg:text-3xl p-1 font-bold py-2">{videoTitle}</h1>
        <div className='flex flex-wrap w-full justify-between bg-white py-2'>
          <p>
            <Tooltip text={"Like"}>
              <span className='mx-2 text-xl flex items-center'>
                <BiLike className='text-2xl hover:text-3xl cursor-pointer' /> {likes}
              </span>
            </Tooltip>
            <Tooltip text={"Dislike"}>
              <span className='mx-2 text-xl flex items-center'>
                <BiDislike className='text-2xl hover:text-3xl cursor-pointer' /> {dislikes}
              </span>
            </Tooltip>
          </p>
          <p>
            <span className='p-2 border m-2 hover:cursor-pointer hover:border-2 hover:border-black rounded-lg shadow-lg bg-slate-400 text-white'>Low</span>
            <span className='p-2 border m-2 hover:cursor-pointer hover:border-2 hover:border-black rounded-lg shadow-lg bg-slate-400 text-white'>Medium</span>
            <span className='p-2 border m-2 hover:cursor-pointer hover:border-2 hover:border-black rounded-lg shadow-lg bg-slate-400 text-white'>High</span>
          </p>
        </div>
      </div>

      <div className='lg:w-1/2 lg:right-0 lg:h-[calc(100vh-80px)] lg:fixed w-full z-0 lg:ml-10 overflow-auto flex flex-wrap'>
        {videos.map(video => (
          <VideoCard
            key={video.video_id}
            video={{
              title: video.title,
              id: video.video_id,
              duration: video.duration,
              likes: video.likes,
              dislikes: video.dislikes,
              src: video.medium_url,
              thumbnail: video.thumbnail_url
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
