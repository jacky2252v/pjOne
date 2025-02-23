import React from "react";

const LPSeven = () => {
  return (
    <div>
      <div class="flex justify-between uppercase m-12">
        <div class="flex">
          <h1 class="text-8xl w-24">Other Projects</h1>
          <p class="ml-96 w-56 font-light">
            A sample of posters and cards conceptualized, designed, and created
            by me
          </p>
        </div>
        <p class="font-light text-xl">07</p>
      </div>
      <div class="flex justify-end m-12">
        <div class="flex">
          <img
            src="/src/assets/PJ-171.jpg"
            alt="PJ-171"
            class="h-[356.1px] w-[575.9] m-4 mt-6"
          />
          <img
            src="/src/assets/PJ-172.jpg"
            alt="PJ-172"
            class="h-[360.6px] w-[240.8px] -rotate-6 m-4 mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default LPSeven;
