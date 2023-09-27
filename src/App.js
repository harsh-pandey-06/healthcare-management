import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import NewPatient from './components/NewPatient';
import Sidebar from './components/Sidebar';
import PatientRecords from './components/Patients/Records';
import DoctorAppoints from './components/Doctors/Appointments';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <NewPatient></NewPatient>
      <Dashboard></Dashboard> */}
      <div className='flex'>
        <div className='w-1/5'>
          <Sidebar />
        </div>
        <div className='w-4/5'>
        <PatientRecords/>
        </div>
      </div>
    </div>
  );
}

export default App;
