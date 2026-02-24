import { useState, useEffect } from 'react';
import { getMessages } from '../services/api';
import '../styles/admin.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMessages()
      .then(({ data }) => setMessages(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="admin-messages-container">Loading...</div>;

  return (
    <div className="admin-messages-container">
      <h1 className="admin-messages-title">Messages</h1>
      
      <div className="admin-messages-grid">
        {messages.map(msg => (
          <div key={msg._id} className="admin-message-card">
            <h3 className="admin-message-sender">{msg.senderName}</h3>
            <p className="admin-message-email">{msg.senderEmail}</p>
            <p className="admin-message-text">{msg.message}</p>
            <p>
              <strong>Status:</strong> 
              <span className={`admin-message-status ${msg.status === 'answered' ? 'status-answered' : 'status-unanswered'}`}>
                {msg.status}
              </span>
            </p>
            <p className="admin-message-date">{new Date(msg.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;