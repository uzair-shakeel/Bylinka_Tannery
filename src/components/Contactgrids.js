import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineLocationSearching } from "react-icons/md";

const Contactgrids = () => {
  const handlePhoneClick = () => {
    window.open("tel:+2165481997", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:Email@example.com", "_blank");
  };

  const handleAddressClick = () => {
    // Constructing a Google Maps URL with the address
    const addressQuery = encodeURIComponent(
      "123 Maple Street, Greenwood City, Meadowshire, MS 12345, United States"
    );
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
    window.open(mapUrl, "_blank");
  };

  const handleInfoClick = () => {
    // Do nothing
  };

  return (
    <div className="px-[5%] py-12">
      <div className="grid md:grid-cols-3 gap-4 ">
        <div
          className="bg-gradient-to-b hover:scale-105 duration-300 cursor-pointer flex flex-col gap-3 items-center rounded-lg from-blue-50 to-white p-8"
          onClick={handleEmailClick}
        >
          <MdOutlineMailOutline size={40} />
          <h1 className="text-3xl font-bold text-black">Email</h1>
          <p className="text-xl">Email@example.com</p>
        </div>
        <div
          className="bg-gradient-to-b hover:scale-105 duration-300 cursor-pointer flex flex-col gap-3 items-center rounded-lg from-blue-50 to-white p-8"
          onClick={handlePhoneClick}
        >
          <LuPhoneCall size={40} />
          <h1 className="text-3xl font-bold text-black">Phone</h1>
          <p className="text-xl">+2165481997</p>
        </div>
        <div
          className="bg-gradient-to-b hover:scale-105 duration-300 cursor-pointer flex flex-col gap-3 items-center rounded-lg from-blue-50 to-white p-8"
          onClick={handleInfoClick}
        >
          <HiOutlineInformationCircle size={40} />
          <h1 className="text-3xl font-bold text-black">Info</h1>
          <p className="text-xl">
            <span className="font-semibold">NIP:</span> 1234567899
          </p>
          <p className="text-xl">
            <span className="font-semibold">RN:</span> 1234567899
          </p>
        </div>
      </div>
      <div
        className="bg-gradient-to-b hover:scale-105 duration-300 cursor-pointer flex flex-col gap-3 items-center rounded-lg from-blue-50 to-white p-8"
        onClick={handleAddressClick}
      >
        <MdOutlineLocationSearching size={40} />
        <h1 className="text-3xl font-bold text-black">Address</h1>
        <p className="text-xl">
          123 Maple Street, Greenwood City, Meadowshire, MS 12345, United States
        </p>
      </div>
    </div>
  );
};

export default Contactgrids;
