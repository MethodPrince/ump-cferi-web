import { useState, useEffect } from 'react';
import { getBusinesses, getEvents, getMentors } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/admin.css';

const Dashboard = ({ admin, setAdmin }) => {
  const [businesses, setBusinesses] = useState([]);
  const [events, setEvents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [bRes, eRes, mRes] = await Promise.all([
        getBusinesses(),
        getEvents(),
        getMentors()
      ]);
      setBusinesses(bRes.data);
      setEvents(eRes.data);
      setMentors(mRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin');
    if (typeof setAdmin === 'function') setAdmin(null);
    navigate('/admin/login');
  };

  if (loading) return <div className="admin-loading">Loading...</div>;

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Dashboard</h1>
        <div className="admin-user">
          <span>Welcome, {admin?.name}</span>
          <button onClick={handleLogout} className="admin-logout-btn">Logout</button>
        </div>
      </div>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <h3>{businesses.length}</h3>
          <p>Total Businesses</p>
          <Link to="/admin/businesses" className="stat-link">Manage →</Link>
        </div>
        <div className="admin-stat-card">
          <h3>{events.length}</h3>
          <p>Total Events</p>
          <Link to="/admin/events" className="stat-link">Manage →</Link>
        </div>
        <div className="admin-stat-card">
          <h3>{mentors.length}</h3>
          <p>Total Mentors</p>
          <Link to="/admin/mentors" className="stat-link">Manage →</Link>
        </div>
        <div className="admin-stat-card">
          <h3>-</h3>
          <p>Messages</p>
          <Link to="/admin/messages" className="stat-link">View →</Link>
        </div>
      </div>

      <div className="admin-quick-actions">
        <h2>Quick Actions</h2>
        <div className="quick-actions-grid">
          <Link to="/admin/businesses?action=add" className="quick-action-card">
            <span className="quick-icon">➕</span>
            <span>Add Business</span>
          </Link>
          <Link to="/admin/events?action=add" className="quick-action-card">
            <span className="quick-icon">📅</span>
            <span>Add Event</span>
          </Link>
          <Link to="/admin/mentors?action=add" className="quick-action-card">
            <span className="quick-icon">👥</span>
            <span>Add Mentor</span>
          </Link>
          <Link to="/admin/messages" className="quick-action-card">
            <span className="quick-icon">💬</span>
            <span>View Messages</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;