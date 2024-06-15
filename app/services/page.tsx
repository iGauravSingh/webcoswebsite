import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <section className=" w-screen h-screen py-16 bg-about font-Poppins">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-9 font-bold text-gray-900 mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white/20 backdrop-blur-md shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Web Development
            </h3>
            <p className="text-white leading-relaxed">
              We create responsive, user-friendly websites using the latest technologies
              and frameworks tailored to your business needs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white/20 backdrop-blur-md shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Mobile App Development
            </h3>
            <p className="text-white leading-relaxed">
              We build native and hybrid mobile applications for iOS and Android
              platforms, ensuring high performance and scalability.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white/20 backdrop-blur-md shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              UI/UX Design
            </h3>
            <p className="text-white leading-relaxed">
              Our design team crafts intuitive and visually appealing interfaces
              that enhance user experience and engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default page