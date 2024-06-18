"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

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
    
      <nav className=" relative w-screen flex items-center justify-between bg-purple-400 text-white py-2 px-12">
        <div className=" absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-sm"></div>
        {/* logo  */}
        
        <div className=" z-30 ">
        <Link href="/">
          <Image
            src="/webcosnewlogo21.png"
            alt=" webcos logo"
            width={100}
            height={100}
            className=""
          />
          </Link>
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

        <div className=" md:hidden z-30 cursor-pointer">
          <IoMdMenu onClick={()=> setIsOpen(true)} size={35} color="#fefefe" />
            
        </div>
      </nav>

      {/* ////  */}
      {isOpen && (
        <div className=" absolute top-0 right-0 h-screen w-1/3 bg-purple-400 text-white z-40 px-2 py-2 font-Poppins">
          <div onClick={()=> setIsOpen(false)} className=" flex justify-end cursor-pointer"><IoIosClose color="#fefefe" size={40} /></div>
          <div className=" flex flex-col justify-end items-end gap-5 mt-4 text-xl">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/training">Training</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact us</Link>
          </div>
        </div>
      )}


      {/* //// */}
    </div>
    </>
  );
};

export default Navbar;
