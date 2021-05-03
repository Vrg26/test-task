import React, { useContext } from 'react';

import './Calendar.css'
import {ThemeContext} from "../../Theme";

const Calendar = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div style={ theme } className="calendar">
            <div className="calendar__header">
                <button className="calendar__year-picker calendar__year-picker_less calendar__button">
                    <div style={( { borderColor: theme.color} )} className="calendar__button-content"> </div>
                    <div style={( { borderColor: theme.color} )} className="calendar__button-content"> </div>
                </button>
                <button className="calendar__month-picker calendar__month-picker_less calendar__button">
                    <div style={( { borderColor: theme.color} )} className="calendar__button-content"> </div>
                </button>
                <p className="calendar__date-info">
                    март <span className="calendar__year">2021</span>
                </p>

                <button className="calendar__month-picker calendar__month-picker_more calendar__button">
                    <div style={( { borderColor: theme.color} )} className="calendar__button-content"> </div>
                </button>
                <button className="calendar__year-picker calendar__year-picker_more calendar__button">
                    <div style={( { borderColor: theme.color} )} className="calendar__button-content"> </div>
                    <div style={( { borderColor: theme.color} )} className="calendar__button-content"> </div>
                </button>
            </div>
        <div className="calendar__body">
            <ul className="calendar__week-day-list">
                <li className="calendar__week-day-item">пн</li>
                <li className="calendar__week-day-item">вт</li>
                <li className="calendar__week-day-item">ср</li>
                <li className="calendar__week-day-item">чт</li>
                <li className="calendar__week-day-item">пт</li>
                <li className="calendar__week-day-item">сб</li>
                <li className="calendar__week-day-item">вс</li>
            </ul>
            <ul className="calendar__days">
            </ul>
        </div>
    </div>
    )
}

export default Calendar;