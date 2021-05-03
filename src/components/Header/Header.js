import React from 'react';

import './Header.css';
import {ThemeSwitcher} from "../ThemeSwitcher";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Тестовое задание</h1>
            <ThemeSwitcher/>
        </header>
    );
}

export default Header