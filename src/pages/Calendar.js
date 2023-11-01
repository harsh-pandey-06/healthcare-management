import React from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AppointmentHandling from '../components/Appointment/AppointmentHandling';
import UpcomingAppointments from '../components/Appointment/UpcomingAppointments';

const Calendar = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className='w-4/5'>
                    <UpcomingAppointments />
                    {/* <AppointmentHandling /> */}
                </div>
            </div>
        </div>
    )
}

export default Calendar