import { useState } from 'react';
import { loginAdmin } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/admin.css';

const Login = ({ setAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { data } = await loginAdmin(email, password);
      localStorage.setItem('admin', JSON.stringify(data));
      setAdmin(data);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <div className="admin-login-header">
          <div className="admin-login-logo">
            <img src="/images/ump-logo.jpg" alt="UMP Logo" />
          </div>
          <h2>Admin Login</h2>
          <p>UMP CFERI Administration</p>
        </div>
        
        <div className="admin-login-form">
          {error && <div className="admin-login-error">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="admin-login-form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                className="admin-login-input"
                placeholder="admin@umpcferi.ac.za"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            
            <div className="admin-login-form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="admin-login-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            
            <button 
              type="submit" 
              className="admin-login-button"
              disabled={loading}
            >
              {loading ? (
                <span className="admin-login-loading">
                  <span className="admin-login-spinner"></span>
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>
          
          <div className="admin-login-footer">
            <p>Default: <strong>admin@umpcferi.ac.za</strong> / <strong>admin123</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;