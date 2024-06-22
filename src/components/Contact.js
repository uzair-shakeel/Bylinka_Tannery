import React from "react";

const Contact = () => {
  return (
    <div className=" md:mb-12 bg-gradient-to-b from-red-100 to-white h-screen w-full grid lg:grid-cols-2 gap-8 p-8">
      <div className="h-full w-[80%] mx-auto overflow-hidden">
        <div className="relative h-full z-20 group">
          <img
            src="/5.webp"
            alt="image"
            className="h-full w-full object-cover z-10"
          />
          <div className="absolute h-[90%] w-[90%] group-hover:w-[80%] group-hover:h-[80%] duration-500 border-2 border-white bg-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          {/* <div className="absolute h-[2%] w-full  duration-500 bg-white/50 backdrop-blur-xl skew-y-8 bg-none group-hover:top-[600px] top-[-100px] "></div> */}
        </div>
      </div>
      <div className="flex flex-col space-y-8 justify-center">
        <div>
          <p className="font-light py-1 md:py-3 text-sm md:text-md uppercase">
            Contact
          </p>
          <h1 className="text-2xl md:text-5xl  mr-14 font-extrabold uppercase">
            Get in Touch with Us Today!
          </h1>
        </div>
        <p className=" leading-6 md:leading-14 text-sm md:text-lg">
          Have questions or need assistance? Our team is here to help with any
          inquiries about our products or your orders. Reach out to us today,
          and we'll get back to you promptly!
        </p>
        <button className="py-4 bg-header-color text-sm md:text-lg duration-300  text-white font-semibold ">
          Chat Now
        </button>
      </div>
    </div>
  );
};

export default Contact;
