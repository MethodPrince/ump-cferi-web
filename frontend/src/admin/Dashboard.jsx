import { useState, useEffect } from 'react';
import { getBusinesses, getEvents, logoutAdmin } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/admin.css';

const Dashboard = ({ admin, setAdmin }) => {
  const [businesses, setBusinesses] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([getBusinesses(), getEvents()])
      .then(([bRes, eRes]) => {
        setBusinesses(bRes.data);
        setEvents(eRes.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      setAdmin(null);
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  if (loading) return <div className="admin-dashboard-container loading">Loading...</div>;

  return (
    <div className="admin-dashboard-container">
      <div className="admin-header">
        <h1>Dashboard</h1>
        <div className="admin-user-section">
          <p className="admin-welcome">Welcome, {admin?.name}</p>
          <button onClick={handleLogout} className="admin-logout-btn">Logout</button>
        </div>
      </div>
      
      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>{businesses.length}</h3>
          <p>Total Businesses</p>
        </div>
        <div className="admin-stat-card">
          <h3>{events.length}</h3>
          <p>Total Events</p>
        </div>
      </div>

      <div className="admin-links">
        <Link to="/admin/messages" className="admin-link">View Messages</Link>
        <Link to="/" className="admin-link admin-link-secondary">Back to Site</Link>
      </div>
    </div>
  );
};

export default Dashboard;