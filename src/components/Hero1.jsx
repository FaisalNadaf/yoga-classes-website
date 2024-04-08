import React from 'react'
import Navbar from './Navbar'

const Hero1 = () => { 
  return (
    <div className="pt-10 bg-[#F2F9F4] text-[#509995] h-screen ">
      <Navbar />
      <div className="flex  mt-16 items-center text-center">
        <div className="w-1/2 flex justify-center items-cemter drop-shadow-2xl">
          <img src="src/assets/images/yoga1.png" alt="" className="w-[70%]" />
        </div>
        <div className="w-1/2 ">
          <p className="text-8xl font-black my-4">YOGA CLASS</p>
          <p className='text-xl px-28 my-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            deleniti autem quae blanditiis aut soluta quisquam accusantium
            voluptatibus.
          </p>
          <button className=" bg-[#509995] py-0 px-6 rounded my-4 text-white">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero1