import React from "react";

const LPFive = () => {
  return (
    <div>
      <div class="flex justify-between m-16">
        <div></div>
        <h1 class="uppercase text-8xl tracking-wider text-center">My Art</h1>
        <p class="font-light text-xl">05</p>
      </div>
      <div class="flex justify-between items-center m-24">
        <div>
          <img src="/src/assets/PJ-151.jpg" alt="pj151" class="w-96 h-auto" />
          <h1 class="uppercase tracking-wider font-serif">
            Thunder and Lightning
          </h1>
          <p class="font-light">
            Created for The Willowpanes and used during their asian tour
          </p>
        </div>
        <div>
          <img
            src="/src/assets/PJ-152.jpg"
            alt="pj152"
            class="w-96 h-auto mt-36"
          />
          <h1 class="uppercase tracking-wider font-serif">
            Pasta from the Moon
          </h1>
          <p class="font-light">
            A poster sample from a design competition in 2019
          </p>
        </div>
        <div>
          <img src="/src/assets/PJ-153.jpg" alt="pj153" class="w-96 h-auto" />
          <h1 class="uppercase tracking-wider font-serif">In Bloom</h1>
          <p class="font-light">
            Street art in a skate park, located in Whelton city center
          </p>
        </div>
      </div>
    </div>
  );
};

export default LPFive;
