import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import NewPatient from './components/NewPatient';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className='w-4/5'>
          <Dashboard></Dashboard>
        </div>
      </div>
    </div>
  );
}

export default App;
