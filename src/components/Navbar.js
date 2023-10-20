import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { GrNotification } from 'react-icons/gr';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaHeartPulse } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='shadow sticky top-0 z-[100] bg-white'>
            <div className='w-5/6 mx-auto py-5 items-center flex justify-between'>
                <div className='flex gap-10 items-center'>
                    <Link to="/" className='text-blue-500 font-bold text-2xl flex gap-2 items-center'>
                        <div className='p-3 rounded-full bg-sky-50 border border-sky-100'>
                            <FaHeartPulse />
                        </div>
                        <h1>MediTrack</h1>
                    </Link>
                    <div className='search relative'>
                        <input type="text" className='bg-gray-200 rounded px-4 pl-10 py-2 focus:outline-none border-none text-slate-600' placeholder='Search' />
                        <HiOutlineSearch className='absolute top-3 left-3 text-slate-500' />
                    </div>
                </div>
                <div className='flex gap-3'>
                    <button className='border p-3 rounded-full mx-5'>
                        <GrNotification />
                    </button>
                    <Link to="/patient/new" type="button" className='border border-blue-500 cursor-pointer text-blue-500 px-6 py-3 rounded-lg text-sm font-medium'>
                        New Patient
                    </Link>
                    <Link to="/appointment/new" type="button" className='bg-blue-500 flex items-center justify-between gap-2 cursor-pointer text-white px-5 py-3 rounded-lg text-sm font-medium'>
                        <AiOutlinePlus />
                        <span>
                            Appointment
                        </span>
                    </Link>

                    <Link to="/" type="button" className='bg-red-500 flex items-center justify-between gap-2 cursor-pointer text-white px-5 py-3 rounded-lg text-sm font-medium'>
                        
                        <span>
                            Logout
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar