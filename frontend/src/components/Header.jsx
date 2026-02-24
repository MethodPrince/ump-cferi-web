import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = ({ admin }) => {
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
          {admin && (
            <>
              <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/admin/messages" className="nav-link">Messages</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;