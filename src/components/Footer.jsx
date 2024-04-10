import React from "react";

const Footer = () => {
  return (
    <div className="text-[#509995] h-[60vh] bg-white py-20 w-full flex flex-wrap items-center justify-evenly ">
      <div className="h-[40vh] px-12 w-1/3 ">
        <p className="text-lg font-bold pb-4">Title Here</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ex
          ut sapiente, fugit optio reprehenderit eligendi culpa dicta nesciunt
          totam deleniti! Error, cum quo architecto mollitia at corrupti
          temporibus commodi?
        </p>
      </div>
      <div className="h-[40vh] px-12 w-1/5  ">
        <p className="text-lg font-bold pb-4">About</p>
        <ul>
          <li>History</li>
          <li>Our Team</li>
          <li>Brand Guidelines</li>
          <li>Terms & Condition</li>
          <li>Private Policy</li>
        </ul>
      </div>
      <div className="h-[40vh] px-12 w-1/5  ">
        <p className="text-lg font-bold pb-4">Service</p>
        <ul>
          <li>How To Order</li>
          <li>Our Products</li>
          <li>order Status</li>
          <li>Promo</li>
          <li>Payment Methord</li>
        </ul>
      </div>
      <div className="h-[40vh] px-12 w-1/5  ">
        <p className="text-lg font-bold pb-4">Follow</p>
        <ul>
          <li className="flex items-center py-1">
            <i class="text-xl text-white bg-[#509995] hover:bg-white rounded-full h-7 w-7 flex items-center justify-center fa-brands fa-instagram "></i>
            <p className="px-2 ">Instagram</p>
          </li>
          <li className="flex items-center py-1">
            <i class="text-xl text-white bg-[#509995] hover:bg-white rounded-full h-7 w-7 flex items-center justify-center fa-brands fa-square-facebook"></i>
            <p className="px-2 ">Facebook</p>
          </li>
          <li className="flex items-center py-1">
            <i class="text-xl text-white bg-[#509995] hover:bg-white rounded-full h-7 w-7 flex items-center justify-center fa-brands fa-x-twitter"></i>
            <p className="px-2 ">Twitter</p>
          </li>
          <li className="flex items-center py-1">
            <i class="text-xl text-white bg-[#509995] hover:bg-white rounded-full h-7 w-7 flex items-center justify-center fa-brands fa-whatsapp"></i>
            <p className="px-2 ">WhatApp</p>
          </li>
        </ul>
      </div>
      <p className="relative top-8  text-black"> Faisal Development © 2024</p>
    </div>
  );
};

export default Footer;
