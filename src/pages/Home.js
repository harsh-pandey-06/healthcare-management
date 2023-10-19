import React from 'react'
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = (props) => {
    const {user}=props;


    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar user={user}  />
                </div>
                <div className='w-4/5'>
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default Home