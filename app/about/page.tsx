import { FaLaptopCode, FaMobileAlt, FaCloud } from "react-icons/fa";

const page = () => {
  return (
    <div className="font-Poppins">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#cd9dfd] to-[#ab77e4] text-white text-center py-16">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          At Webcos, we are passionate about crafting exceptional web and mobile
          applications that empower businesses to thrive in the digital age.
          With expertise across a spectrum of technologies and robust hosting
          solutions, we deliver tailored solutions that meet your unique needs.
        </p>
      </div>

      {/* Content Section */}
      <div className="px-8 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Expertise
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We specialize in leveraging cutting-edge stacks including the MERN,
            MVEN, MEAN stacks, Python Django, Spring Boot, React Native, and
            Flutter for mobile app development. Additionally, we provide
            reliable hosting solutions on AWS and GCP to ensure your
            applications perform optimally under any demand.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <FaLaptopCode className="text-5xl text-blue-500 mb-6" />
              <h4 className="text-xl font-semibold text-gray-800">
                Web Development
              </h4>
              <p className="text-gray-600 text-center mt-4">
                We specialize in building responsive and scalable applications
                using the latest web technologies.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <FaMobileAlt className="text-5xl text-green-500 mb-6" />
              <h4 className="text-xl font-semibold text-gray-800">
                Mobile App Development
              </h4>
              <p className="text-gray-600 text-center mt-4">
                We create high-performance mobile applications using React
                Native, Flutter, and more.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <FaCloud className="text-5xl text-gray-700 mb-6" />
              <h4 className="text-xl font-semibold text-gray-800">
                Cloud Solutions
              </h4>
              <p className="text-gray-600 text-center mt-4">
                We provide reliable cloud hosting solutions on AWS and GCP to
                ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-[#ab77e4] to-[#9a6ce5] text-white py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Our mission is to innovate and collaborate with businesses of all
            sizes, transforming their ideas into impactful digital solutions.
            Whether you are a startup looking to establish your digital presence
            or an enterprise aiming to scale, we are committed to delivering
            solutions that not only meet but exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
