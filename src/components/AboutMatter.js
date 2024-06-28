import React from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const AboutMatter = () => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <div className="pt-2 md:py-14 md:pb-4 px-[5%] lg:px-[15%]">
        <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
          {t("about.heading")}
        </h1>
        <p className="md:leading-8 py-3 text-justify text-sm md:text-md lg:text-lg leading-6">
          {t("about.para1")}
        </p>
        <p className="md:leading-8 py-3 text-justify text-sm md:text-md lg:text-lg leading-6">
          {t("about.para2")}
        </p>
        <p className="md:leading-8 py-3 text-justify text-sm md:text-md lg:text-lg leading-6">
          {t("about.para3")}
        </p>
        <p className="md:leading-8 py-3 text-justify text-sm md:text-md lg:text-lg leading-6">
          {t("about.para4")}
        </p>
      </div>
    </I18nextProvider>
  );
};

export default AboutMatter;
