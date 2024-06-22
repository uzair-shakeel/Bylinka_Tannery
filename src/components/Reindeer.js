import React from "react";

const Reindeer = () => {
  return (
    <div className=" p-4 w-[98%] mx-auto bg-white mb-12">
      <h3 className="font-bold text-xl md:text-2xl py-2">Reindeer Skin</h3>
      <div className="flex gap-1 md:gap-3 lg:gap-6 w-full  justify-between">
        <div className="h-[100px] md:h-[170px] lg:h-[250px] w-auto overflow-hidden">
          <img
            src="/fwreindeerphotos/DSCF3237.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[100px] md:h-[170px] lg:h-[250px] w-auto overflow-hidden">
          <img
            src="/fwreindeerphotos/DSCF3238.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[100px] md:h-[170px] lg:h-[250px] w-auto overflow-hidden">
          <img
            src="/fwreindeerphotos/DSCF3241.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-[100px] md:h-[170px] lg:h-[250px] w-auto overflow-hidden">
          <img
            src="/fwreindeerphotos/DSCF3242.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Reindeer;
