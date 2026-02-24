import axios from 'axios';
import io from 'socket.io-client';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

const api = axios.create({ baseURL: API_URL });

api.interceptors.request.use((config) => {
  const admin = localStorage.getItem('admin');
  if (admin) {
    const { token } = JSON.parse(admin);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API calls
export const loginAdmin = (email, password) => api.post('/admin/login', { email, password });
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