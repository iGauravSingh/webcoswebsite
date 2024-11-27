import Link from "next/link";
import React from "react";
import { FaFileCode } from "react-icons/fa";

const TrainingBanner = () => {
  return (
    <div className=" w-full h-[500px] bg-train bg-cover bg-center bg-fixed mt-8 flex justify-start items-center font-Poppins">
      <div className=" flex flex-col gap-5 pl-20">
        <p className=" text-md font-bold text-white tracking-wide">
          EDUCATION BENIFITS
        </p>
        <div className=" text-white font-semibold tracking-wider text-4xl flex flex-col">
          <h1>Limitless Learning And </h1>
          <h1>Get More Possibilities</h1>
        </div>
        <div>
          <p className=" text-white font-md tracking-wide ">
            Our focus on quality education at every stage ensures
          </p>
          <p className="text-white font-md tracking-wide">
            {" "}
            100% success of our students that have a road-map.
          </p>
        </div>
        <Link href="/training">
          <button className="relative inline-block text-lg group w-[150px]">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Learn More</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainingBanner;
