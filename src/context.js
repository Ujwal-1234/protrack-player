import React, { createContext, useState, useEffect, useContext } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    // Retrieve authentication state from local storage
    const token = localStorage.getItem('pro-token');
    return !!token;
  });

  useEffect(() => {
    // Update authentication state when local storage changes
    const handleStorageChange = () => {
      const token = localStorage.getItem('pro-token');
      setIsAuth(!!token);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Explicit login function
  const login = (token) => {
    localStorage.setItem('pro-token', token);
    setIsAuth(true);
  };

  // Explicit logout function
  const logout = () => {
    localStorage.removeItem('pro-token');
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
