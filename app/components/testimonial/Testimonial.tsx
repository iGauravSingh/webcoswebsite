"use client";
import React, { useEffect, useState } from "react";

const testimonialData = [
  {
    id: 1,
    name: "Kush",
    post: "Hamaracafe",
    testi:
      "Webcos transformed our online presence. Their web and mobile solutions are unparalleled. The team was a delight to work with, ensuring our needs were met. Highly recommend them for top-notch development",
  },
  {
    id: 2,
    name: "Kush",
    post: "Defensejobs",
    testi:
      "Webcos was a game-changer for our business. Their team turned our ideas into a stunning reality. Professional, communicative, and dedicated throughout. Couldn't be happier with the outcome.",
  },
  {
    id: 3,
    name: "Suresh",
    post: "Supreme Solar",
    testi:
      "Excellence delivered by Webcos. Their attention to detail and commitment to quality shine through. Transparent communication and proactive approach made collaboration seamless. Highly recommend for reliable development services.",
  },
];

let ing = 0

const Testimonial = () => {
  const [selected, setSelected] = useState(testimonialData[0]);

  const changeSelected = (index: number) => {
    setSelected(testimonialData[index])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected(testimonialData[ing % 3]);
      ing++;
    }, 4000);
  
    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once
  return (
    <>
    <section className=" h-[450px] text-gray-600 body-font font-Poppins mt-11">
      <div className=" flex flex-col items-center gap-5">
        <h1 className=" text-lg font-semibold text-[#ed4899]">
          OUR CUSTOMERS LOVE OUR PRODUCT
        </h1>
        <h2 className=" text-4xl text-slate-900 font-bold">Testimonials</h2>
      </div>
      <div className="container px-5 py-4 mx-auto">
        <div className="w-full mx-auto text-center xl:w-1/2 lg:w-3/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 mb-8 text-gray-400"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className=" text-base leading-relaxed">
            {selected.testi}
          </p>
          <span className="inline-block w-10 h-1 mt-8 mb-6 bg-purple-500 rounded"></span>
          <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font uppercase">
          {selected.name}
          </h2>
          <p className="text-gray-500">{selected.post}</p>
        </div>
      </div>

      
    </section>
    <div className=" flex justify-center items-center gap-2 ">
        <div onClick={()=> changeSelected(0)} className=" w-3 h-3 bg-slate-400 rounded-full cursor-pointer"></div>
        <div onClick={()=> changeSelected(1)} className=" w-3 h-3 bg-slate-400 rounded-full cursor-pointer"></div>
        <div onClick={()=> changeSelected(2)} className=" w-3 h-3 bg-slate-400 rounded-full cursor-pointer"></div>
      </div>
    </>
  );
};

export default Testimonial;
