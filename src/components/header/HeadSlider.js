import React from "react";
import { Carousel } from "flowbite-react";

function HeadSlider() {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="item1 flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <h1 className="text-2xl text-white text-center font-bold">
              Converting Plastic wastes and used textile into durable products
            </h1>
          </div>
          <div className="item2 flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <h1 className="text-2xl text-white text-center font-bold">
              From discarded waste in to use
            </h1>
          </div>
          <div className="item3 flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <h1 className="text-2xl text-white text-center font-bold">
              From trash to tressure
            </h1>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default HeadSlider;
