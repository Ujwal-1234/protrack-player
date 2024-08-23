import React, { useState } from 'react';
import VideoCard from '../components/Video/VideoCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Dummy search results
    setResults([
      { id: 1, title: 'Search Result 1', src: '/path/to/video1.mp4' },
      { id: 2, title: 'Search Result 2', src: '/path/to/video2.mp4' },
      // Add more dummy results
    ]);
  };

  return (
    <div className="p-4 flex items-center justify-center">
      <h1 className="text-3xl font-bold inline">Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" p-2 w-full lg:w-1/2 ml-4 border rounded"
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">Search</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {results.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Search;
