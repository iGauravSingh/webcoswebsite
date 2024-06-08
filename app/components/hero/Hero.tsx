"use client";
import Image from "next/image";
import React, { useState } from "react";

import { IoMdMenu } from "react-icons/io";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" relative">
      <div className=" absolute top-0 right-0 z-10 opacity-20 w-screen rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L60,53.3C120,43,240,21,360,26.7C480,32,600,64,720,85.3C840,107,960,117,1080,101.3C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <nav className=" w-screen flex items-center justify-between bg-logowhite text-white py-2 px-12">
        {/* logo  */}
        <div className=" ">
          <Image src="/webcos.png" alt=" webcos logo" width={80} height={80} />
        </div>
        {/* menu for large  */}
        <div className=" hidden md:flex gap-8 text-logoblack ">
          <p className=" z-20 cursor-pointer">Home</p>
          <p className=" z-20 cursor-pointer">About us</p>
          <p className=" z-20 cursor-pointer">Contact us</p>
        </div>

        {/* burger for small  */}

        <div className=" md:hidden">
          <IoMdMenu size={35} color="#222627" />
        </div>
      </nav>

      {/* ////////////////////////////////////  */}

      <div className=" w-screen h-screen bg-logowhite flex flex-col gap-4 md:flex-row font-Poppins items-center justify-center px-12">
        {/* image section  */}

        <div className=" w-[100%] md:w-[50%] h-full overflow-clip z-20">
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
        <div className=" relative w-[100%] md:w-[50%] h-full overflow-clip flex flex-col justify-center gap-5">
          <h1 className=" text-5xl text-logoblue font-bold text-wrap">
            Build stunning websites & apps.
          </h1>
          <p className=" text-lg text-logoblack font-semibold">
            Create live segments and target the right people for messages based
            on their behaviors.
          </p>
          {/* <button className=" border-2 border-logoblack px-4 py-3 w-[150px] text-lg text-logoblack">About Us</button> */}
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
          {/* <div className=' absolute top-0 right-0 -mt-6 w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 z-10'></div>
        <div className=' absolute top-0 right-0 -mt-10 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-400 to-blue-400'></div>
         */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
