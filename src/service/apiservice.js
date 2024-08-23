import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apiClient.defaults.headers.common['Content-Type'] = 'application/json';
    // console.log('Token set:', token); // Debugging line
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

// API calls
export const fetchData = async (endpoint) => {
  // console.log('Headers before request:', apiClient.defaults.headers.common); // Debugging line
  return await apiClient.get(endpoint);
};

export const postData = async (endpoint, data) => {
  // console.log('Headers before request:', apiClient.defaults.headers.common); // Debugging line
  return await apiClient.post(endpoint, data);
};

export const updateData = async (endpoint, id, data) => {
  return await apiClient.put(`${endpoint}/${id}`, data);
};

export const deleteData = async (endpoint, id) => {
  return await apiClient.delete(`${endpoint}/${id}`);
};

// Example usage
// (async () => {
//   const token = 'your-token-here'; // Replace with your actual token
//   setAuthToken(token);

//   try {
//     const data = await fetchData('/api/daily_updates/staticdata');
//     console.log('Data:', data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// })();
