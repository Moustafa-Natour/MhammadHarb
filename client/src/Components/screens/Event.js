// src/Event.js
import React from 'react';

const Event = ({ event, onSelect, isSelected }) => {
  return (
    <div className={`event ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(event)}>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      {isSelected && <p>{event.description}</p>}
    </div>
  );
};

export default Event;
