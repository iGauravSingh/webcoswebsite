import React from "react";

const Testing = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 h-screen">
      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,74.7C672,96,768,128,864,122.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold">
          Hero Section
        </h1>
      </div>
    </div>
  );
};

export default Testing;
