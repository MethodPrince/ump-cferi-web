import axios from 'axios';
import io from 'socket.io-client';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

const api = axios.create({ baseURL: API_URL });

// Add token to requests
api.interceptors.request.use((config) => {
  const admin = localStorage.getItem('admin');
  if (admin) {
    const { token } = JSON.parse(admin);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ========== AUTH ==========
export const loginAdmin = (email, password) => api.post('/admin/login', { email, password });
export const getDashboard = () => api.get('/admin/dashboard');
export const logoutAdmin = () => {
  localStorage.removeItem('admin');
  return Promise.resolve();
};
export const checkAuthStatus = () => {
  const admin = localStorage.getItem('admin');
  return Promise.resolve(admin ? JSON.parse(admin) : null);
};
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// ========== BUSINESSES ==========
export const getBusinesses = () => api.get('/businesses');
export const getBusinessById = (id) => api.get(`/businesses/${id}`);
export const createBusiness = (data) => api.post('/businesses', data);
export const updateBusiness = (id, data) => api.put(`/businesses/${id}`, data);
export const deleteBusiness = (id) => api.delete(`/businesses/${id}`);

// ========== EVENTS ==========
export const getEvents = () => api.get('/events');
export const getEventById = (id) => api.get(`/events/${id}`);
export const createEvent = (data) => api.post('/events', data);
export const updateEvent = (id, data) => api.put(`/events/${id}`, data);
export const deleteEvent = (id) => api.delete(`/events/${id}`);

// ========== MENTORS ==========
export const getMentors = () => api.get('/mentors');
export const getMentorById = (id) => api.get(`/mentors/${id}`);
export const createMentor = (data) => api.post('/mentors', data);
export const updateMentor = (id, data) => api.put(`/mentors/${id}`, data);
export const deleteMentor = (id) => api.delete(`/mentors/${id}`);

// ========== MESSAGES ==========
export const getMessages = () => api.get('/messages');
export const getMessageById = (id) => api.get(`/messages/${id}`);
export const sendMessage = (data) => api.post('/messages', data);
export const replyToMessage = (id, data) => api.put(`/messages/${id}`, data);
export const updateMessageStatus = (id, data) => api.patch(`/messages/${id}/status`, data);
export const deleteMessage = (id) => api.delete(`/messages/${id}`);

// ========== SOCKET ==========
let socket = null;
export const connectSocket = () => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      transports: ['websocket'],
      withCredentials: true
    });
  }
  return socket;
};
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export default api;