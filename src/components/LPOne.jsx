import React from "react";
import myImg from "/src/assets/myImg.jpg";

const LPOne = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-32 relative">
        <img className="opacity-88 h-[400px]" src={myImg} alt="Background" />
        <h1
          className="text-[13rem] mb-[26rem] absolute z-10"
          style={{ fontFamily: "Moontime" }}
        >
          Vivek Baraiya
        </h1>
        <h1 className="text-[9rem] mt-[23rem] font-thin tracking-wider absolute z-10">
          Portfolio
        </h1>
      </div>
      <p className="flex justify-center items-center tracking-wider mt-28 font-light text-sm font-mono">
        Front-End Developer
      </p>
    </div>
  );
};

export default LPOne;
