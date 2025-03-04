"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.avif";
import Link from "next/link";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <footer className="flex flex-col items-center lg:items-start bg-background-color lg:flex-row justify-between gap-6 border-b border-[#171848]/10 py-6 px-6 md:px-10 ">
        <div className="w-[70%]  lg:max-w-[45%]   space-y-[25px]  md:border-r border-[#171848]/10 pr-4">
          <div className="flex justify-center font-bold">
            <Image
              src={Logo}
              alt="Logo"
              className="w-auto h-[70px] text-header-color"
            />
          </div>
          <p className="w-full text-center lg:text-start md:w-[50%] lg:w-full">
            {t("footer.address")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row  w-full ">
          <div
            className="grid grid-cols-1 gap-3 text-center lg:text-start
         md:grid-cols-3 w-full"
          >
            <div>
              <h4 className="text-[18px] font-semibold py-3">
                {t("footer.pages")}
              </h4>
              <ul className="text-[#171848]/60 space-y-2 text-[16px]">
                <li>
                  <Link href={"home"}>{t("footer.home")}</Link>
                </li>

                <li>
                  <Link href={"sheep"}>{t("footer.sheep")}</Link>
                </li>
                <li>
                  <Link href={"deer"}>{t("footer.deer")}</Link>
                </li>
                <li>
                  <Link href={"reindeer"}>{t("footer.reindeer")}</Link>
                </li>
                <li>
                  <Link href={"medical"}>{t("footer.medical")}</Link>
                </li>

                <li>
                  <Link href={"about"}>{t("footer.about")}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] font-semibold py-3">
                {t("footer.info")}
              </h4>
              <ul className="text-[#171848]/60 space-y-2 text-[16px]">
                <li>NIP: 1234567899</li>
                <li>RN: 1234567899</li>
                <li>{t("footer.privacy")}</li>
                <li>{t("footer.terms")}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] font-semibold py-3">
                {t("footer.connect")}
              </h4>
              <ul className="text-[#171848]/60 space-y-2 text-[16px]">
                <li className="flex justify-center lg:justify-start gap-3">
                  <a
                    href="mailto:email@example.com"
                    className="flex justify-center lg:justify-start gap-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#8b4513"
                      className="w-6 h-6"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    Email@example.com
                  </a>
                </li>
                <li className="flex justify-center lg:justify-start gap-3">
                  <a
                    href="tel:+2165481997"
                    className="flex justify-center lg:justify-start gap-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#8b4513"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    +2165481997
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </I18nextProvider>
  );
};

export default Footer;
