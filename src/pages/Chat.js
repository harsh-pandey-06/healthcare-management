import React from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Chat = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className='w-4/5'>
                    <div>Remarks</div>
                    <ul>
                        <li>Doctor taking leave - Reschedule or notify patient</li>
                        <li>May need use of cron jobs to make doctor available after leave period ends</li>
                        <li>Manage state using react redux</li>
                        <li>Avoid concurrent bookings in appointment such as when there is only one slot left</li>
                        <li>In doctor, show list of all doctors</li>
                        <li>In calendar, show appointments by date</li>
                        <li>In profile, show user details</li>
                        <li>In settings, user can edit profile details, and also add a logout button in settings</li>
                        <li>Change invocies page to show appointment history</li>
                        <li>Help can contain some FAQs and send emails to admins regarding technical difficulty (optional)</li>
                        <li>Chat page will be closed</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Chat