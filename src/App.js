import './App.css';
import Navbar from './components/Navbar';
import NewPatient from './components/NewPatient';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewPatient></NewPatient>
    </div>
  );
}

export default App;
