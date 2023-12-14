import { Calendar as BC, momentLocalizer } from 'react-big-calendar';
import React, { useMemo } from 'react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/Calendar.css';
import { isMobile } from 'react-device-detect';
import DateCalendarValue from './DateCalendarValue';

const localizer = momentLocalizer(moment);


const colors = [
    {
        color: {
            primary: "#26261F",
            secondary: "#746653",
            tertiary: "#806554",
            quaternary: "#CABF83",
            background: "#F0EFEA"
        }
    }
];


const style = { height: '65vh', width: '90vw' };
const defaultView = "day";
const views = isMobile ? ["day"] : ["day"];
const min = moment("2023-08-27T09:00:00").toDate();
const max = moment("2023-08-27T18:00:00").toDate();
const components = {
    event: (props) => {
        console.log('props', props);
        const eventType = props?.event?.data?.type;
        switch (eventType) {
            case 'Bridal':
                return <div style={{ background: colors[0].color.quaternary, color: 'white', height: '100%' }}>{[props.title, " ", props.event.data.name,]}</div>
            case 'Makeup':
                return <div style={{ background: colors[0].color.tertiary, color: 'white', height: '100%' }}>{[props.title, " ", props.event.data.name,]}</div>
            case 'Makeup + Hair':
                return <div style={{ background: colors[0].color.quaternary, color: 'white', height: '100%' }}>{[props.title, " ", props.event.data.name,]}</div>
            case 'Hair':
                return <div style={{ background: colors[0].color.secondary, color: 'white', height: '100%' }}>{[props.title, " ", props.event.data.name,]}</div>
            case 'Class':
                return <div style={{ background: 'lightgreen', color: 'white', height: '100%' }}>{[props.title, " ", props.event.data.name,]}</div>
            default: return null
        }
    }
};


export default function Calendar(props) {
    const { formats } = useMemo(
        () => ({
            formats: <DateCalendarValue />,
        }),

        []
    );
    return React.createElement(BC, { ...props, localizer, style, defaultView, views, min, max, components });
}


