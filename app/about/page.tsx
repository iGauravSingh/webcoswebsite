import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-about flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white/40 backdrop-blur-md shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Donec finibus turpis nec dui consequat, quis maximus velit fermentum. Vivamus aliquet
          placerat elit, id venenatis lectus. Aliquam vitae eleifend libero.
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Sed vehicula tempor leo, eu finibus lorem tincidunt nec. Nulla facilisi. Nunc
            elementum enim id mi feugiat, vel fringilla felis consectetur.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default page