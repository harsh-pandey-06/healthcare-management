import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import NewPatient from './components/NewPatient';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewPatient></NewPatient>
      <Dashboard></Dashboard>
      <div className='flex'>
        <div className='w-1/5'>
          <Sidebar />
        </div>
        <div>
          <NewPatient />
        </div>
      </div>
    </div>
  );
}

export default App;
