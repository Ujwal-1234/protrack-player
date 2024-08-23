import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context'; // Adjust the path based on your file structure

const ProtectedRoute = ({ element }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (!isAuth) {
    // Redirect to login page and pass the current location as state
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return element;
};

export default ProtectedRoute;
