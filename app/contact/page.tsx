import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="">
        <div className="grid w-full grid-cols-1 gap-8 px-8 py-16 mx-auto text-gray-900 bg-white/40 backdrop-blur-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
          <div className="flex flex-col justify-between">
            <div className="mt-8 text-center">
              <Image
                className="animate-herobounce h-[600px] w-[600px]"
                src="/contactus.png"
                alt="contact image"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Contact Us
              </h2>
              <p className="mt-1 text-lg text-gray-700">
                We would love to hear from you.
              </p>
            </div>
            <div>
              <span className="text-sm font-bold text-gray-600 uppercase">
                Full Name
              </span>
              <input
                className="w-full p-3 mt-2 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="text-sm font-bold text-gray-600 uppercase">
                Email
              </span>
              <input
                className="w-full p-3 mt-2 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mt-8">
              <span className="text-sm font-bold text-gray-600 uppercase">
                Message
              </span>
              <textarea className="w-full h-32 p-3 mt-2 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-purple-500 rounded-lg hover:bg-purple-700 focus:shadow-outline focus:outline-none">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
