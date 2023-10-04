import React, { useState } from 'react'
import bgimage from "../assets/iitgbg.jpeg";
import iitglogo from "../assets/iitg_logo.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Login = ({props}) => {
    // const role=props.role
    const [showPassword,setshowPassword]=useState(false);
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-opacity-0 bg-center p-10"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="bg-white p-10 w-[30rem] shadow-xl">
        <div className="flex mb-4">
          <img src={iitglogo} />
        </div>

        <div className="text-gray-950  text-2xl font-semibold">Log In</div>

        <div className="mt-4">
          <p>Email ID</p>
          <input
            className=" mt-2  border border-gray-600 p-2 rounded w-3/4"
            type="email"
            placeholder=" Enter Email Id"
          ></input>
        </div>

        <div className="mt-4 relative ">
          <p>Password</p>
          <div
            onClick={() => setshowPassword(!showPassword)}
            className="absolute cursor-pointer top-10 right-28  text-2xl"
          >
            {showPassword === false ? (
              <AiOutlineEye />
            ) : (
              <AiOutlineEyeInvisible />
            )}
          </div>
          <input
            className=" mt-2  border border-gray-600 p-2 rounded w-3/4"
            type={showPassword === false ? "password" : "text"}
            placeholder=" Enter Password"
          ></input>
        </div>

        <div className="flex mt-8 justify-between items-center">
          {/* role=="Patient"&& */}
          <div>
            Don't have an account?{" "}
            <Link className="text-blue-400" to="/Signup">
              Sign Up
            </Link>
          </div>
          <div>
            <Link
              type="button"
              className="bg-blue-500 flex items-center justify-between gap-2 cursor-pointer text-white px-5 py-3 rounded-lg text-sm font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login