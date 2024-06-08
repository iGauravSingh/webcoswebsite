"use client";
import Image from "next/image";
import React, { useState } from "react";

import { IoMdMenu } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" w-screen flex items-center justify-between bg-logowhite text-white py-2 px-12">
      {/* logo  */}
      <div className=" ">
        <Image src="/webcos.png" alt=" webcos logo" width={80} height={80} />
      </div>
      {/* menu for large  */}
      <div className=" hidden md:flex gap-8 text-logoblack ">
        <p>Home</p>
        <p>About us</p>
        <p>Contact us</p>
      </div>

      {/* burger for small  */}

      <div className=" md:hidden">
        <IoMdMenu size={35} color="#222627" />
      </div>
    </nav>
  );
};

export default Navbar;
