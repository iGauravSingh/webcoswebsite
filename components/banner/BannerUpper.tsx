import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerUpper = () => {
  return (
    <div>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full-xl md:px-24 lg:px-8 lg:py-16">
        <div className="flex flex-col max-w-full-lg overflow-hidden bg-white border rounded-lg shadow-xl lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <Image
              src="/banner/banneruper.jpg"
              alt="uper banner"
              className="object-cover w-full lg:absolute h-80 lg:h-full"
              height={320}
              width={400}
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block stroke-white"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-600 uppercase bg-purple-200 rounded-full">
                Craft and build
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              Your Next Great Idea
            </h5>
            <p className="py-5 mb-5 text-gray-800">
              <span className="font-bold">Our Platform</span> will help you
              craft and build your next idea. Utilize our experts team to see
              your imagination in to reality.
            </p>
            <div className="flex items-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-purple-500 rounded-lg hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerUpper;
