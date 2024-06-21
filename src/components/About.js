import React from "react";

const Contact = () => {
  return (
    <div className="my-12 bg-red-100 h-screen w-[98%] mx-auto grid grid-cols-2 gap-8 p-8">
      <div className="h-full w-[80%] mx-auto overflow-hidden">
        <div className="relative h-full z-20 group">
          <img
            src="/fwphotosforsheep/DSCF3216.jpg"
            alt="image"
            className="h-full w-full object-cover z-10"
          />
          <div className="absolute h-[90%] w-[90%] group-hover:w-[80%] group-hover:h-[80%] duration-500 border-2 border-white bg-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          {/* <div className="absolute h-[2%] w-full  duration-500 bg-white/50 backdrop-blur-xl skew-y-8 bg-none group-hover:top-[600px] top-[-100px] "></div> */}
        </div>
      </div>
      <div className="flex flex-col space-y-8 justify-center">
        <div>
          <p className="font-light py-3 text-md uppercase">About us</p>
          <h1 className="text-5xl  mr-14 font-extrabold uppercase">
            About Us - Bylinka Tannery
          </h1>
        </div>
        <p className="leading-14 text-lg">
          At the heart of our operations stands Marian Siuty, owner of Bylinka
          Tannery, who has shaped his extensive experience in leather tanning
          over more than 40 years. He took over the craft from his father,
          continuing the family's artisan traditions. Marian began his journey
          in the challenging times of Communist Poland, where this activity was
          often restricted. Over the years, thanks to his perseverance and
          passion, he has transformed a small family business into one of the
          largest tanneries in the region.
        </p>
        <button className="py-4 bg-header-color  duration-300  text-white font-semibold ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Contact;
