import axios from 'axios';
import io from 'socket.io-client';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
});

// Helper to set/remove Authorization header for the axios instance
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// API calls
export const loginAdmin = (email, password) => api.post('/admin/login', { email, password });
export const logoutAdmin = () => {
  // Clear client-side auth state
  localStorage.removeItem('adminToken');
  setAuthToken(null);
  // Return a resolved promise to keep async callers working
  return Promise.resolve({ data: { message: 'Logged out' } });
};
export const checkAuthStatus = () => api.get('/admin/me');
export const getDashboard = () => api.get('/admin/dashboard');
export const getBusinesses = () => api.get('/businesses');
export const getEvents = () => api.get('/events');
export const getMessages = () => api.get('/messages');
export const sendMessage = (data) => api.post('/messages', data);

// Socket
let socket = null;
export const connectSocket = () => {
  if (!socket) socket = io(SOCKET_URL);
  return socket;
};
export const disconnectSocket = () => {
  if (socket) { socket.disconnect(); socket = null; }
};

export default api;