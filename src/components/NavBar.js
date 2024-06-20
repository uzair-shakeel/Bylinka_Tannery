import React from "react";

const NavBar = () => {
  return (
    <div className="px-[5%] flex justify-between items-center  text-white bg-header-color w-full">
      <ul className="flex gap-6 py-2 items-center justify-start h-full">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <p className="cursor-pointer">Languages</p>
    </div>
  );
};

export default NavBar;
