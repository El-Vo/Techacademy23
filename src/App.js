import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import SelectedDate from './SelectedDate';
import ExerciseTable from './ExerciseTable';
import Footer from './Footer';
import {useState} from "react";

function App() {
    const dateFormatting = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Europe/Berlin' };
    const [displayedDate, setDisplayedDate] = useState(new Date());
    function showTomorrow() {
        const date = new Date(displayedDate.setDate(displayedDate.getDate() + 1));
        setDisplayedDate(date);
    }

    function showYesterday() {
        const date = new Date(displayedDate.setDate(displayedDate.getDate() - 1));
        setDisplayedDate(date);
    }

    /*
    This function is used to format the active date for displaying on the website.
     */
    function activeDatePretty() {
        return displayedDate.toLocaleDateString("de-DE", dateFormatting);
    }

    /*
    This function is used to format the active date for usage in the database.
     */
    function activeDateISO() {
        //The Canadian formatting equals the ISO-format 'yyyy-mm-dd' and can therefore be used as a
        //replacement for the date.toISOString().split('T')[0]; function while respecting the berlin timezone
        return displayedDate.toLocaleDateString("en-CA", dateFormatting);
    }

    return (
      <div className="App">
          <Navbar/>
          <SelectedDate displayedDate={activeDatePretty()} showTomorrow={showTomorrow} showYesterday={showYesterday}/>
          <ExerciseTable queriedDate={activeDateISO()}/>
          <Footer/>
      </div>
  );
}

export default App;
