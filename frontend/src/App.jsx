import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { checkAuthStatus, setAuthToken } from './services/api';
import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Messages from './admin/Messages';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const [admin, setAdmin] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      // If token exists in localStorage, set it on the axios instance
      const token = localStorage.getItem('adminToken');
      if (token) setAuthToken(token);
      try {
        const { data } = await checkAuthStatus();
        setAdmin(data);
      } catch (error) {
        console.log('Not authenticated');
        setAdmin(null);
      } finally {
        setAuthLoading(false);
      }
    };
    verifyUser();
  }, []);

  const PrivateRoute = ({ children }) => {
    return admin ? children : <Navigate to="/admin/login" />;
  };

  // If already logged in, redirect from login to dashboard
  const PublicRoute = ({ children }) => {
    return !admin ? children : <Navigate to="/admin/dashboard" />;
  };

  if (authLoading) {
    return <div style={{ textAlign: 'center', padding: '5rem', fontSize: '1.2rem' }}>Loading Application...</div>;
  }

  return (
    <BrowserRouter>
      <Header admin={admin} />
      <Routes>
        {/* Public Routes - Everyone can access */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Admin Login - Redirect to dashboard if already logged in */}
        <Route path="/admin/login" element={
          <PublicRoute>
            <Login setAdmin={setAdmin} />
          </PublicRoute>
        } />
        
        {/* Protected Admin Routes */}
        <Route path="/admin/dashboard" element={
          <PrivateRoute>
            <Dashboard admin={admin} setAdmin={setAdmin} />
          </PrivateRoute>
        } />
        
        <Route path="/admin/messages" element={
          <PrivateRoute>
            <Messages setAdmin={setAdmin} />
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
      <ChatWidget />
    </BrowserRouter>
  );
}

export default App;