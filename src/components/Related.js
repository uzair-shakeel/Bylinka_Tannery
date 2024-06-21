import React from "react";

const Related = () => {
  return (
    <div className="px-[5%]">
      <h1 className="text-3xl font-bold py-5 text-center">Related Services</h1>
      <div className="grid grid-cols-3 gap-8 h-[400px]">
        <div className="relative h-full w-full overflow-hidden">
          <img src="/9.webp" alt="img" className="w-full h-full object-cover" />
          <div className="absolute top-6 w-full text-center">
            <h3 className="text-5xl font-semibold  text-green-800">Sheep</h3>
            <p className="text-green-900 py-4">
              Wrap Yourself in Natural Comfort <br /> Discover Luxurious
              Sheepskin Today!
            </p>
            <button className="py-2 px-5 bg-green-800 text-white">
              See More
            </button>
          </div>
        </div>
        <div className="relative h-full w-full overflow-hidden">
          <img src="/10.jpg" alt="img" className="w-full h-full object-cover" />
          <div className="absolute top-6 w-full text-center">
            <h3 className="text-5xl font-semibold  text-blue-800">Sheep</h3>
            <p className="text-blue-900 py-4">
              Wrap Yourself in Natural Comfort <br /> Discover Luxurious
              Sheepskin Today!
            </p>
            <button className="py-2 px-5 bg-blue-800 text-white">
              See More
            </button>
          </div>
        </div>
        <div className="relative h-full w-full overflow-hidden">
          <img src="/11.jpg" alt="img" className="w-full h-full object-cover" />
          <div className="absolute top-6 w-full text-center">
            <h3 className="text-5xl font-semibold text-red-50">Reindeer</h3>
            <p className="text-red-50 py-4">
              Embrace Nordic Elegance <br /> Discover the Beauty of Reindeer
              Skin.
            </p>
            <button className="py-2 px-5 bg-header-color text-red-50">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
