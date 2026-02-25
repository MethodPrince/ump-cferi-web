import { useState, useEffect } from 'react';
import { getEvents } from '../services/api';
import '../styles/events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data } = await getEvents();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);

  const eventTypes = ['all', ...new Set(events.map(e => e.type).filter(Boolean))];

  if (loading) return <div className="events-container loading">Loading...</div>;

  return (
    <div className="events-container">
      <h1 className="events-title">Events & Programs</h1>
      
      {events.length > 0 && (
        <div className="events-filter">
          <label>Filter by type: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            {eventTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      )}
      
      <div className="events-grid">
        {filteredEvents.map(event => (
          <div key={event._id} className="event-card">
            <div className="event-type-badge">{event.type || 'event'}</div>
            <h3>{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <div className="event-details">
              <p className="event-detail">
                <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
              </p>
              {event.location && (
                <p className="event-detail">
                  <strong>Location:</strong> {event.location}
                </p>
              )}
            </div>
          </div>
        ))}
        {filteredEvents.length === 0 && (
          <p className="no-events">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;