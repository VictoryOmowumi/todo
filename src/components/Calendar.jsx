import React, {useState} from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([]);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleAddEvent = () => {
      const eventTitle = prompt("Enter event title:");
      if (eventTitle) {
        const newEvent = {
          date: selectedDate,
          title: eventTitle,
        };
        setEvents([...events, newEvent]);
      }
    };
  
    return (
      <div>
        <h1>Calendar</h1>
        <Calendar onChange={handleDateChange} value={selectedDate}
         className='w-3/4 mx-auto bg-white border-2 border-gray-200 rounded-lg shadow-lg '

        />
        <button onClick={handleAddEvent}>Add Event</button>
        <div>
          <h2>Events</h2>
          {events.map((event, index) => (
            <div key={index}>
              <strong>{event.title}</strong> - {event.date.toString()}
            </div>
          ))}
        </div>
      </div>
    );
}

export default CalendarPage