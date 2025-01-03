import React from "react";

const Hero7 = () => {
   
   const divStyle = {
     backgroundImage: "url('src/assets/images/yoga8.jpg')",
     opacity: 1,
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",

     zIndex: "-1",
   };
  return (
    <div style={divStyle}>
      <div className="bg-white h-screen z-999 opacity-80">
        <div className="h-1/2 flex justify-center items-center ">
          <img
            src="src/assets/images/yoga7.jpg"
            alt=""
            className="h-80 w-80 object-cover	rounded-full shadow-2lx"
          />
        </div>
        <div className="text-center h-1/2 flex flex-wrap items-center justify-center">
          <p className="text-4xl text-[#509995]    px-40">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis iusto iste maiores officia saepe, aliquid cumque. Enim
            consequuntur itaque dignissimos. Enim consequuntur itaque
            dignissimos.
          </p>
          <p className="text-3xl font-black text-[#509995] pb-20">
            TRAINER DEVANDRA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero7;
