import React from "react";

const Hero3 = () => {
  const divStyle = {
    backgroundImage: "url('src/assets/images/yoga-bg.jpeg')",
    opacity: 1,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    zIndex: "-1",
  };
  return (
    <div style={divStyle}>
      <div className="h-screen  bg-white z-999 opacity-70">
        <div className="text-[#509995] text-center">
          <p className="text-5xl font-black pt-10 pb-6">OUR STATS</p>
          <p className=" px-[30%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur aut amet, doloremque ex omnis cum! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Consequuntur aut amet,
            doloremque ex omnis cum!
          </p>
        </div>
        <div className=" w-full h-2/3 flex items-center justify-evenly pt-20 ">
          <div className="text-[#509995] text-center h-60 w-60 rounded-full border-[#509995] border-4	flex items-center justify-center ">
            <div>
              <p className=" text-3xl font-bold my-4">123</p>
              <p className="px-8">Lorem ipsum dolor, sit amet , ipsam?</p>
            </div>
          </div>
          <div className="text-[#509995] text-center h-60 w-60 rounded-full border-[#509995] border-4	flex items-center justify-center ">
            <div>
              <p className=" text-3xl font-bold my-4">123</p>
              <p className="px-8">Lorem ipsum dolor, sit amet , ipsam?</p>
            </div>
          </div>
          <div className="text-[#509995] text-center h-60 w-60 rounded-full border-[#509995] border-4	flex items-center justify-center">
            <div>
              <p className=" text-3xl font-bold my-4">123</p>
              <p className="px-8">Lorem ipsum dolor, sit amet , ipsam?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
