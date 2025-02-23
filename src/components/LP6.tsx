import React from "react";

const LPSix = () => {
  return (
    <div>
      <div className="flex justify-end">
        <p className="font-light text-xl m-6">06</p>
      </div>
      <div className="flex flex-col text-9xl justify-center items-center uppercase mt-24 mb-[12rem]">
        <div className="flex items-center">
          <p>I was</p>
        </div>
        <div className="flex items-center">
          <i className="font-serif">created</i>
          <img src="/assets/PJ-161.png" alt="PJ-161" className="h-auto w-56 ml-12" />
        </div>
        <div className="flex items-center">
          <img
            src="/assets/PJ-162.png"
            alt="PJ-162"
            className="h-24 w-64 mr-12 mt-5"
          />
          <p>to create</p>
        </div>
      </div>
    </div>
  );
};

export default LPSix;
