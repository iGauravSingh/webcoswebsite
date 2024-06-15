"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { IoMdMenu } from "react-icons/io";
{
  /* <p className=" z-20 cursor-pointer">Home</p>
          <p className=" z-20 cursor-pointer">Services</p>
          <p className=" z-20 cursor-pointer">Training</p>
          <p className=" z-20 cursor-pointer">About us</p>
          <p className=" z-20 cursor-pointer">Contact us</p> */
}
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverServices, setHoverServices] = useState(false);
  const [hoverTraining, setHoverTraining] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [hover, setHover] = useState(false);

  return (
    <div className=" relative font-Poppins bg-about">
      <div className=" absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-sm"></div>
      
      <nav className=" w-screen flex items-center justify-between  text-white py-2 px-12">
        {/* logo  */}
        <div className=" z-30 ">
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
            className="relative inline-block text-base font-medium text-white z-30"
          >
            <span className="block">Home</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span
                className={`absolute inset-0 inline-block w-full h-full transform border-t-2 border-white ${
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
            className="relative inline-block text-base font-medium text-white z-30"
          >
            <span className="block">Services</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span
                className={`absolute inset-0 inline-block w-full h-full transform border-t-2 border-white ${
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
            className="relative inline-block text-base font-medium text-white z-30"
          >
            <span className="block">Training</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span
                className={`absolute inset-0 inline-block w-full h-full transform border-t-2 border-white ${
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
            className="relative inline-block text-base font-medium text-white z-30"
          >
            <span className="block">About us</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span
                className={`absolute inset-0 inline-block w-full h-full transform border-t-2 border-white ${
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
            className="relative inline-block text-base font-medium text-white z-30"
          >
            <span className="block">Contact us</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span
                className={`absolute inset-0 inline-block w-full h-full transform border-t-2 border-white ${
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

        <div className=" md:hidden z-40">
          <IoMdMenu size={35} color="#fefefe" />
        </div>
      </nav>

      {/* ////////////////////////////////////  */}

      <div className=" w-screen h-screen  flex flex-col gap-4 md:flex-row font-Poppins items-center justify-center px-12">
        {/* image section  */}

        <div className=" w-[100%] md:w-[50%] h-full overflow-clip z-20 ">
          <Image
            className=" animate-herobounce"
            src="/webdev3.png"
            alt="hero image"
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>

        {/* description section  */}
        <div className=" relative w-[100%] md:w-[50%] h-full overflow-clip flex flex-col justify-center gap-2 md:gap-5">
          <h1 className=" text-2xl md:text-5xl text-white font-bold text-wrap">
            Build stunning websites & apps.
          </h1>
          <p className=" md:text-lg text-logoblack font-semibold">
            Create live segments and target the right people for messages based
            on their behaviors.
          </p>
          {/* <button className=" border-2 border-logoblack px-4 py-3 w-[150px] text-lg text-logoblack">About Us</button> */}
          <Link href="/about">
          <button className="relative inline-block text-lg group w-[150px]">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">About Us</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
          </Link>
          {/* <div className=' absolute top-0 right-0 -mt-6 w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 z-10'></div>
        <div className=' absolute top-0 right-0 -mt-10 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-400 to-blue-400'></div>
         */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
