import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-about flex items-center justify-center font-Poppins">
      <div className="max-w-4xl mx-auto p-8 bg-white/40 backdrop-blur-md shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          At Webcos, we are passionate about crafting exceptional web and mobile applications that empower businesses to thrive in the digital age. With expertise across a spectrum of technologies and robust hosting solutions, we deliver tailored solutions that meet your unique needs.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We specialize in leveraging cutting-edge stacks including the MERN, MVEN, MEAN stacks, Python Django, Spring Boot, React Native, and Flutter for mobile app development. Additionally, we provide reliable hosting solutions on AWS and GCP to ensure your applications perform optimally under any demand.
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to innovate and collaborate with businesses of all sizes, transforming their ideas into impactful digital solutions. Whether you're a startup looking to establish your digital presence or an enterprise aiming to scale, we are committed to delivering solutions that not only meet but exceed your expectations.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            <span>Contact no: 9651114762</span>
            <p></p>
            <span>Email: ayushjaiswal@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default page