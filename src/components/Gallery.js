import React from "react";

const Gallery = () => {
  return (
    <div className="px-[4%] py-2 md:py-6">
      <h1 className="text-3xl font-bold py-6 text-center">Gallery</h1>
      <div className="space-y-2 md:space-y-4">
        <div className="flex gap-2 md:gap-4">
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[120px] md:h-[250px]">
            <img
              src="/fwaboutusphotos/DSCF3310.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[120px] md:h-[250px]">
            <img
              src="/fwaboutusphotos/DSCF3345.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[120px] md:h-[250px]">
            <img
              src="/fwaboutusphotos/DSCF3362.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[120px] md:h-[250px]">
            <img
              src="/fwaboutusphotos/DSCF3381.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[120px] md:h-[250px]">
            <img
              src="/fwaboutusphotos/DSCF3382.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex gap-2 md:gap-4">
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[150px] md:h-[300px]">
            <img
              src="/fwaboutusphotos/DSCF3388.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[150px] md:h-[300px]">
            <img
              src="/fwaboutusphotos/DSCF3441.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[150px] md:h-[300px]">
            <img
              src="/fwaboutusphotos/DSCF3395.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[150px] md:h-[300px]">
            <img
              src="/fwaboutusphotos/DSCF3436.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex gap-2 md:gap-4">
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[100px] md:h-[200px]">
            <img
              src="/fwphotosforsheep/DSCF3201.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[100px] md:h-[200px]">
            <img
              src="/fwreindeerphotos/DSCF3242.jpg            "
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[100px] md:h-[200px]">
            <img
              src="/fwphotosforsheep/DSCF3216.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[100px] md:h-[200px]">
            <img
              src="/fwreindeerphotos/DSCF3241.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[100px] md:h-[200px]">
            <img
              src="/fwphotosforsheep/DSCF3243.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] hidden md:block cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[100px] md:h-[200px]">
            <img
              src="/fwreindeerphotos/DSCF3237.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[400px] hidden md:block cursor-pointer hover:w-[800px] duration-500 overflow-hidden rounded-lg h-[100px] md:h-[200px]">
            <img
              src="/fwreindeerphotos/DSCF3241.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
