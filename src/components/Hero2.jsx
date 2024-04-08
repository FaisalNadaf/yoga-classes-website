import React from "react";

const Hero2 = () => {
  return (
    <div className="bg-[#509995] text-[#F2F9F4] h-screen ">
      <div className="text-center ">
        <p className="text-5xl font-bold p-10 pt-20 text-white">CHOOSE CLASS</p>
        <p className="px-[25%] ">
          Lorem ipsum dolor sit, doloribus quae aliquam totam, soluta nequeamet
          consectetur adipisicing elit. Beatae modi doloribus quae aliquam
          totam, soluta neque doloribus quae aliquam totam, soluta neque enim
          nihil debitis quisquam?
        </p>
      </div>
      <div className="flex justify-evenly">
        <div className="w-1/4  h-96 flex flex-wrap justify-center text-center">
          <img
            src="src/assets/images/yoga3.png"
            alt=""
            className="h-[70%] r drop-shadow-2xl"
          />
          <p className="text-2xl font-bold text-white">NEWBIE CLASS</p>
          <p className="px-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-1/4  h-96 flex flex-wrap justify-center text-center">
          <img
            src="src/assets/images/yoga4.png"
            alt=""
            className="h-[70%] r drop-shadow-2xl"
          />
          <p className="text-2xl font-bold text-white">ADVANCED CLASS</p>
          <p className="px-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-1/4  h-96 flex flex-wrap justify-center text-center">
          <img
            src="src/assets/images/yoga5.png"
            alt=""
            className="h-[70%] r drop-shadow-2xl"
          />
          <p className="text-2xl font-bold text-white">EXPERT CLASS</p>
          <p className="px-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
