import React from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const ServiceDescription = () => {
  const { t } = useTranslation();
  const breeds = [
    { name: "Merino", bg: "bg-header-color/20" },
    { name: "Dorper", bg: "bg-header-color/20" },
    { name: "Suffolk", bg: "bg-header-color/20" },
    { name: "Hampshire", bg: "bg-header-color/20" },
    { name: "Texel", bg: "bg-header-color/20" },
    { name: "Corriedale", bg: "bg-header-color/20" },
    { name: "Romney", bg: "bg-header-color/20" },
    { name: "Cheviot", bg: "bg-header-color/20" },
    { name: "Loncoln", bg: "bg-header-color/20" },
    { name: "Rambouillet", bg: "bg-header-color/20" },
  ];

  return (
    <I18nextProvider i18n={i18n}>
      <div className="pb-4 md:pb-14 px-[5%]">
        <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
          {t("sheep.breed")}
        </h1>
        <div className="w-full grid grid-cols-5 grid-rows-2 items-center justify-center ">
          {breeds.map((option, index) => (
            <span
              key={index}
              className={`bg-header-color/10 w-full border text-center text-header-color border-header-color py-4   text-sm md:text-lg`}
            >
              {option.name}
            </span>
          ))}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold py-5 text-center md:mt-12">
          {t("sheep.heading2")}
        </h1>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          <span className="font-bold">{t("sheep.desc1")}</span>
          {t("sheep.desc2")}
        </p>

        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          <span className="font-bold">{t("sheep.desc1")}</span>
          {t("sheep.desc4")}
        </p>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          <span className="font-bold">{t("sheep.desc5")}</span>
          {t("sheep.desc6")}
        </p>
        <p className="leading-6 md:leading-8 py-6 text-justify text-sm md:text-md">
          {t("sheep.desc7")}
        </p>
      </div>
    </I18nextProvider>
  );
};

export default ServiceDescription;
