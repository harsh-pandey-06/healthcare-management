import React from 'react'
import { useState } from 'react'
import profilePic from "../assets/iitg_logo.jpg"

const NewPatient = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    patientId: "",
    gender: "",
    bloodGroup: "",
    mobile: "",
    age: "",
    address: "",
    state: "",
    city: "",
    pinCode: "",
    password: ""
  })
  const { firstName, lastName, email, password, patientId, gender, bloodGroup,
    mobile, age, address, state, city, pinCode } = formData;


  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {

  }


  return (
    <div className='flex flex-col ml-10 w-11/12 '>
      <div className='flex mt-8  font-bold text-2xl'>
        New Patient
      </div>

      <form onSubmit={handleOnSubmit} className='w-full mb-12'>
        <div className='felx flex-row mt-16 h-10'>
          <div className='flex text-opacity-10 font-bold w-1/12 float-left'>
            Personal Data
          </div>
          <div className='flex bg-black w-10/12 h-[0.4px] float-right mt-4'>
          </div>
        </div>

        <div className='flex rounded-full h-[100px] w-[100px] mt-5'>
          <img src={profilePic} />
        </div>

        <div className='flex flex-row gap-64 w-4/12 mt-8'>
          <div>
            Patient ID <span className='text-red-400'>*</span>
            <input
              required
              type="text"
              name="patientId"
              value={patientId}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
          <div>
            First Name<span className='text-red-400'>*</span>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
          <div>
            Last Name<span className='text-red-400'>*</span>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
        </div>

        <div className='flex flex-row gap-32 w-4/12 mt-8'>
          <div className='flex flex-col'>
            <div>
            DOB<span className='text-red-400'>*</span>
            </div>
            <input
              required
              type="date"
              name="age"
              value={age}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 w-[150px] py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
          <div>
            Gender(Male/Female/Others)<span className='text-red-400'>*</span>
            <input
              required
              type="text"
              name="gender"
              value={gender}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 w-[200px] py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
          <div>
            Blood Group
            <input
              required
              type="text"
              name="bloodGroup"
              value={bloodGroup}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 w-[200px] py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
        </div>

        <div className='flex flex-row gap-12 w-4/12 mt-8'>
          <div>
            Mobile Number<span className='text-red-400'>*</span>
            <input
              required
              type="number"
              name="mobile"
              value={mobile}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 w-[580px] py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
          <div>
            Email ID
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 w-[580px] py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
        </div>






        <div className='felx flex-row mt-16 h-10'>
          <div className='flex text-opacity-10 font-bold w-1/12 float-left'>
            Communication
          </div>
          <div className='flex bg-black w-10/12 h-[0.4px] float-right mt-4'>
          </div>
        </div>


        <div className='flex flex-row gap-64 w-4/12 mt-8'>
          <div className='flex flex-col'>
            <div>
            Address <span className='text-red-400'>*</span>
            </div>
            <input
              required
              type="text"
              name="address"
              value={address}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 py-2  w-[1080px] focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
          
          
        </div>

        <div className='flex flex-row gap-32 w-4/12 mt-8'>

          <div>
            State<span className='text-red-400'>*</span>
            <input
              required
              type="text"
              name="state"
              value={state}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>

          <div>
            city<span className='text-red-400'>*</span>
            <input
              required
              type="text"
              name="city"
              value={city}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
          <div className='flex flex-col'>
            <div>
            Pin Code<span className='text-red-400'>*</span>
            </div>
            <input
              required
              type="text"
              name="pinCode"
              value={pinCode}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 w-[200px] py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
          
        </div>

        <div className='flex flex-row gap-12 w-4/12 mt-8'>
          <div>
            Password (Min 6 digit)<span className='text-red-400'>*</span>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              className='bg-gray-100 rounded px-4 w-[580px] py-2 focus:outline-none border-none text-slate-600 mt-2' placeholder='' />
          </div>
          
        </div>
        <div>
            <button type="button" className='bg-blue-500 flex items-center justify-between gap-2 cursor-pointer text-white px-5 py-3 rounded-lg text-sm font-medium mt-4'>
                <span>
                  Submit
                </span>
            </button>
        </div>
      </form>


    </div>
  )
}

export default NewPatient
