import React from "react";
import Link from "next/link";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const Categories = () => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <div className="md:my-12 my-4  p-6 w-[98%] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-100 p-4 group overflow-hidden">
            <h3>{t("navbar.servicesMenu.sheep")}</h3>
            <img
              src="/Sheep-icons.avif"
              alt="sheep"
              className="h-[200px] w-auto mx-auto  py-4"
            />
            <div className="relative ">
              <Link href="sheep">
                <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
                  See More
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-neutral-100 p-4 group overflow-hidden">
            <h3>{t("navbar.servicesMenu.deer")}</h3>
            <img
              src="/Deer-icons.avif"
              alt="sheep"
              className="h-[200px] w-auto mx-auto  py-4"
            />
            <div className="relative ">
              <Link href="deer">
                <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
                  See More
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-neutral-100 p-4 group overflow-hidden">
            <h3>{t("navbar.servicesMenu.reindeer")}</h3>
            <img
              src="/Reindeer-icons.avif"
              alt="sheep"
              className="h-[200px] w-auto mx-auto  py-4"
            />
            <div className="relative ">
              <Link href="reindeer">
                <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
                  See More
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-neutral-100 p-4 group overflow-hidden">
            <h3>{t("navbar.servicesMenu.medical")}</h3>
            <img
              src="/Medical-icon.avif"
              alt="sheep"
              className="h-[200px] w-auto mx-auto py-4"
            />
            <div className="relative ">
              <Link href="medical">
                <button className="w-full bg-header-color text-white py-2 absolute top-5 group-hover:top-[-30px] duration-500">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default Categories;
