import React from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const ServiceDescription = () => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <div className="pb-4 md:pb-14 px-[5%]">
        <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
          {t("reindeer.heading2")}
        </h1>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          {t("reindeer.desc1")}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
          {t("reindeer.heading3")}
        </h1>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          {t("reindeer.desc2")}
        </p>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          {t("reindeer.desc3")}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
          {t("reindeer.heading4")}
        </h1>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          {t("reindeer.desc4")}
        </p>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          {t("reindeer.desc5")}
        </p>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          {t("reindeer.desc6")}
        </p>
      </div>
    </I18nextProvider>
  );
};

export default ServiceDescription;
