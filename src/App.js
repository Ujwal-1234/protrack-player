import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import LiveStream from './pages/LiveStream';
import VideoDetail from './pages/VideoDetail';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';
import VideoUpload from './pages/VideoUpload';
import VideoPlayer from './components/Video/VideoPlayer';
import './App.css';
import { AuthProvider, useAuth } from './context';
import SignIn from './components/Auth/SignIn';
import Signup from './components/Auth/Signup';
import Otp from './components/Auth/Otp';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation />
          <div className="">
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/search"
                element={
                  <PrivateRoute>
                    <Search />
                  </PrivateRoute>
                }
              />
              <Route
                path="/live"
                element={
                  <PrivateRoute>
                    <LiveStream />
                  </PrivateRoute>
                }
              />
              <Route
                path="/video/:id"
                element={
                  <PrivateRoute>
                    <VideoDetail />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/upload"
                element={
                  <PrivateRoute>
                    <VideoUpload />
                  </PrivateRoute>
                }
              />
              <Route
                path="/videoplayer"
                element={
                  <PrivateRoute>
                    <VideoPlayer />
                  </PrivateRoute>
                }
              />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verify" element={<Otp />} />
              <Route path="*" element={<Navigate to={useAuth().isAuth ? '/' : '/signin'} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/signin" />;
}

export default App;
