"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="my-16 relative grid place-items-center h-[800px]">
      <div className="absolute z-10 opacity-70 top-0 left-0 w-full h-full bg-[url(/hero_bg.png)] bg-[0%_100%] bg-repeat-x"></div>
      <div className="relative z-20 container mx-auto px-8 flex gap-8 items-center">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Build stunning websites & apps.
          </h1>
          <p className="text-base lg:text-lg mt-4 font-normal">
            Create live segments and target the right people for messages based
            on their behaviors.
          </p>
          <p className="mt-6 md:mt-8">
            <button
              type="button"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-purple-500 rounded-lg hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              About us
            </button>
          </p>
        </div>
        <div className="flex-1">
          <Image
            alt="webcos"
            src={"/web_hero.svg"}
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
