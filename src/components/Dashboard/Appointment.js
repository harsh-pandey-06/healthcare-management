import React from 'react'

const Appointment = () => {
  return (
    <div className="flex lg:gap-32 md:gap-16 sm:gap-8 font-normal text-black justify-start border shadow-md p-3 w-11/12 pt-2 align-baseline">
      <div className="flex gap-2">
        <div>Token:</div>
        <div>15</div>
      </div>

      {/*  */}

      <div className="flex gap-2">
        <div>ID:</div>
        <div>222123023</div>
      </div>

      {/*  */}

      <div className="flex gap-2">
        <div>Name:</div>
        <div>Harsh Pandey</div>
      </div>

      {/*  */}

      <div className="flex gap-2">
        <div>Doctor:</div>
        <div>Richard Ray</div>
      </div>

      {/*  */}

      <div className="flex gap-2">
        <div>Status:</div>
        <div className='bg-teal-200 text-center w-16 rounded-lg'>
            In
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default Appointment