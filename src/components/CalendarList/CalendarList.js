import React from 'react';

import './CalendarList.css';
import {Calendar} from "../Calendar";

const CalendarList = () => {
    return (
        <section className="date-container">
            <div className="data-container__calendars">
                <Calendar/>
            </div>
            <ul className="date-container__controls">
                <li className="date-container__control">Март</li>
                <li className="date-container__control">Апрель</li>
                <li className="date-container__control">Май</li>
            </ul>
        </section>
    )
}

export default CalendarList;