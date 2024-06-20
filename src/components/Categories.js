import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const Categories = () => {
  return (
    <div className="my-12  p-6 w-[98%] mx-auto">
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-4 group overflow-hidden">
          <h3>Sheep Skins</h3>
          <img
            src="/Sheep-icons.avif"
            alt="sheep"
            className="h-[200px] w-auto mx-auto  py-4"
          />
          <div className="relative ">
            <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
              See More
            </button>
            <div className="  text-green-600 cursor-pointer py-2 absolute top-[-300px] right-0 hover:animate-pulse group-hover:top-[-230px] duration-500">
              <RiWhatsappFill size={28} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 group overflow-hidden">
          <h3>Deer Skins</h3>
          <img
            src="/Deer-icons.avif"
            alt="sheep"
            className="h-[200px] w-auto mx-auto  py-4"
          />
          <div className="relative ">
            <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
              See More
            </button>
            <div className="  text-green-600 cursor-pointer py-2 absolute top-[-300px] right-0 hover:animate-pulse group-hover:top-[-230px] duration-500">
              <RiWhatsappFill size={28} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 group overflow-hidden">
          <h3>Reindeer Skins</h3>
          <img
            src="/Reindeer-icons.avif"
            alt="sheep"
            className="h-[200px] w-auto mx-auto  py-4"
          />
          <div className="relative ">
            <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
              See More
            </button>
            <div className="  text-green-600 cursor-pointer py-2 absolute top-[-300px] right-0 hover:animate-pulse group-hover:top-[-230px] duration-500">
              <RiWhatsappFill size={28} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 group overflow-hidden">
          <h3>Medical</h3>
          <img
            src="/Medical-icon.avif"
            alt="sheep"
            className="h-[200px] w-auto mx-auto py-4"
          />
          <div className="relative ">
            <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
              See More
            </button>
            <div className="  text-green-600 cursor-pointer py-2 absolute top-[-300px] right-0 hover:animate-pulse group-hover:top-[-230px] duration-500">
              <RiWhatsappFill size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
