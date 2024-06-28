import React from "react";
import i18n from "../context/i18n";
import { useTranslation, I18nextProvider } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
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
              {t("contact.heading")}
            </p>
            <h1 className="text-2xl md:text-5xl  mr-14 font-extrabold uppercase">
              {t("contact.tagline")}
            </h1>
          </div>
          <p className=" leading-6 md:leading-14 text-sm md:text-lg">
            {t("contact.description")}
          </p>
          <button
            onClick={() => window.open("tel:+2165481997")}
            className="py-4 bg-header-color text-sm md:text-lg duration-300  text-white font-semibold "
          >
            {t("contact.chat")}
          </button>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default Contact;
