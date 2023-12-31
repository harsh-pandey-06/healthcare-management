import React from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Patient = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className='w-4/5'>
                    Patient
                </div>
            </div>
        </div>
    )
}

export default Patient