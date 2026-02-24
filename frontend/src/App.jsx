import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const stored = localStorage.getItem('admin');
    if (stored) setAdmin(JSON.parse(stored));
  }, []);

  const PrivateRoute = ({ children }) => {
    return admin ? children : <Navigate to="/admin/login" />;
  };

  return (
    <BrowserRouter>
      <Header admin={admin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<Login setAdmin={setAdmin} />} />
        <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard admin={admin} /></PrivateRoute>} />
        <Route path="/admin/messages" element={<PrivateRoute><Messages /></PrivateRoute>} />
      </Routes>
      <Footer />
      <ChatWidget />
    </BrowserRouter>
  );
}

export default App;