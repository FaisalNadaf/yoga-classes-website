import React from "react";

const Hero4 = () => {
  const style={
    backgroundImage: "url('src/assets/images/yoga6.jpg')",
    opacity: 1,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }
  return (
    <div className="flex h-screen  ">
      <div className="w-1/2 bg-[#509995] px-14 pt-40">
        <p className="text-5xl font-bold text-white mb-4 w-full">BEST</p>
        <p className="text-5xl font-bold text-white mb-4">INSTRUCTOR</p>
        <p className="text-white text-lg mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          voluptates impedit reprehenderit delectus rerum aperiam voluptatibus
          dolores error temporibus consequatur.
        </p>
        <button className="bg-white px-14 rounded py-2 text-[#509995] font-bold">
          READ MORE
        </button>
      </div>
      <div style={style} className="w-1/2  "></div>
    </div>
  );
};

export default Hero4;
