import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

const Header = ({ admin }) => {
  const location = useLocation();
  
  // Check if current path is admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  // If we're on an admin route and admin is logged in, show admin header
  if (isAdminRoute && admin) {
    return (
      <nav className="header admin-header">
        <div className="header-container">
          <Link to="/admin/dashboard" className="logo">UMP CFERI Admin</Link>
          <div className="nav-links">
            <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/admin/messages" className="nav-link">Messages</Link>
          </div>
        </div>
      </nav>
    );
  }

  // If we're on an admin route but not logged in, show minimal header
  if (isAdminRoute && !admin) {
    return (
      <nav className="header">
        <div className="header-container">
          <Link to="/" className="logo">UMP CFERI</Link>
          <div className="nav-links">
            <Link to="/admin/login" className="nav-link admin-login-link">Admin Login</Link>
          </div>
        </div>
      </nav>
    );
  }

  // Regular public site header
  return (
    <nav className="header">
      <div className="header-container">
        <Link to="/" className="logo">UMP CFERI</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/impact" className="nav-link">Impact</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;