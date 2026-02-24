import { useState } from 'react';
import { loginAdmin, setAuthToken } from '../services/api';
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
      // Persist token and set Authorization header for subsequent requests
      if (data.token) {
        localStorage.setItem('adminToken', data.token);
        setAuthToken(data.token);
      }
      // store admin object (includes name/email/token)
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
          <h2>Admin Login</h2>
          <p>UMP CFERI Administration</p>
        </div>
        
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
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="admin-login-footer">
          <p>Default credentials: admin@umpcferi.ac.za / admin123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;