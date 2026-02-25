import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Businesses from './admin/Businesses';
import EventsAdmin from './admin/Events';
import Mentors from './admin/Mentors';
import Messages from './admin/Messages';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import './styles/ump-theme.css';

function App() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('admin');
    if (stored) setAdmin(JSON.parse(stored));
  }, []);

  const PrivateRoute = ({ children }) => {
    return admin ? children : <Navigate to="/admin/login" />;
  };

  const PublicRoute = ({ children }) => {
    return !admin ? children : <Navigate to="/admin/dashboard" />;
  };

  return (
    <BrowserRouter>
      <Header admin={admin} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={
          <PublicRoute>
            <Login setAdmin={setAdmin} />
          </PublicRoute>
        } />
        
        <Route path="/admin/dashboard" element={
          <PrivateRoute>
            <Dashboard admin={admin} setAdmin={setAdmin} />
          </PrivateRoute>
        } />
        
        <Route path="/admin/businesses" element={
          <PrivateRoute>
            <Businesses setAdmin={setAdmin} />
          </PrivateRoute>
        } />
        
        <Route path="/admin/events" element={
          <PrivateRoute>
            <EventsAdmin setAdmin={setAdmin} />
          </PrivateRoute>
        } />
        
        <Route path="/admin/mentors" element={
          <PrivateRoute>
            <Mentors setAdmin={setAdmin} />
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