"use client";
import React, { useState } from "react";

const Service = () => {
  const [zoomIn, setZoomIn] = useState(false); // Corrected state hook
  const [selectedImage, setSelectedImage] = useState(
    "/fwphotosforsheep/DSCF3201.jpg"
  );

  const images = [
    "/fwphotosforsheep/DSCF3201.jpg",
    "/fwphotosforsheep/DSCF3213.jpg",
    "/fwphotosforsheep/DSCF3216.jpg",
    "/fwphotosforsheep/DSCF3243.jpg",
    "/fwphotosforsheep/DSCF3436.jpg",
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-6 px-[5%] py-20">
      <div className="flex gap-2">
        <div className="w-[20%] space-y-2 flex flex-col items-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`cursor-pointer border-2 ${
                selectedImage === image
                  ? "border-header-color"
                  : "border-transparent"
              } hover:border-header-color`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <div className="w-[80%] h-full overflow-hidden flex justify-center items-center">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected"
              onClick={() => setZoomIn(!zoomIn)}
              className={`w-full h-full object-cover  rounded-lg transition-transform duration-300 transform ${
                zoomIn
                  ? "scale-[180%] cursor-zoom-out"
                  : "scale-100 cursor-zoom-in"
              } `}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-bold">Reindeer Skin Tanning</h3>
        <p className="py-4 leading-7 text-justify">
          At Bylinka Tannery, renowned for its masterful approach to traditional
          craftsmanship, we offer a unique service of tanning reindeer skins.
          These noble skins, sourced from remote Arctic regions, are valued
          worldwide for their exceptional durability and beauty.
        </p>
        <h4 className="text-lg font-bold my-2">Available Color:</h4>
        <div className="w-full flex gap-3">
          <span className="h-14 w-14 rounded-full shadow-md border border-white bg-header-color"></span>
          <span className="h-14 w-14 rounded-full shadow-md border border-white bg-white"></span>
          <span className="h-14 w-14 rounded-full shadow-md border border-white bg-black"></span>
        </div>
        <h4 className="text-lg font-bold my-2">Available Patterns:</h4>
        <div className="w-full flex ">
          <span className="bg-header-color/20 w-full border text-center text-header-color border-header-color py-2 px-10">
            Straight
          </span>
          <span className="bg-header-color/20 border w-full text-center text-header-color border-header-color py-2 px-10">
            Curly
          </span>
          <span className="bg-header-color/20 border w-full text-center text-header-color border-header-color py-2 px-10">
            Short
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
