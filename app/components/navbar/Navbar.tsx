"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { IoMdMenu } from "react-icons/io";

const Navbar: React.FC = () => {
  

  

  const [isOpen, setIsOpen] = useState(false)
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverServices, setHoverServices] = useState(false);
  const [hoverTraining, setHoverTraining] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div>
    
      <nav className=" w-screen flex items-center justify-between bg-purple-300 text-white py-2 px-12">
        {/* logo  */}
        <div className=" ">
          <Image
            src="/webcos.png"
            alt=" webcos logo"
            width={80}
            height={80}
            className=""
          />
        </div>
        {/* menu for large  */}
        <div className=" hidden md:flex gap-8 text-logoblack font-semibold ">
          {/* Home  */}
          <Link
            href="/"
            onMouseEnter={() => setHoverHome(true)}
            onMouseLeave={() => setHoverHome(false)}
            className="relative inline-block text-base font-medium text-indigo-500 z-30"
          >
            <span className="block">Home</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span
                className={`absolute inset-0 inline-block w-full h-full transform border-t-2 border-indigo-500 ${
                  hoverHome ? "" : "translate-x-full"
                }`}
                style={{ transition: "ease-out 300ms" }}
              ></span>
            </span>
          </Link>

          {/* Services  */}
          <Link
            href="/services"
            onMouseEnter={() => setHoverServices(true)}
            onMouseLeave={() => setHoverServices(false)}
            className="relative inline-block text-base font-medium text-indigo-500 z-30"
          >
            <span className="block">Services</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span
                className={`absolute inset-0 inline-block w-full h-full transform border-t-2 border-indigo-500 ${
                  hoverServices ? "" : "translate-x-full"
                }`}
                style={{ transition: "ease-out 300ms" }}
              ></span>
            </span>
          </Link>

          {/* Training  */}
          <Link
            href="/training"
            onMouseEnter={() => setHoverTraining(true)}
            onMouseLeave={() => setHoverTraining(false)}
            className="relative inline-block text-base font-medium text-indigo-500 z-30"
          >
            <span className="block">Training</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span
                className={`absolute inset-0 inline-block w-full h-full transform border-t-2 border-indigo-500 ${
                  hoverTraining ? "" : "translate-x-full"
                }`}
                style={{ transition: "ease-out 300ms" }}
              ></span>
            </span>
          </Link>

          {/* About us  */}
          <Link
            href="/about"
            onMouseEnter={() => setHoverAbout(true)}
            onMouseLeave={() => setHoverAbout(false)}
            className="relative inline-block text-base font-medium text-indigo-500 z-30"
          >
            <span className="block">About us</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span
                className={`absolute inset-0 inline-block w-full h-full transform border-t-2 border-indigo-500 ${
                  hoverAbout ? "" : "translate-x-full"
                }`}
                style={{ transition: "ease-out 300ms" }}
              ></span>
            </span>
          </Link>

          {/* Contact us  */}
          <Link
            href="/contact"
            onMouseEnter={() => setHoverContact(true)}
            onMouseLeave={() => setHoverContact(false)}
            className="relative inline-block text-base font-medium text-indigo-500 z-30"
          >
            <span className="block">Contact us</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span
                className={`absolute inset-0 inline-block w-full h-full transform border-t-2 border-indigo-500 ${
                  hoverContact ? "" : "translate-x-full"
                }`}
                style={{ transition: "ease-out 300ms" }}
              ></span>
            </span>
          </Link>

          {/* <p className=" z-20 cursor-pointer">Home</p>
          <p className=" z-20 cursor-pointer">Services</p>
          <p className=" z-20 cursor-pointer">Training</p>
          <p className=" z-20 cursor-pointer">About us</p>
          <p className=" z-20 cursor-pointer">Contact us</p> */}
        </div>

        {/* burger for small  */}

        <div className=" md:hidden">
          <IoMdMenu size={35} color="#222627" />
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
