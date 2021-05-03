import React, {useContext} from 'react';

import './CalendarList.css';
import {Calendar} from "../Calendar";
import {ThemeContext} from "../../Theme";

const CalendarList = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <section style={ theme } className="date-container">
            <div className="data-container__calendars">
                <Calendar/>
            </div>
            <ul className="date-container__controls">
                <li style={({borderColor: theme.color})} className="date-container__control">Март</li>
                <li style={({borderColor: theme.color})} className="date-container__control">Апрель</li>
                <li style={({borderColor: theme.color})} className="date-container__control">Май</li>
            </ul>
        </section>
    )
}

export default CalendarList;