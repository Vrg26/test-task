import React from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
    return (
        <label className="theme-switcher">
            <input type="checkbox" className="theme-switcher__input visually-hidden"/>
            <div className="theme-switcher__box">
                <div className="theme-switcher__box-toggle"> </div>
            </div>
        </label>
    );
}
export default ThemeSwitcher;