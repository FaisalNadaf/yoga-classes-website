import React from "react";

const Hero5 = () => {
  const style = {
    backgroundImage: "url('src/assets/images/yoga8.jpg')",
    opacity: 1,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    
    
  };
  return (
    <div className="flex h-screen bg-white ">
      <div className="w-1/2 p-20">
        <div style={style} className="h-full rounded-full"></div>
      </div>

      <div className="w-1/2  px-14 pt-40">
        <p className="text-5xl text-[#509995] font-bold  mb-3 w-full">NEW</p>
        <p className="text-5xl text-[#509995] font-bold  mb-6">EXPERIENCE</p>
        <p className=" text-lg mb-10 text-[#509995]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          voluptates impedit reprehenderit delectus rerum aperiam voluptatibus
          dolores error temporibus consequatur.
        </p>
        <button className="text-white px-14 rounded py-2 bg-[#509995] font-bold">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default Hero5;
