import React from "react";

const GetinTouch = () => {
  return (
    <div className="md:h-[600px] bg-primary-bg-color  w-full">
      <h1 className="uppercase text-[80px] md:text-[130px] lg:text-[200px] group font-light text-center  w-full">
        Get in <br />
        <span
          onClick={() => window.open("tel:+2165481997")}
          className="hover:font-extrabold duration-500 cursor-pointer  hover:text-blue-800 "
        >
          Touch
        </span>
      </h1>
    </div>
  );
};

export default GetinTouch;
