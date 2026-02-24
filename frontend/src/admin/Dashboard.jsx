import { useState, useEffect } from 'react';
import { getDashboard, getBusinesses, getEvents } from '../services/api';
import { Link } from 'react-router-dom';
import '../styles/admin.css';

const Dashboard = ({ admin }) => {
  const [businesses, setBusinesses] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getBusinesses(), getEvents()])
      .then(([bRes, eRes]) => {
        setBusinesses(bRes.data);
        setEvents(eRes.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="admin-dashboard-container">Loading...</div>;

  return (
    <div className="admin-dashboard-container">
      <div className="admin-header">
        <h1>Dashboard</h1>
        <p className="admin-welcome">Welcome, {admin?.name}</p>
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
      </div>
    </div>
  );
};

export default Dashboard;