import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import SelectedDate from './SelectedDate';
import ExerciseTable from './ExerciseTable';
import Footer from './Footer';

function App() {
    function database() {
        return fetch('http://localhost:5000/messages')
            .then(response => response.text())
            .then(data => {
            // Erstellen Sie ein neues p-Element
            let p = document.createElement('p');
            // Setzen Sie den Textinhalt des p-Elements auf die Daten
            p.textContent = data;
            // Fügen Sie das p-Element zum Dokument hinzu
            document.body.appendChild(p);
        })
    .catch(error => console.error('Error:', error));
        }


  return (
      <div className="App">
          <Navbar/>
          {database()}
          <SelectedDate/>
          <ExerciseTable/>
          <Footer/>
      </div>
  );
}

export default App;
