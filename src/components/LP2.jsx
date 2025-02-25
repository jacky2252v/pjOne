import React from "react";

const LPTwo = () => {
  return (
    <div className="mb-16"> 
      <div className="flex justify-between m-16">
        <div>
          <h1 className="uppercase text-8xl tracking-wider">A little</h1>
          <h1 className="uppercase text-8xl tracking-wider">About Me</h1>
        </div>

        <img src="/assets/PJ-11.jpg" alt="PJ-11" className="h-[250px]" />
        <p className="font-light text-xl">02</p>
      </div>
      <div className="flex justify-between mt-28">
        <p className="px-[28rem] text-xl">    
          I am a digital nomad currently based in Hong Kong. I've been working
          in graphic design for the past ten years. It was only in the past
          three that I decided to focus full-time on illustrating.
        </p>
        <img src="/assets/PJ-12.jpg" alt="" className="h-[250px] mr-24 -rotate-6" />
      </div>
    </div>
  );
};

export default LPTwo;
