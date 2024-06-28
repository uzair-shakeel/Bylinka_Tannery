import React from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const achievement = () => {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <section className=" py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("achievement.heading")}
            </h2>
            <p className="mx-8 md:mx-0 text-sm md:text-lg mb-8">
              {t("achievement.description")}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
              <div className="p-4">
                <h3 className="text-2xl md:text-4xl font-bold ">600+</h3>
                <p className="text-sm md:text-lg">{t("achievement.sheep")}</p>
              </div>
              <div className="p-4">
                <h3 className="text-2xl md:text-4xl font-bold ">300+</h3>
                <p className="text-sm md:text-lg">{t("achievement.deer")}</p>
              </div>
              <div className="p-4">
                <h3 className="text-2xl md:text-4xl font-bold ">200+</h3>
                <p className="text-sm md:text-lg">
                  {t("achievement.reindeer")}
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-2xl md:text-4xl font-bold ">150+</h3>
                <p className="text-sm md:text-lg">{t("achievement.medical")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </I18nextProvider>
  );
};

export default achievement;
