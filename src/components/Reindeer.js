import React from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const Reindeer = () => {
  const { t } = useTranslation();

  const imageUrls = [
    "/fwreindeerphotos/DSCF3237.jpg",
    "/fwreindeerphotos/DSCF3238.jpg",
    "/fwreindeerphotos/DSCF3241.jpg",
    "/fwreindeerphotos/DSCF3242.jpg",
  ];

  return (
    <I18nextProvider i18n={i18n}>
      <div className="p-4 w-[98%] mx-auto bg-white mb-4 md:mb-12">
        <h3 className="font-bold text-xl md:text-2xl py-2">
          {t("navbar.servicesMenu.reindeer")}
        </h3>
        <div
          className="w-full overflow-x-auto md:overflow-x-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-1 md:gap-3 lg:gap-6 justify-between w-max md:w-full">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className="h-[170px] lg:h-[250px] w-auto overflow-hidden"
              >
                <img
                  src={url}
                  alt={`Reindeer Skin ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default Reindeer;
