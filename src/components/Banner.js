import React from "react";
import Link from "next/link";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <div>
          <div className="relative h-[600px] w-full overflow-hidden">
            <img
              src="/9.webp"
              alt="img"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 w-full text-center">
              <h3 className="text-5xl font-semibold  text-green-800">
                {t("banner.sheep.heading")}
              </h3>
              <p className="text-green-900 py-4">
                {t("banner.sheep.description1")} <br />{" "}
                {t("banner.sheep.description2")}
              </p>
              <Link href="sheep">
                <button className="py-2 px-5 bg-green-800 text-white">
                  {t("banner.sheep.see")}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[600px] w-full overflow-hidden">
            <img
              src="/10.jpg"
              alt="img"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 w-full text-center">
              <h3 className="text-5xl font-semibold  text-blue-800">
                {t("banner.deer.heading")}
              </h3>
              <p className="text-blue-900 py-4">
                {t("banner.deer.description1")} <br />{" "}
                {t("banner.deer.description2")}
              </p>
              <Link href="deer">
                <button className="py-2 px-5 bg-blue-800 text-white">
                  {t("banner.deer.see")}
                </button>
              </Link>
            </div>
          </div>
          <div className=" relative h-[600px] w-full overflow-hidden">
            <img
              src="/11.jpg"
              alt="img"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 w-full text-center">
              <h3 className="text-5xl font-semibold text-red-50">
                {t("banner.reindeer.heading")}
              </h3>
              <p className="text-red-50 py-4">
                {t("banner.reindeer.description1")} <br />{" "}
                {t("banner.reindeer.description2")}
              </p>
              <Link href="reindeer">
                <button className="py-2 px-5 bg-header-color text-red-50">
                  {t("banner.reindeer.see")}
                </button>
              </Link> 
            </div>
          </div>
        </div>
      </I18nextProvider>
    </>
  );
};

export default Banner;
