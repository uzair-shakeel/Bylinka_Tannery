import Link from "next/link";
import React from "react";

const Related = () => {
  return (
    <div className="px-[5%] pb-6">
      <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
        Related Services
      </h1>
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-8 h-[250px] lg:h-[400px] overflow-x-auto lg:overflow-x-hidden scrollbar-hide">
        <div className="relative h-full w-full flex-shrink-0 lg:flex-shrink">
          <img src="/9.webp" alt="img" className="w-full h-full object-cover" />
          <div className="absolute top-1 md:top-2 lg:top-6 w-full text-center">
            <h3 className="text-2xl lg:text-5xl font-semibold text-green-800">
              Sheep
            </h3>
            <p className="text-green-900 py-2 lg:py-4 text-sm md:text-md">
              Wrap Yourself in Natural Comfort <br />
              <span className="hidden lg:block">
                Discover Luxurious Sheepskin Today!
              </span>
            </p>
            <Link href={"sheep"}>
              <button className="md:py-2 md:px-5 py-1 px-2 bg-green-800 text-white text-sm md:text-md">
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className="relative h-full w-full flex-shrink-0 lg:flex-shrink">
          <img src="/10.jpg" alt="img" className="w-full h-full object-cover" />
          <div className="absolute top-1 md:top-2 lg:top-6 w-full text-center">
            <h3 className="text-2xl lg:text-5xl font-semibold text-blue-800">
              Deer
            </h3>
            <p className="text-blue-900 py-2 lg:py-4 text-sm md:text-md">
              Wrap Yourself in Natural Comfort <br />
              <span className="hidden lg:block">
                Discover Luxurious Sheepskin Today!
              </span>
            </p>
            <Link href={"deer"}>
              <button className="md:py-2 md:px-5 py-1 px-2 bg-blue-800 text-white text-sm md:text-md">
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className="relative h-full w-full flex-shrink-0 lg:flex-shrink">
          <img src="/11.jpg" alt="img" className="w-full h-full object-cover" />
          <div className="absolute top-1 md:top-2 lg:top-6 w-full text-center">
            <h3 className="text-2xl lg:text-5xl font-semibold text-red-50">
              Reindeer
            </h3>
            <p className="text-red-50 py-2 lg:py-4 text-sm md:text-md">
              Wrap Yourself in Natural Comfort <br />
              <span className="hidden md:block">
                Discover the Beauty of Reindeer Skin.
              </span>
            </p>
            <Link href={"reindeer"}>
              <button className="md:py-2 md:px-5 py-1 px-2 bg-header-color text-red-50 text-sm sm:text-md">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
