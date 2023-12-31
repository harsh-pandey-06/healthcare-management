import React, { useState } from 'react'
import bgimage from "../assets/iitgbg.jpeg";
import iitglogo from "../assets/iitg_logo.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const Otp = () => {

    const [otp,setOtp] = useState();
    const handleOnChange = (e) => {
        setOtp(e.target.value);
      }

  return (
    <div
      className="flex items-center justify-center h-screen overflow-y-scroll bg-cover bg-opacity-0 bg-center p-10 "
      style={{ backgroundImage: `url(${bgimage})`}}
    >
      <div className="bg-white p-10 w-[30rem] shadow-xl">
        <div className="flex mb-4 w-10">
          <img src={iitglogo} />
        </div>
        <div className="capitalize object-scale-down text-gray-950 text-2xl font-semibold">Enter OTP</div>
        <input
            className=" mt-2 select-none border border-gray-600 rounded p-2 w-full"
            required
              type="text"
              name="otp"
              value={otp}
              placeholder='Enter OTP'
              onChange={handleOnChange}
          ></input>
        <div className='flex justify-center'>
            <Link
              type="button"
              className="bg-blue-500 mt-5 cursor-pointer text-white px-10 py-3 rounded-lg text-sm font-medium"
            >
              Proceed
            </Link>
        </div>

      </div>
      
    </div>
  );
}

export default Otp