import React from "react";
const LPOne = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 md:px-8 lg:px-16">
      <div className="flex justify-center items-center mt-36 relative">
        <img
          className="opacity-90 md:h-[250px] xl:h-[500px] object-cover"
          src="/assets/PJ-10.jpg"
          alt=""
        />
        <h1
          className="text-[4rem] md:text-[8rem] xl:text-[16rem] mb-[8rem] md:mb-[16rem] xl:mb-[32rem] sm:mb-0 absolute z-10"
          style="font-family: Moontime"
        >
          Vivek Baraiya
        </h1>
        <h1 className="text-[2rem] md:text-[4rem] xl:text-[10rem] mt-[10rem] md:mt-[15rem] xl:mt-[30rem] sm:mt-0 font-thin tracking-wider absolute z-10">
          Protfolio
        </h1>
      </div>
      <p className="mt-10 md:mt-14 tracking-wider font-light text-xs md:text-sm font-mono">
        Front-End Developer
      </p>
    </div>
  );
};
export default LPOne;
