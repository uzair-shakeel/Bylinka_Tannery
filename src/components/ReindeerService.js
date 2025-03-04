"use client";
import React, { useState } from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const ReindeerService = () => {
  const { t } = useTranslation();
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
    <I18nextProvider i18n={i18n}>
      <div className="grid lg:grid-cols-2 gap-6 md:px-[5%] py-8 md:py-20">
        <div className="flex flex-col mx-[3%] md:mx-0 md:flex-row gap-2">
          <div className="justify-between w-[20%] md:space-y-2 flex md:flex-col items-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`cursor-pointer w-full border-2 ${
                  selectedImage === image
                    ? "border-header-color"
                    : "border-transparent"
                } hover:border-header-color`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <div className="w-full md:w-[80%] h-full overflow-hidden flex justify-center items-center">
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
        <div className="flex flex-col mx-[3%] md:mx-0 justify-center ">
          <h3 className="text-2xl md:text-3xl font-bold">
            {t("reindeer.heading")}
          </h3>
          <p className="py-4 md:leading-7 text-justify leading-5 md:text-md text-sm">
            {t("reindeer.description")}
          </p>
          <h4 className="text-md md:text-lg font-bold my-2">
            {t("reindeer.colors")}
          </h4>
          <div className="w-full flex gap-3">
            <span className="md:h-14 md:w-14 w-8 h-8 rounded-full shadow-md border border-white bg-header-color"></span>
            <span className="md:h-14 md:w-14 w-8 h-8 rounded-full shadow-md border border-white bg-white"></span>
            <span className="md:h-14 md:w-14 w-8 h-8 rounded-full shadow-md border border-white bg-black"></span>
          </div>
          <h4 className="text-md md:text-lg font-bold mt-6 mb-2 md:my-2">
            {t("reindeer.pattern")}
          </h4>
          <div className="w-full flex ">
            <span className="bg-header-color/20 w-full border text-center text-header-color border-header-color py-2 px-7 md:px-10 text-sm md:text-md">
              Straight
            </span>
            <span className="bg-header-color/20 border w-full text-center text-header-color border-header-color py-2 px-7 md:px-10 text-sm md:text-md">
              Curly
            </span>
            <span className="bg-header-color/20 border w-full text-center text-header-color border-header-color py-2 px-7 md:px-10 text-sm md:text-md">
              Short
            </span>
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default ReindeerService;
