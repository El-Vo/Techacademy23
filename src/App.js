import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import SelectedDate from './SelectedDate';
import ExerciseTable from './ExerciseTable';
import Footer from './Footer';

function App() {
  return (
      <div className="App">
          <Navbar/>
          <SelectedDate/>
          <ExerciseTable/>
          <Footer/>
      </div>
  );
}

export default App;
