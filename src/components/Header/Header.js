import React, { useContext } from 'react';

import './Header.css';
import { ThemeSwitcher } from "../ThemeSwitcher";
import { ThemeContext } from "../../Theme";

const Header = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <header style={theme} className="header">
            <h1 className="header__title">Тестовое задание</h1>
            <ThemeSwitcher/>
        </header>
    );
}

export default Header