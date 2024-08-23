import React, { useState, useEffect } from 'react';

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [userId, setUserId] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a video file.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('userId', userId);
    formData.append('video', file);

    try {
      setError('')
      setSuccessMessage('')
      setLoading(true);
      // console.log(formData)
      const response = await fetch('http://localhost:3000/api/daily_updates/uploadvideo', {
        method: 'POST',
        headers: {'authorization':`Bearer ${localStorage.getItem('pro-token')}`},
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload video.');
      }

      const data = await response.json();
      setLoading(false);
      setSuccessMessage('Video uploaded and converted successfully!');
      setError('');
    } catch (err) {
      setLoading(false);
      setError(`Error: ${err.message}`);
      setSuccessMessage('');
    }
  };

  return (
    <div className=" w-full  flex items-center justify-center ">
      <form onSubmit={handleSubmit} className=' text-xl p-4 rounded-lg shadow-lg'>
        <div>
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 w-full border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="p-2 border w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Video File:</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="p-2 border w-full rounded"
            required
          />
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
          Upload Video
        </button>
      </form>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {loading && <div className="text-red-500 mt-4">Wait For a While. Uploading Video .....</div>}
      {successMessage && <div className="text-green-500 mt-4">{successMessage}</div>}
      {/* {progress > 0 && <div className="mt-4">Processing Progress: {Math.round(progress)}%</div>} */}
    </div>
  );
};

export default VideoUpload;