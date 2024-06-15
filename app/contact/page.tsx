import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Image from "next/image";

const page = () => {
  return (
    <>
    <Navbar />
      <div className=" bg-about">
        <div className="grid w-screen grid-cols-1 gap-8 px-8 py-16 mx-auto text-gray-900 bg-white/40 backdrop-blur-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Contact Us
              </h2>
              <p className="mt-1 text-xl text-gray-700 text-semibold">
                We would love to hear from you.
              </p>
            </div>
            <div className="mt-8 text-center">
              
            <Image
            className=" animate-herobounce"
            src="/contactus.png"
            alt="hero image"
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
          />
            </div>
          </div>
          <div>
            <div>
              <span className="text-sm font-bold text-gray-600 uppercase">
                Full Name
              </span>
              <input
                className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="text-sm font-bold text-gray-600 uppercase">
                Email
              </span>
              <input
                className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mt-8">
              <span className="text-sm font-bold text-gray-600 uppercase">
                Message
              </span>
              <textarea className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <button className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-indigo-700 rounded-lg focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
