import React from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const GetinTouch = () => {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <div className="md:h-[600px] bg-primary-bg-color  w-full">
        <h1 className="uppercase text-[80px] md:text-[130px] lg:text-[150px] group font-light text-center  w-full">
          {t("touch.get")} <br />
          <span
            onClick={() => window.open("tel:+2165481997")}
            className="hover:font-extrabold duration-500 cursor-pointer  hover:text-blue-800 "
          >
            {t("touch.touch")}
          </span>
        </h1>
      </div>
    </I18nextProvider>
  );
};

export default GetinTouch;
