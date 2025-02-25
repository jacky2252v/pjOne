import React from "react";

const LPEight = () => {
  return (
    <div>
      <div className="flex justify-between m-12">
        <p className="font-Moontime font-light text-2xl">Tristan Clousso</p>
        <p className="font-light text-xl">08</p>
      </div>
      <div className="flex justify-between m-12">
        <div className="flex flex-col">
          <h1 className="text-8xl uppercase">Work</h1>
          <h1 className="text-8xl uppercase mb-24">With me</h1>
          <h1 className="text-4xl font-thin">
            123 Anywhere St., Any City, ST 12345
          </h1>
          <h1 className="text-4xl font-thin">123-456-7890</h1>
          <h1 className="text-4xl font-thin">hello@reallygreatsite.com</h1>
        </div>
        <img
          src="/assets/PJ-18.jpg"
          alt=""
          width="332.8px"
          height="499.2px"
          className="mr-56 rotate-6"
        />
      </div>
    </div>
  );
};

export default LPEight;
