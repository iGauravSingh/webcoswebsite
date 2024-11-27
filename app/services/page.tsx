import React from "react";
import {
  MdDesignServices,
  MdMobileFriendly,
  MdOutlineWeb,
} from "react-icons/md";

const services = [
  {
    id: 1,
    icon: <MdOutlineWeb className="w-8 h-8 text-blue-500" />,
    title: "Web Development",
    description:
      "We create responsive, user-friendly websites using the latest technologies.",
    bgColor: "#E0F2FF",
  },
  {
    id: 2,
    icon: <MdMobileFriendly className="w-8 h-8 text-green-500" />,
    title: "Mobile App Development",
    description:
      "We build native and hybrid mobile apps for iOS and Android platforms.",
    bgColor: "#E8F5E9",
  },
  {
    id: 3,
    icon: <MdDesignServices className="w-8 h-8 text-pink-500" />,
    title: "UI/UX Design",
    description:
      "Our design team crafts intuitive and visually appealing interfaces.",
    bgColor: "#FCE4EC",
  },
];

const page = () => {
  return (
    <>
      <section className="w-full py-16 font-Poppins">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl leading-9 font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full mb-4`}
                    style={{
                      backgroundColor: service.bgColor || "#f3f4f6", // Default light gray if no bgColor provided
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="border-t border-gray-100 p-4 text-right">
                  <button className="text-blue-500 font-semibold hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
