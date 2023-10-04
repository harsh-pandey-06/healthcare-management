import React from 'react'
import bgimage from "../assets/iitgbg.jpeg"
const mainHome = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-cover opacity-50 bg-center' style={{backgroundImage:`url(${bgimage})` }}>
      <div className='bg-white h-[30rem] w-[30rem] shadow-xl'>
        
      </div>
    </div>
  )
}

export default mainHome
