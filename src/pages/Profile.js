import React from 'react';

const Profile = () => {
  // Dummy profile data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const history = [
    { id: 1, title: 'Watched Video 1' },
    { id: 2, title: 'Watched Video 2' },
    // Add more dummy history
  ];

  const activities = [
    { id: 1, action: 'Liked Video 1' },
    { id: 2, action: 'Commented on Video 2' },
    // Add more dummy activities
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-2xl font-bold mb-2">User Info</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-2xl font-bold mb-2">History</h2>
        <ul>
          {history.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-2">Activities</h2>
        <ul>
          {activities.map(item => (
            <li key={item.id}>{item.action}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
