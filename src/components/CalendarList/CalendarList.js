import React, { useContext, useState } from 'react';

import './CalendarList.css';
import {Calendar} from "../Calendar";
import {ThemeContext} from "../../Theme";

const CalendarList = () => {

    const { theme } = useContext(ThemeContext);
    const [selectedMonth, setSelectedMonth] = useState('Март');

    const onSelectMonth = (event) => {
        if(event.target.classList.contains('date-container__control')){
            setSelectedMonth(event.target.textContent);
        }
    }

    return (
        <section style={ theme } className="date-container">
            <div className="data-container__calendars">
                <Calendar month={selectedMonth} />
                <Calendar month={selectedMonth} />
                <Calendar month={selectedMonth} />
            </div>
            <ul className="date-container__controls" onClick={onSelectMonth}>
                <li style={({borderColor: theme.color})} className="date-container__control">Март</li>
                <li style={({borderColor: theme.color})} className="date-container__control">Апрель</li>
                <li style={({borderColor: theme.color})} className="date-container__control">Май</li>
            </ul>
        </section>
    )
}

export default CalendarList;