import { useState, useEffect } from 'react';
import { getBusinesses } from '../services/api';
import '../styles/impact.css';

const Impact = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBusinesses()
      .then(({ data }) => setBusinesses(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="impact-container loading">Loading...</div>;

  const totalJobs = businesses.reduce((sum, b) => sum + (b.jobsCreated || 0), 0);
  const industries = new Set(businesses.map(b => b.industry)).size;

  return (
    <div className="impact-container">
      <h1 className="impact-title">Our Impact</h1>
      
      <div className="impact-stats">
        <div className="impact-stat-card">
          <h2>{businesses.length}</h2>
          <p>Businesses Supported</p>
        </div>
        <div className="impact-stat-card">
          <h2>{totalJobs}</h2>
          <p>Jobs Created</p>
        </div>
        <div className="impact-stat-card">
          <h2>{industries}</h2>
          <p>Industries</p>
        </div>
      </div>

      <h2 className="impact-subtitle">Student Businesses</h2>
      <div className="impact-grid">
        {businesses.map(business => (
          <div key={business._id} className="impact-card">
            <h3>{business.name}</h3>
            <p><strong>Owner:</strong> {business.owner}</p>
            <p><strong>Industry:</strong> {business.industry}</p>
            <p><strong>Jobs Created:</strong> {business.jobsCreated}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;