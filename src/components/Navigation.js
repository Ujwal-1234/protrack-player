import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaUser, FaVideo } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Pro-Track</Link>
      <div className="flex space-x-4">
        <p className=' flex items-center justify-center'><Link to="/" className="flex items-center"><FaHome  className=' text-2xl  m-2'/> Home</Link></p>
        <p className=' flex items-center justify-center'><Link to="/search" className="flex items-center"><FaSearch  className=' text-2xl  m-2'/> Search</Link></p>
        <p className=' flex items-center justify-center'><Link to="/live" className="flex items-center"><FaVideo  className=' text-2xl  m-2'/> Live</Link></p>
        <p className=' flex items-center justify-center'><Link to="/profile" className="flex items-center"><FaUser  className=' text-2xl  m-2'/> Profile</Link></p>
      </div>
    </nav>
  );
}

export default Navigation;
