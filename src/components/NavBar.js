"use client";
import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

const NavBar = () => {
  const { t } = useTranslation();
  const [selectedKeys, setSelectedKeys] = useState(new Set(["english"]));
  const [isVisible, setIsVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const languageMap = {
    english: { image: "/English.png", text: "English", code: "en" },
    polski: { image: "/polski.jpeg", text: "Polski", code: "pl" },
    german: { image: "/german.avif", text: "German", code: "de" },
    french: { image: "/french.avif", text: "French", code: "fr" },
    swedish: { image: "/swedish.avif", text: "Swedish", code: "sv" },
  };

  const changeLanguage = (key) => {
    const language = languageMap[key].code;
    i18n.changeLanguage(language);
  };

  const selectedValue = React.useMemo(() => {
    const selectedKey = Array.from(selectedKeys)[0];
    const { image, text } = languageMap[selectedKey];
    return (
      <div className="flex items-center gap-3">
        <img src={image} alt={selectedKey} className="h-7 w-7 rounded-full" />
        {text}
      </div>
    );
  }, [selectedKeys]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <div
          className={`px-[5%] hidden fixed backdrop-blur-md  top-4  mx-[2%] border border-header-color rounded-md shadow-lg md:flex justify-between items-center z-[1000] text-white bg-header-color/40 w-[96%] transition-transform duration-500 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex gap-5 md:gap-6 uppercase py-2 items-center text-sm md:text-md justify-start h-full font-light">
            <Link href={"home"}>
              <li className="cursor-pointer ">{t("navbar.home")}</li>
            </Link>

            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="ghost"
                  size="sm"
                  color="white"
                  className="capitalize border-none text-md"
                >
                  {t("navbar.services")}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem>
                  <Link href={"sheep"}>{t("navbar.servicesMenu.sheep")}</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href={"deer"}>{t("navbar.servicesMenu.deer")}</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href={"reindeer"}>
                    {t("navbar.servicesMenu.reindeer")}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href={"medical"}>
                    {t("navbar.servicesMenu.medical")}
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Link href={"about"}>
              <li className="cursor-pointer">{t("navbar.about")}</li>
            </Link>
          </ul>

          <Dropdown className="text-sm md:text-md">
            <DropdownTrigger>
              <Button
                variant="ghost"
                color="white"
                className="capitalize border-none text-md"
              >
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              {Object.keys(languageMap).map((key) => (
                <DropdownItem key={key} onClick={() => changeLanguage(key)}>
                  <div className="flex items-center gap-3">
                    <img
                      src={languageMap[key].image}
                      alt={key}
                      className="h-6 w-8"
                    />
                    {languageMap[key].text}
                  </div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        {/* small devices */}
        <div
          className={`px-[3%] fixed backdrop-blur-md bottom-4 md:hidden mx-[4%] border border-header-color rounded-md shadow-lg flex justify-center items-center z-[1000] text-white bg-header-color/40 w-[92%] transition-transform duration-500 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex w-full justify-between uppercase py-2 items-center text-sm md:text-md  h-full font-light">
            <Button
              variant="ghost"
              color="white"
              size="sm"
              className="capitalize border-none text-md"
            >
              <Link href={"home"}>
                <FaHome size={28} />
              </Link>
            </Button>

            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="ghost"
                  size="sm"
                  color="white"
                  className="capitalize border-none text-md"
                >
                  <AiFillProduct size={28} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem>
                  <Link href={"sheep"}>{t("navbar.servicesMenu.sheep")}</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href={"deer"}>{t("navbar.servicesMenu.deer")}</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href={"reindeer"}>
                    {t("navbar.servicesMenu.reindeer")}
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href={"medical"}>
                    {t("navbar.servicesMenu.medical")}
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <button
              onClick={scrollToTop}
              className="px-3 cursor-pointer text-white  animate-bounce z-[100]"
            >
              <RiArrowUpDoubleLine size={35} />
            </button>
            <Button
              variant="ghost"
              color="white"
              size="sm"
              className="capitalize border-none text-md"
            >
              <Link href={"about"}>
                <BsInfoCircleFill size={28} />
              </Link>
            </Button>

            <li>
              <Dropdown className="text-sm md:text-md">
                <DropdownTrigger>
                  <Button
                    variant="ghost"
                    color="white"
                    size="sm"
                    className="capitalize border-none text-md"
                  >
                    <GrLanguage size={28} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                >
                  {Object.keys(languageMap).map((key) => (
                    <DropdownItem key={key} onClick={() => changeLanguage(key)}>
                      <div className="flex items-center gap-3">
                        <img
                          src={languageMap[key].image}
                          alt={key}
                          className="h-6 w-8"
                        />
                        {languageMap[key].text}
                      </div>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </I18nextProvider>
    </>
  );
};

export default NavBar;
