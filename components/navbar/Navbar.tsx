"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <nav className="relative w-full flex items-center justify-between bg-purple-400 text-white py-2 px-12">
        <div className="absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-sm"></div>
        <div className="z-30">
          <Link href="/">
            <Image
              src="/webcosnewlogo21.png"
              alt="webcos logo"
              width={100}
              height={100}
              className=""
            />
          </Link>
        </div>

        {/* Menu for large screens */}
        <div className="hidden md:flex gap-8 font-semibold text-logoblack">
          {[
            { title: "Home", link: "/" },
            { title: "About us", link: "/about" },
            { title: "Services", link: "/services" },
            { title: "Training", link: "/training" },
            { title: "Contact us", link: "/contact" },
            { title: "Workshops", link: "/workshops" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="relative inline-block text-base font-medium text-white z-30 group"
            >
              <span className="block">{item.title}</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span className="absolute inset-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 transition-transform ease-out duration-300 border-t-2 border-white"></span>
              </span>
            </Link>
          ))}
        </div>

        {/* Burger menu for small screens */}
        <div className="md:hidden z-30 cursor-pointer">
          <IoMdMenu onClick={() => setIsOpen(true)} size={35} color="#fefefe" />
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-0 right-0 h-screen w-1/3 bg-purple-400 text-white z-40 px-2 py-2 font-Poppins">
          <div
            onClick={() => setIsOpen(false)}
            className="flex justify-end cursor-pointer"
          >
            <IoIosClose color="#fefefe" size={40} />
          </div>
          <div className="flex flex-col justify-end items-end gap-5 mt-4 text-xl">
            {["Home", "Services", "Training", "About us", "Contact us"].map(
              (label, index) => (
                <Link
                  key={index}
                  href={`/${label.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
