import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="md:my-12 my-4  p-6 w-[98%] mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-neutral-100 p-4 group overflow-hidden">
          <h3>Sheep Skins</h3>
          <img
            src="/Sheep-icons.avif"
            alt="sheep"
            className="h-[200px] w-auto mx-auto  py-4"
          />
          <div className="relative ">
            <Link href="sheep">
              <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-neutral-100 p-4 group overflow-hidden">
          <h3>Deer Skins</h3>
          <img
            src="/Deer-icons.avif"
            alt="sheep"
            className="h-[200px] w-auto mx-auto  py-4"
          />
          <div className="relative ">
            <Link href="deer">
              <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-neutral-100 p-4 group overflow-hidden">
          <h3>Reindeer Skins</h3>
          <img
            src="/Reindeer-icons.avif"
            alt="sheep"
            className="h-[200px] w-auto mx-auto  py-4"
          />
          <div className="relative ">
            <Link href="reindeer">
              <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-neutral-100 p-4 group overflow-hidden">
          <h3>Medical</h3>
          <img
            src="/Medical-icon.avif"
            alt="sheep"
            className="h-[200px] w-auto mx-auto py-4"
          />
          <div className="relative ">
            <Link href="medical">
              <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
