import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div>
      <section className="relative py-16 bg-white min-w-screen animation-fade animation-delay">
        <div className="container px-10 mx-auto sm:px-5">
          <div className="w-full lg:flex">
            <div className="w-full lg:w-1/2 xl:w-2/3">
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                <Image
                  src="/webcos.png"
                  alt="image1"
                  width={258}
                  height={258}
                />
                <Image
                  src="/webcos.png"
                  alt="image1"
                  width={258}
                  height={258}
                />
                <Image
                  src="/webcos.png"
                  alt="image1"
                  width={258}
                  height={258}
                />
                <Image
                  src="/webcos.png"
                  alt="image1"
                  width={258}
                  height={258}
                />
                <Image
                  src="/webcos.png"
                  alt="image1"
                  width={258}
                  height={258}
                />
                <Image
                  src="/webcos.png"
                  alt="image1"
                  width={258}
                  height={258}
                />
              </div>
            </div>
            <div className="w-full mt-10 ml-0 lg:mt-0 lg:flex-1 lg:w-1/2 xl:w-1/3 lg:ml-10">
              <div className="px-20 py-10 text-white bg-logoblack lg:h-full">
                <div className="mt-10 mb-5 text-2xl">Some of our finest work.</div>
                <p className="leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="mt-10">
                  <a
                    className="flex text-green-500 hover:text-green-800"
                    href="#"
                  >
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
