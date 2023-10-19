import React, { useState } from 'react'
import bgimage from "../assets/iitgbg.jpeg";
import iitglogo from "../assets/iitg_logo.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';


const Signup = () => {
    const [showPassword,setshowPassword]=useState(false);
    const [showConfirmPassword,setshowConfirmPassword]=useState(false);
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      rollno: "",
      gender: "",
      bloodGroup: "",
      mobile: "",
      dateOfBirth: "",
      password: "",
      confirmPassword:""
    })
    const { firstName, lastName, email, rollno, gender, bloodGroup,
      mobile, dateOfBirth,password,confirmPassword} = formData;
  
      const submitHandler = async () => {
        if (
          !email ||
          !password ||
          !confirmPassword ||
          !mobile ||
          !bloodGroup ||
          !firstName ||
          !lastName ||
          !dateOfBirth ||
          !gender ||
          !rollno
        ) {
          toast.error("All fields required");
          return;
        }

        if(confirmPassword!=password)
        {
          toast.error("Passwords don't match");
          return;
        }

        // // console.log(email, password);

        try {
          const data = {
            email,
            password,
            confirmPassword,
            mobile,
            bloodGroup,
            firstName,
            lastName,
            dateOfBirth,
            gender,
            rollno,
          };
          const response = await axios.post(
            `http://localhost:4000/api/v1/auth/patient/sendOtp`,
            data
          );
          console.log(response.data);
          console.log("hello");
          if (response.data.success === true) {
            console.log("naviagte");
            navigate("/otp");
          }
          {
            response.data.success === true
              ? toast.success("Account Created Successfully")
              : toast.error("Error occured");
          }
        } catch (error) {
          toast.error("Server error");
        }

        navigate("/otp");
      };

      const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
        // console.log(formData)
      }


  return (
    <div
      className="flex items-center justify-center h-screen overflow-y-scroll bg-cover bg-opacity-0 bg-center p-10 "
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="bg-white p-10 w-[30rem] shadow-xl">
        <div className="flex mb-4 w-10">
          <img src={iitglogo} />
        </div>
        <div className="capitalize object-scale-down text-gray-950 text-2xl font-semibold">Sign Up</div>

        <div className="mt-4 flex gap-5">
          <div>
          <p className='select-none	'>First Name <span className='text-red-600'>*</span></p>
            <input
              className=" mt-2 select-none border border-gray-600 p-2 rounded w-full"
              required
              placeholder='Enter First Name'
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
            ></input>
          </div>

          <div>
          <p className='select-none	'>Last Name <span className='text-red-600'>*</span></p>
            <input
              className=" mt-2 select-none border border-gray-600 p-2 rounded w-full"
              required
              placeholder='Enter Last Name'
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
            ></input>
          </div>
        </div>

        <div className="mt-4">
          <p className='select-none'>Email <span className='text-red-600'>*</span></p>
          <input
            className=" mt-2 select-none border border-gray-600 p-2 rounded w-full"
            required
              type="email"
              name="email"
              value={email}
              placeholder='Enter Your Email'
              onChange={handleOnChange}
          ></input>
        </div>

        <div className="mt-4 flex gap-5">
          <div>
          <p className='select-none'>Roll No <span className='text-red-600'>*</span></p>
          <input
            className=" mt-2 select-none border border-gray-600 p-2 rounded w-full"
            required
              type="text"
              name="rollno"
              placeholder='Enter Roll No'
              value={rollno}
              onChange={handleOnChange}
          ></input>
          </div>


          <div>
          <p className='select-none'> Blood Group <span className='text-red-600'>*</span></p>
          <input
            className=" mt-2 select-none border border-gray-600 p-2 rounded w-full"
            required
              type="text"
              name="bloodGroup"
              value={bloodGroup}
              placeholder='Enter Blood Group'
              onChange={handleOnChange}
          ></input>
        </div>

        </div>


        <div className="mt-4">
          <p className='select-none'>Mobile No.<span className='text-red-600'>*</span></p>
          <input
            className=" mt-2 select-none border border-gray-600 p-2 rounded w-full"
            required
              type="text"
              name="mobile"
              value={mobile}
              placeholder='Enter Mobile No.'
              onChange={handleOnChange}
          ></input>
        </div>

        <div className="mt-4 flex gap-5">
          
          <div>
          <p className='select-none'>Date Of Birth <span className='text-red-600'>*</span></p>
          <input
            className=" mt-2 select-none border border-gray-600 p-2 px-7 rounded w-full"
            required
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              placeholder='Enter Blood Group'
              onChange={handleOnChange}
          ></input>
          </div>

        <div>
        <p className='select-none'>Gender <span className='text-red-600'>*</span></p>
              <select
            className=" mt-2 select-none border border-gray-600 p-2 px-14  rounded w-full"
            required
              type="email"
              name="gender"
              value={gender}
              placeholder='Male/Female/Others'
              onChange={handleOnChange}
          >
            <option value="none">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        </div>
        
        <div className="mt-4  flex gap-5">
        <div className='relative'>
          <p className='select-none'>Password<span className='text-red-600'>*</span></p>
            <div
              onClick={() => setshowPassword(!showPassword)}
              className="absolute cursor-pointer top-10 right-2  text-2xl"
            >
              {showPassword === false ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </div>
          <input
            className=" mt-2 select-none border border-gray-600 p-2 rounded w-full"
            required
            type={showPassword === false ? "password" : "text"}
              name="password"
              placeholder='Enter Password'
              value={password}
              onChange={handleOnChange}
          ></input>
        </div>


        <div className='relative'>
          <p className='select-none'>Confirm Password<span className='text-red-600'>*</span></p>
          <div
            onClick={() => setshowConfirmPassword(!showConfirmPassword)}
            className="absolute cursor-pointer top-10 right-2  text-2xl"
          >
            {showConfirmPassword === false ? (
              <AiOutlineEye />
            ) : (
              <AiOutlineEyeInvisible />
            )}
          </div>
          <input
            className=" mt-2 select-none border border-gray-600 p-2 rounded w-full"
            required
              type={showConfirmPassword === false ? "password" : "text"}
              name="confirmPassword"
              value={confirmPassword}
              placeholder='Confirm Password'
              onChange={handleOnChange}
          ></input>
        </div>

        </div>
      
        <div className='flex justify-center'>
            <Link
              type="button"
              className="bg-blue-500 mt-5 cursor-pointer text-white px-10 py-3 rounded-lg text-sm font-medium" onClick={submitHandler}
            >
              Sign Up
            </Link>
          </div>

      </div>
      
    </div>
  );
}

export default Signup