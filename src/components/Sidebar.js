import React, { useState } from 'react'
import { AiOutlinePieChart, AiOutlineUser } from 'react-icons/ai';
import { FaStethoscope, FaAngleDown } from 'react-icons/fa6';
import { TbFileInvoice } from 'react-icons/tb';
import { IoHelpCircleOutline, IoSettingsOutline } from 'react-icons/io5';
import { BsCalendar4Week, BsChatLeftDots } from 'react-icons/bs';

const Sidebar = () => {
    const [active, setActive] = useState("dashboard");
    return (
        <div className='flex flex-col gap-1 px-1 py-5 border-r fixed h-full w-1/5'>
            <div className={`${active === "dashboard" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-slate-800"} rounded flex gap-3 items-center px-8 py-3 mx-1 cursor-pointer font-medium text-lg`} onClick={() => setActive("dashboard")}>
                <AiOutlinePieChart />
                <span className='text-base'>Dashboard</span>
            </div>
            <div className={`${active === "patients" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-slate-800"} rounded flex gap-3 items-center px-8 py-3 mx-1 cursor-pointer font-medium text-lg`} onClick={() => setActive("patients")}>
                <AiOutlineUser />
                <span className='text-base'>Patients</span>
            </div>
            <div className={`${active === "doctors" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-slate-800"} rounded flex gap-3 items-center px-8 py-3 mx-1 cursor-pointer font-medium text-lg`} onClick={() => setActive("doctors")}>
                <FaStethoscope />
                <span className='text-base'>Doctors</span>
            </div>
            <div className={`${active === "calendar" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-slate-800"} rounded flex gap-3 items-center px-8 py-3 mx-1 cursor-pointer font-medium text-lg`} onClick={() => setActive("calendar")}>
                <BsCalendar4Week />
                <span className='text-base'>Calendar</span>
            </div>
            <div className={`${active === "chat" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-slate-800"} rounded flex gap-3 items-center px-8 py-3 mx-1 cursor-pointer font-medium text-lg`} onClick={() => setActive("chat")}>
                <BsChatLeftDots />
                <span className='text-base'>Chat</span>
            </div>
            <div className='h-[1px] my-5 bg-gray-200' />
            <div className={`${active === "invoices" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-slate-800"} rounded flex gap-3 items-center px-8 py-3 mx-1 cursor-pointer font-medium text-lg`} onClick={() => setActive("invoices")}>
                <TbFileInvoice />
                <span className='text-base'>Invoices</span>
            </div>
            <div className={`${active === "help" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-slate-800"} rounded flex gap-3 items-center px-8 py-3 mx-1 cursor-pointer font-medium text-lg`} onClick={() => setActive("help")}>
                <IoHelpCircleOutline />
                <span className='text-base'>Help</span>
            </div>
            <div className={`${active === "settings" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-slate-800"} rounded flex gap-3 items-center px-8 py-3 mx-1 cursor-pointer font-medium text-lg`} onClick={() => setActive("settings")}>
                <IoSettingsOutline />
                <span className='text-base'>Settings</span>
            </div>
            <div className={`bg-sky-100 flex justify-between rounded gap-3 items-center px-8 py-4 mx-1 mt-4 cursor-pointer text-blue-500 font-medium text-lg`}>
                <AiOutlineUser />
                <span className='text-base text-slate-800'>Ashwini</span>
                <FaAngleDown className='text-slate-800 text-base' />
            </div>
        </div>
    )
}

export default Sidebar