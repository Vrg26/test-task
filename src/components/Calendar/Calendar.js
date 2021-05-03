import React, { useContext } from 'react';

import './Calendar.css'
import {ThemeContext} from "../../Theme";


const creatorDays = (color) => {
    let inactiveDaysCounter = 22;
    let activeDaysCounter = 1
    return (_, index) => {
        if(index < 7){
            return  <div key={index} style={({color: 'rgba(204,204,204,0.6)'})} className="calendar__day">{ inactiveDaysCounter++ }</div>
        }
        if(activeDaysCounter> 31) activeDaysCounter = 1;
        return <div key={index} style={ 38 > index ? ({color}):({color: 'rgba(204,204,204,0.6)'}) } className="calendar__day">{ activeDaysCounter++ }</div>
    }
}

const Calendar = (props) => {
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
                    {props.month} <span className="calendar__year">2021</span>
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
                {Array(42).fill(0).map(creatorDays(theme.color))}
            </ul>
        </div>
    </div>
    )
}

export default Calendar;