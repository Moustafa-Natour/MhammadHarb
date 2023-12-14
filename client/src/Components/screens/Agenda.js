// src/Agenda.js
import React, { useState } from 'react';
import Event from './Event';

const Agenda = ({ events }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className="agenda">
            <h2>Your Agenda</h2>
            {events.map((event, index) => (
                <Event
                    key={index}
                    event={event}
                    onSelect={handleEventSelect}
                    isSelected={event === selectedEvent}
                />
            ))}
        </div>
    );
};

export default Agenda;
