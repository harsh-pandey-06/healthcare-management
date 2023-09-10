import React from 'react'

const Reports = () => {
  return (
    <div className="flex lg:gap-32 md:gap-16 sm:gap-8 font-normal text-black justify-start border shadow-md p-3 w-11/12 pt-2 align-baseline">
      <div>R1254</div>
      <div>Lungs X-ray</div>
      <div>X-ray.pdf</div>
      <div>John Ray</div>
      <div className="rounded-xl bg-green-500 cursor-pointer w-1/12 text-center">
        <button className="text-white p-1">Share</button>
      </div>
    </div>
  );
}

export default Reports