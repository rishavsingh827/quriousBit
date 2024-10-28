// App.js
import React, { useState, useEffect } from 'react';
import eventsData from './data/events';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const loadData = setTimeout(() => {
      setLoading(false); // Set loading to false once data is "loaded"
    }, 1000); // Adjust time as needed for actual data loading time

    return () => clearTimeout(loadData);
  }, []);

  // Filter events by name or location
  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app">
      <div className="header-container">
        <header className="header">
          <h1>EventSpot Lite</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search by event name or location..."
            value={searchQuery}
            onChange={handleSearchChange}
          />

        </header>
      </div>

      {/* Event List */}
      <div className="event-list">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card" onClick={() => handleEventClick(event)}>
            <img className="event-image" src={event.image} alt={event.name} /> {/* Image in Event List */}
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        ))}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="event-modal-overlay" onClick={handleCloseModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <img className="event-image" src={selectedEvent.image} alt={selectedEvent.name} /> {/* Image in Event Modal */}
            <h2>{selectedEvent.name}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p>{selectedEvent.description}</p>
          </div>
        </div>
      )}

      

    </div>
  );
}

export default App;
