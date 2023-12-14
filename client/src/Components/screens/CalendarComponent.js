import React, { useState, useCallback } from 'react';
import Calendar from './Calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// const localizer = momentLocalizer(moment);

const events = [
    {
        start: moment('2023-09-17T10:00:00').toDate(),
        end: moment('2023-08-27T11:00:00').toDate(),
        title: "Bride",
        data: {
            type: "Bridal",
            name: "cyrine"
        }
    },

    {
        start: moment('2023-08-27T12:00:00').toDate(),
        end: moment('2023-08-27T13:00:00').toDate(),
        title: "Hair",
        data: {
            type: "Hair",
            name: "Haifa"
        }
    },
    {
        start: moment('2023-08-27T13:00:00').toDate(),
        end: moment('2023-08-27T14:00:00').toDate(),
        title: "Makeup & Hair",
        data: {
            type: "Makeup + Hair",
            name: "Maya"
        }
    },
    {
        start: moment('2023-08-27T14:00:00').toDate(),
        end: moment('2023-08-27T15:00:00').toDate(),
        title: "Bride",
        data: {
            type: "Bridal",
            name: "caline"
        }
    }, {
        start: moment('2023-08-27T20:00:00').toDate(),
        end: moment('2023-08-27T22:00:00').toDate(),
        title: "Makeup Class",
        data: {
            type: "Class",
            name: "Mhammad Harb"
        }
    }, {
        start: moment('2023-08-28T14:00:00').toDate(),
        end: moment('2023-08-28T15:00:00').toDate(),
        title: "Bride",
        data: {
            type: "Bridal",
            name: "sabah"
        }
    }, {
        start: moment('2023-08-28T20:00:00').toDate(),
        end: moment('2023-08-28T22:00:00').toDate(),
        title: "Makeup Class",
        data: {
            type: "Class",
            name: "Mhammad Harb"
        }
    },

];

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [myEvents, setEvents] = useState(events)

    const addSlot = useCallback(
        ({ start, end }) => {
            const roundedStart = moment(start).startOf('hour');
            const roundedEnd = moment(roundedStart).add(1, 'hour');
            const title = window.prompt('New Event name');
            if (title) {
                setEvents((prev) => [...prev, { start: roundedStart.toDate(), end: roundedEnd.toDate(), title }]);
            }
        },
        [setEvents]
    );

    const selectEvent = useCallback(
        (event) => window.alert(event.title),
        []
    );


    // const handleEventSelect = (event) => {
    //     setSelectedDate(event.start);
    //     setSelectedEvents([event]);
    //     console.log(event);
    //     console.log(selectedDate);
    //     console.log(selectedEvents);
    // };


    return (
        <div className="calendar-container">
            <Calendar
                // localizer={localizer}
                events={myEvents}
                // startAccessor="start"
                // endAccessor="end"
                onSelectSlot={addSlot}
                onSelectEvent={selectEvent}
                selectable

            // onSelectEvent={handleEventSelect}
            />
            <div className="event-details">
                {selectedDate && (
                    <div>
                        <h3>{moment(selectedDate).format('MMMM D, YYYY')}</h3>
                        {/* Display available hours and booking status here */}

                    </div>
                )}
            </div>
        </div>
    );
};

export default CalendarComponent;
