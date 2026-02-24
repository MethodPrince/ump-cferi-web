import { useState, useEffect } from 'react';
import { getEvents } from '../services/api';
import '../styles/events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then(({ data }) => setEvents(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="events-container event-loading">Loading...</div>;

  return (
    <div className="events-container">
      <h1 className="events-title">Events & Programs</h1>
      
      <div className="events-grid">
        {events.map(event => (
          <div key={event._id} className="event-card">
            <h3>{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <p className="event-detail"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p className="event-detail"><strong>Location:</strong> {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;