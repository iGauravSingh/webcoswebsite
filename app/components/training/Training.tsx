import Image from "next/image";
import React from "react";

const courseData = [
  { id: 1, image: "/course/dev.jpg", text: "Web Development", desc: "React, Django, Node, Mongodb, Postgresql" },
  { id: 2, image: "/course/mobile.jpg", text: "Mobile Development", desc: "React Native, Flutter, Node, Postgresql" },
  { id: 3, image: "/course/mobile2.jpg", text: "Cloud Master", desc: "AWS Ec2, Route53, cloudfront, IAC, etc" },
  { id: 4, image: "/course/iot.png", text: "IoT Master", desc: "Stm32 ARM cortex, Embedded c, Mqtt, etc" },
];

const Training = () => {
  return (
    <div className=" w-screen flex flex-col justify-center items-center mt-16 font-Poppins">
      <div className=" w-screen md:w-[550px] flex flex-col justify-center items-center overflow-clip">
        <h3 className=" font-medium tracking-wider text-[#ed4899] mb-2">Training courses</h3>
        <span className="inline-block w-10 h-1 bg-purple-500 rounded"></span>
        <h2 className=" font-semibold text-3xl text-slate-950 tracking-wider mt-4">Explore What Do You Want</h2>
        <p className=" text-center text-wrap mt-5 mb-2">
          Embark on a journey of technical mastery with our comprehensive
          courses, specializing in Web Development, Mobile Development, and
          Cloud technologies. Unleash your potential and shape the future of
          digital innovation.
        </p>
        
      </div>

      <div className=" mt-5 flex flex-wrap justify-center gap-4">
        {courseData.map((item) => (
          <div key={item.id} className=" relative group w-[300px] h-[200px]">
            <Image className=" brightness-75" src={item.image} alt={item.text} width={300} height={200} />
            <p className=" group-hover:hidden absolute top-1/2 left-1/2 -translate-x-1/2 z-20 -translate-y-1/2 text-white text-nowrap text-xl">{item.text}</p>
            <div className=" w-full absolute top-1/2 left-1/2 -translate-x-1/2 z-20 -translate-y-1/2 hidden group-hover:block">
            <p className=" text-white text-center text-wrap px-2">{item.desc}</p>
            <div className=" w-full flex justify-center">
            <button className=" bg-purple-500 px-2 py-1 text-white mt-1">Read More</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
