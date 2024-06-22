"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.avif";
import Link from "next/link";

const Footer = () => {
  return (
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
          123 Maple Street, Greenwood City, Meadowshire, MS 12345, United States
        </p>
      </div>

      <div className="flex flex-col md:flex-row  w-full ">
        <div
          className="grid grid-cols-1 gap-3 text-center lg:text-start
         md:grid-cols-3 w-full"
        >
          <div>
            <h4 className="text-[18px] font-semibold py-3">Information</h4>
            <ul className="text-[#171848]/60 space-y-2 text-[16px]">
              <li>NIP: 1234567899</li>
              <li>RN: 1234567899</li>
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-semibold py-3">Pages</h4>
            <ul className="text-[#171848]/60 space-y-2 text-[16px]">
              <Link href={"home"}>
                <li>Home</li>
              </Link>

              <Link href={"services"}>
                <li>Services</li>
              </Link>

              <Link href={"about"}>
                <li>About</li>
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-semibold py-3">Connect with us</h4>
            <ul className="text-[#171848]/60 space-y-2 text-[16px]">
              <li className="flex justify-center lg:justify-start gap-3">
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
              </li>
              <li className="flex justify-center lg:justify-start gap-3">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
