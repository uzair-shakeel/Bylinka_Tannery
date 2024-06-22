import React from "react";

const ThreeGrid = () => {
  return (
    <div className="grid h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden grid-cols-2 mt-12 mb-4 md:my-12 gap-[10px] px-[2%]">
      <div className="h-full w-full mx-auto overflow-hidden">
        <div className="relative h-[250px] md:h-[400px] lg:h-[500px] w-full z-20 group">
          <img
            src="/11.jpg"
            alt="image"
            className="h-full w-full object-cover z-10"
          />
          <div className="absolute h-[90%] w-[90%] group-hover:w-[80%] group-hover:h-[80%] duration-500 border-2 border-white bg-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute font-light uppercase text-white duration-500 group-hover:text-2xl group-hover:font-normal   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Sheep Skins
          </div>
          {/* <div className="absolute h-[2%] w-full  duration-500 bg-white/50 backdrop-blur-xl skew-y-8 bg-none group-hover:top-[600px] top-[-100px] "></div> */}
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="h-full w-full mx-auto overflow-hidden">
          <div className="relative h-[120px] md:h-[195px] lg:h-[245px] w-full z-20 group">
            <img
              src="/12.jpeg"
              alt="image"
              className="h-full w-full object-cover z-10"
            />
            <div className="absolute h-[90%] w-[96%] group-hover:w-[80%] group-hover:h-[80%] duration-500 border-2 border-white bg-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute font-light uppercase text-white duration-500 group-hover:text-xl group-hover:font-normal   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Deer Skins
            </div>
            {/* <div className="absolute h-[2%] w-full  duration-500 bg-white/50 backdrop-blur-xl skew-y-8 bg-none group-hover:top-[600px] top-[-100px] "></div> */}
          </div>
        </div>
        <div className="h-full w-full mx-auto overflow-hidden">
          <div className="relative h-[120px] md:h-[195px] lg:h-[245px] w-full z-20 group">
            <img
              src="/9.webp"
              alt="image"
              className="h-full w-full object-cover z-10"
            />
            <div className="absolute h-[90%] w-[96%] group-hover:w-[80%] group-hover:h-[80%] duration-500 border-2 border-white bg-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute font-light uppercase text-white duration-500 group-hover:text-xl group-hover:font-normal   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Reindeer Skins
            </div>
            {/* <div className="absolute h-[2%] w-full  duration-500 bg-white/50 backdrop-blur-xl skew-y-8 bg-none group-hover:top-[600px] top-[-100px] "></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeGrid;
