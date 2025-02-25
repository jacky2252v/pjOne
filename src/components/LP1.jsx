import React from "react";

const LPOne = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 md:px-8 lg:px-16">
      <div className="relative flex flex-col items-center mt-16 md:mt-32 w-full max-w-6xl">
        <img
          className="opacity-88 w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto -rotate-2"
          src="/assets/PJ-10.jpg"
          alt="Background"
        />
        <h1
          className="absolute text-5xl md:text-7xl lg:text-9xl xl:text-[13rem] leading-none z-10"
          style={{ fontFamily: "Moontime" }}
        >
          Tristan Clousso
        </h1>
        <h1 className="absolute mt-24 md:mt-32 text-4xl md:text-6xl lg:text-8xl font-thin tracking-wider z-10">
          Portfolio
        </h1>
      </div>
      <p className="mt-10 md:mt-14 tracking-wider font-light text-xs md:text-sm font-mono">
        Front-End Developer
      </p>
    </div>
  );
};

export default LPOne;
