import './App.css';
import {Header} from "../Header";
import {CalendarList} from "../CalendarList";
import {Info} from "../Info";

function App() {
  return (
    <div className="App">
      <Header/>
      <CalendarList/>
      <Info/>
    </div>
  );
}

export default App;
