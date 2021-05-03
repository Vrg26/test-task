import React, { useContext, useState } from 'react';
import './ThemeSwitcher.css';
import {ThemeContext} from "../../Theme";

const ThemeSwitcher = () => {

    const [lightTheme, toggleLightTheme] = useState(false);
    const { toggleTheme } = useContext(ThemeContext);

    const onChangeTheme = (event) => {
        toggleTheme(event.target.checked);
        toggleLightTheme(event.target.checked);
    }

    return (
        <label className="theme-switcher">
            <input onChange={ onChangeTheme }
                   value={lightTheme}
                   type="checkbox"
                   className="theme-switcher__input visually-hidden"/>
            <div className="theme-switcher__box">
                <div className="theme-switcher__box-toggle"> </div>
            </div>
        </label>
    );
}
export default ThemeSwitcher;