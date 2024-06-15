import Image from "next/image";
import React from "react";

const projectData = [
  { id: 1, name: "Hamaracafe", image: "/projects/hamaracafe.png" },
  { id: 2, name: "Defencejobs", image: "/projects/defencejob.png" },
  { id: 3, name: "AjayVastralay", image: "/projects/ajay.png" },
  { id: 4, name: "supremesolar", image: "/projects/solar.png" },
];

const Projects = () => {
  return (
    <div className=" w-screen flex flex-col justify-center items-center mt-10 font-Poppins">
      {/* our ongoing projects */}
      <h1 className=" font-semibold text-lg text-[#ed4899] tracking-wider">OUR ONGOING PROJECTS</h1>

      <div className=" mt-7 flex flex-wrap gap-4 justify-center items-center">
        {projectData.map((item) => (
          <div key={item.id}>
            <div>
              <Image
                className=""
                src={item.image}
                alt={item.name}
                width={200}
                height={150}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
