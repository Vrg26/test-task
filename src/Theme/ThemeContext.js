import React from 'react';
import Themes from "./Themes";

const ThemeContext = React.createContext(
    {
        theme: Themes.dark,
        toggleTheme: () => {}
    });
export default ThemeContext;