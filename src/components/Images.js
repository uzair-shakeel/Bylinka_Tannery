import React from "react";

const Images = () => {
  return (
    <div className=" p-4 w-[98%] mx-auto bg-white  hidden md:block md:my-12">
      <h3 className="font-bold text-xl md:text-2xl py-2">Sheep Skin</h3>
      <div className="flex gap-1 md:gap-3 lg:gap-6 w-full  justify-between ">
        <div className="h-[100px] md:h-[170px] lg:w-auto lg:h-[250px]  overflow-hidden">
          <img
            src="/fwphotosforsheep/DSCF3213.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block h-[170px] lg:h-[250px] w-auto overflow-hidden">
          <img
            src="/fwphotosforsheep/DSCF3201.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[100px] md:h-[170px] lg:h-[250px] w-auto overflow-hidden">
          <img
            src="/fwphotosforsheep/DSCF3216.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[100px] md:h-[170px] lg:h-[250px] w-auto overflow-hidden">
          <img
            src="/fwphotosforsheep/DSCF3243.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[100px] md:h-[170px] lg:h-[250px] w-auto overflow-hidden">
          <img
            src="/fwphotosforsheep/DSCF3436.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
