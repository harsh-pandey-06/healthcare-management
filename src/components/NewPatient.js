import React from 'react'
import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi';
import profilePic from "../assets/iitg_logo.jpg"

const NewPatient = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        patientId: "",
        gender: "",
        bloodGroup:"",
        mobile:"",
        age:"",
        address:"",
        state:"",
        city:"",
        pinCode:"",
        password:""
      })
      const { firstName, lastName, email, password, patientId, gender,bloodGroup,
        mobile,age,address,state,city,pinCode} = formData;
      

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

      <form onSubmit={handleOnSubmit} className='w-full'>
          <div className='felx flex-row mt-16 h-10'>
            <div className='flex text-opacity-10 font-bold w-1/12 float-left'>
              Personal Data
            </div>
            <div className='flex bg-black w-10/12 h-[0.4px] float-right mt-4'>
            </div>
          </div>

          <div className='flex rounded-full h-[100px] w-[100px] mt-5'>
            <img src={profilePic}/>
          </div>

          <div className='flex flex-row gap-64 w-4/12 mt-8'>
            <div className='flex flex-col'>
              Patient ID*
              <input
              required
              type="text"
              name="patientId"
              value={patientId}
              onChange={handleOnChange}
              className='bg-gray-200 rounded px-4 pl-10 py-2 focus:outline-none border-none text-slate-600 mt-2'  placeholder='' />
                        <HiOutlineSearch className='absolute top-3 left-3 text-slate-500' />
            </div>
            <div>
              First Name*
              <input 
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              className='bg-gray-200 rounded px-4 pl-10 py-2 focus:outline-none border-none text-slate-600 mt-2'  placeholder='' />
                        <HiOutlineSearch className='absolute top-3 left-3 text-slate-500' />
            </div>
            <div>
              Last Name*
              <input 
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
               className='bg-gray-200 rounded px-4 pl-10 py-2 focus:outline-none border-none text-slate-600 mt-2'  placeholder='' />
                        <HiOutlineSearch className='absolute top-3 left-3 text-slate-500' />
            </div>
          </div>

          <div className='flex flex-row gap-32 w-4/12 mt-8'>
              <div className='flex flex-col'>
                  Age*
                  <input
                  required
                  type="number"
                  name="age"
                  value={age}
                  onChange={handleOnChange}
                  className='bg-gray-200 rounded px-4  w-[100px] py-2 focus:outline-none border-none text-slate-600 mt-2'  placeholder='' />
                            <HiOutlineSearch className='absolute top-3 left-3 text-slate-500' />
                </div>
                <div>
                  Gender*
                  <input 
                  required
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={handleOnChange}
                  className='bg-gray-200 rounded px-4 w-[200px] py-2 focus:outline-none border-none text-slate-600 mt-2'  placeholder='' />
                            <HiOutlineSearch className='absolute top-3 left-3 text-slate-500' />
                </div>
                <div>
                  Blood Group
                  <input 
                  required
                  type="text"
                  name="bloodGroup"
                  value={bloodGroup}
                  onChange={handleOnChange}
                  className='bg-gray-200 rounded px-4  w-[200px] py-2 focus:outline-none border-none text-slate-600 mt-2'  placeholder='' />
                            <HiOutlineSearch className='absolute top-3 left-3 text-slate-500' />
                </div>
          </div>
              
          <div className='flex flex-row gap-12 w-4/12 mt-8'>
                <div>
                  Mobile Number*
                  <input 
                  required
                  type="number"
                  name="mobile"
                  value={mobile}
                  onChange={handleOnChange}
                  className='bg-gray-200 rounded px-4 w-[580px] py-2 focus:outline-none border-none text-slate-600 mt-2'  placeholder='' />
                            <HiOutlineSearch className='absolute top-3 left-3 text-slate-500' />
                </div>
                <div>
                  Email ID
                  <input 
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  className='bg-gray-200 rounded px-4 w-[580px] py-2 focus:outline-none border-none text-slate-600 mt-2'  placeholder='' />
                            <HiOutlineSearch className='absolute top-3 left-3 text-slate-100' />
                </div>
          </div>
      </form>
      
      
    </div>
  )
}

export default NewPatient
