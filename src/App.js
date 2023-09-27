import './App.css';
import Chat from './pages/Chat';
import Doctor from './pages/Doctor';
import Help from './pages/Help';
import Home from './pages/Home';
import Patient from './pages/Patient';
import { Routes, Route } from "react-router-dom"
import Settings from './pages/Settings';
import Calendar from './pages/Calendar';
import Invoices from './pages/Invoices';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </div>
  );
}

export default App;
