import React from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import NewPatient from '../components/NewPatient';

const AddPatient = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className='w-4/5'>
                    <NewPatient />
                </div>
            </div>
        </div>
    )
}

export default AddPatient