import React from "react";

const LPTwo = () => {
  return (
    <div className="mb-16 px-4 md:px-8"> 
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start m-8 md:m-16">
        <div className="text-center md:text-left">
          <h1 className="uppercase text-4xl md:text-6xl lg:text-8xl tracking-wider">A little</h1>
          <h1 className="uppercase text-4xl md:text-6xl lg:text-8xl tracking-wider">About Me</h1>
        </div>

        <img src="img/PJ-11.jpg" alt="PJ-11" className="h-40 md:h-[250px] mt-4 md:mt-0" />
        <p className="font-light text-lg md:text-xl mt-4 md:mt-0">02</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-10 md:mt-28">
        <p className="text-base md:text-xl text-center md:text-left max-w-lg md:max-w-2xl px-4 md:px-0">    
          I am a digital nomad currently based in Hong Kong. I've been working
          in graphic design for the past ten years. It was only in the past
          three that I decided to focus full-time on illustrating.
        </p>
        <img src="img/PJ-12.jpg" alt="PJ-12" className="h-40 md:h-[250px] mt-6 md:mt-0 md:mr-24 -rotate-6" />
      </div>
    </div>
  );
};

export default LPTwo;
