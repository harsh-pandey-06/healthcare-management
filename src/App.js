import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import NewPatient from './components/NewPatient';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard/>
    </div>
  );
}

export default App;
