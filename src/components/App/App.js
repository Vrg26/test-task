import React, { useState } from 'react'
import './App.css';
import {Header} from "../Header";
import {CalendarList} from "../CalendarList";
import {Info} from "../Info";
import { ThemeContext, Themes } from '../../Theme';

function App() {

  const [theme, setTheme] = useState(Themes.light);

  const toggleTheme = (value) => value ?
                            setTheme(Themes.dark)
                            : setTheme(Themes.light)

  return (
      <ThemeContext.Provider value={({theme, toggleTheme})}>
          <div style={theme} className="App">
              <Header/>
              <CalendarList/>
              <Info/>
          </div>
      </ThemeContext.Provider>
  );
}

export default App;
