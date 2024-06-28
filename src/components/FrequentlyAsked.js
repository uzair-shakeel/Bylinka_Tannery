import React from "react";
import FAQs from "./FAQs";
import Image from "next/image";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const FrequentlyAsked = () => {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <div className="px-[4%] py-2 md:py-8 grid lg:grid-cols-2 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold py-6 text-center">
            {t("faq.heading")}
          </h1>
          <div className="md:px-[5%]">
            <FAQs />
          </div>
        </div>
        <div className="hidden md:block rounded-3xl overflow-hidden h-full w-full">
          <img src="/8.jpg" alt="img" className="h-full w-full object-cover" />
        </div>
      </div>
    </I18nextProvider>
  );
};

export default FrequentlyAsked;
