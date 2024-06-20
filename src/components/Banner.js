import React from "react";

const Banner = () => {
  return (
    <>
      <div>
        <div className="relative h-[600px] w-full overflow-hidden">
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
      </div>
      <div className="grid grid-cols-2">
        <div className="relative h-[600px] w-full overflow-hidden">
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
        <div className=" relative h-[600px] w-full overflow-hidden">
          <img src="/11.jpg" alt="img" className="w-full h-full object-cover" />
          <div className="absolute top-6 w-full text-center">
            <h3 className="text-5xl font-semibold text-red-50">Reindeer</h3>
            <p className="text-red-50 py-4">
              "Embrace Nordic Elegance <br /> Discover the Timeless Beauty of
              Reindeer Skin."
            </p>
            <button className="py-2 px-5 bg-header-color text-red-50">
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
