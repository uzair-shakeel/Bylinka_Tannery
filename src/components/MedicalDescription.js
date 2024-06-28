import React from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const ServiceDescription = () => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <div className="pb-4 md:pb-14 px-[5%]">
        <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
          {t("medical.heading2")}
        </h1>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          {t("medical.desc1")}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
          {t("medical.heading3")}
        </h1>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          {t("medical.desc2")}
        </p>

        <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
          {t("medical.heading4")}
        </h1>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          {t("medical.desc3")}
        </p>

        <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
          {t("medical.heading5")}
        </h1>
        <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
          {t("medical.desc4")}
        </p>
      </div>
    </I18nextProvider>
  );
};

export default ServiceDescription;
