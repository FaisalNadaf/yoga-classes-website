import React from "react";

const SubscribeForm = () => {
  return (
    <div className="h-[60vh] bg-[#509995] p-20 w-full flex flex-wrap items-center justify-center text-center">
      <p className="text-6xl font-bold w-full text-white pb-4">
        DONT MISS OUR UPDATE
      </p>
      <p className="font-md text-gray-300 text-xl px-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor optio
        enim libero similique aliquam deserunt doloribus saepe porro! Cum veniam
        ducimus culpa nisi placeat.
      </p>
      <input
        type="text"
        placeholder="Your Email"
        className="bg-white text-black rounded-tl-full	rounded-bl-full	p-2 px-8 w-80"
      />
      <button className="rounded-tr-full p-2 px-4	rounded-br-full	bg-white text-[#509995] font-bold">
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeForm;
