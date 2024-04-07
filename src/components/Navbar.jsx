import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#DEEEE8] text-[#434D4C] w-[90%]		 h-10  flex items-center justify-between font-bold absolute right-0 ">
      <img
        src="src/assets/images/logo.png"
        alt=""
        className="h-24 relative right-12"
      />
      <div className="flex">
        <span className="flex  items-center mr-16">HOME</span>
        <span className="flex  items-center mr-16">ABOUT US</span>
        <span className="flex  items-center mr-12 bg-[#C0DAD6] h-10  px-4 ">
          SERVICES
        </span>
        <span className="flex  items-center mr-16">CONTACT US</span>
      </div>
    </div>
  );
};

export default Navbar;
