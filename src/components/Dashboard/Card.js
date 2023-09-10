import React from 'react'

const Card = () => {
  return (
    <div className=" border shadow-lg w-96 m-1 py-10">
      <div className="pl-2 font-semibold text-sm gap-1  ">Total Patients</div>
      <div className=" mb-5 ml-3 h-1 w-10 bg-blue-400"></div>
      <div className=" mb-5 m-1 flex gap-2">
        <div className=' h-10 ml-2 w-10 rounded-full bg-blue-200 '>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 translate-x-2 translate-y-1/3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <div className=' font-semibold text-black text-3xl'>
            34
        </div>
      </div>
    </div>
  );
}

export default Card