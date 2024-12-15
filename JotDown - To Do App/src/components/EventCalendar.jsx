import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import '../css/Calendar.css';
import Sidebar from './Sidebar';
const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [eventInput, setEventInput] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, [date]);

  const fetchEvents = async () => {
    const dateString = date.toISOString().split('T')[0];
    const response = await axios.get(`http://localhost:8080/api/events/${dateString}`);
    setEvents(response.data);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setEventInput('');
  };

  const handleEventSave = async () => {
    if (eventInput.trim() === '') return;

    const newEvent = { title: eventInput, date: date.toISOString().split('T')[0] };
    await axios.post('http://localhost:8080/api/events', newEvent);
    setEventInput('');
    fetchEvents(); 
  };

  const handleEventEdit = async (event, id) => {
    const updatedTitle = prompt('Edit event:', event);
    if (updatedTitle) {
      await axios.put(`http://localhost:8080/api/events/${id}`, { title: updatedTitle, date: date.toISOString().split('T')[0] });
      fetchEvents(); 
    }
  };

  const handleEventDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/events/${id}`);
    fetchEvents();
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div className="calendar-container">
        <h2>Event Calendar</h2>
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="calendar"
        />
        <input
          type="text"
          value={eventInput}
          onChange={(e) => setEventInput(e.target.value)}
          placeholder="Add an event..."
          className="event-input"
        />
        <button onClick={handleEventSave} className="save-button">
          Save Event
        </button>
        <div className="event-list">
          <h3>Events on {date.toDateString()}:</h3>
          {events.length === 0 ? (
            <p>No events</p>
          ) : (
            <ul>
              {events.map((event) => (
                <li key={event.id} className="event-item">
                  <span>{event.title}</span>
                  <div className="event-actions">
                    <button
                      className="edit-button"
                      onClick={() => handleEventEdit(event.title, event.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleEventDelete(event.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;