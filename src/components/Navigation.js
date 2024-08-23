import React from 'react';
import { Link } from 'react-router-dom';
import '../asset/Navigation.css'
import { FaHome, FaSearch, FaUser, FaVideo, FaCloudUploadAlt } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 sticky top-0 z-10 lg:z-20 h-1/6 text-white flex justify-between p-4 items-center">
      <Link to="/" className="lg:text-2xl hidden lg:block font-bold">Pro-Track</Link>
      <div className="flex space-x-4">
        <p className=' flex items-center justify-center'><Link to="/" className="flex items-center"><FaHome  className=' text-2xl  m-2'/> Home</Link></p>
        <p className=' flex items-center justify-center'><Link to="/live" className="flex items-center"><FaVideo  className=' text-2xl  m-2'/> Live</Link></p>
        <p className=' flex items-center justify-center'><Link to="/profile" className="flex items-center"><FaUser  className=' text-2xl  m-2'/> Profile</Link></p>
      </div>
      <div className=' fixed lg:bottom-10 bottom-5 right-5 lg:right-10'>
        <p className=' flex items-cente justify-center'><Link to="/upload" className="flex text-black items-center shadow shadow-black p-2 bg-slate-200 rounded-full hover:text-xl"><FaCloudUploadAlt  className=' text-4xl  m-2'/> Upload</Link></p>
      </div>
    </nav>
  );
}

export default Navigation;