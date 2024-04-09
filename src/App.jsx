import { useState } from 'react';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import './App.css'

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Desc from './components/Desc';
import About from './components/About';
import Skills from './components/Skills';

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <Desc />
      <About />
      <Skills />
    </>
    // <div className="landing-page bg-gray-100 h-screen flex flex-col justify-center items-center relative overflow-hidden">
    //   <motion.div
    //     // src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNjQtMzYta3ZjNHNieHcuanBn.jpg"
    //     alt="Background Image"
    //     initial={{ opacity: 0, scale: 1.5 }} // Initial opacity set to 0, and scale set to 1.5 (enlarged)
    //     animate={{ opacity: 1, scale: [1.5, 1] }} // Final opacity set to 1, and scale animates from 1.5 to 1
    //     transition={{ delay: 0, duration: 1.4 }} // Optional: Add delay and duration
    //     className="bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNjQtMzYta3ZjNHNieHcuanBn.jpg')] bg-no-repeat absolute inset-0 w-80 object-cover z-0"
    //   // style={{ width: '70%', maxWidth: '70%', height: 'auto' }} // Set image size to 70% of the viewport width
    //   />

    //   <motion.nav
    //     initial={{ y: -100 }} // Initial position above the viewport
    //     animate={{ y: 0 }} // Final position at the top of the viewport
    //     transition={{ delay: 1, duration: 1.5 }}
    //     className="navbar fixed top-0 w-full bg-white shadow-md p-4 z-10"
    //   >
    //     {/* Your navigation links */}
    //     <ul className="flex justify-center">
    //       <li className="mx-4"><a href="#">Home</a></li>
    //       <li className="mx-4"><a href="#">About</a></li>
    //       <li className="mx-4"><a href="#">Portfolio</a></li>
    //       <li className="mx-4"><a href="#">Contact</a></li>
    //     </ul>
    //   </motion.nav>

    //   <motion.div
    //     initial={{ opacity: 0, y: -50 }} // Initial opacity and position above the viewport
    //     animate={{ opacity: 1, y: 0 }} // Final opacity and position at the center of the viewport
    //     transition={{ delay: 1, duration: 1.5 }}
    //     className="landing-text text-center relative z-10"
    //   >
    //     <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
    //     {/* Other text content */}
    //   </motion.div>
    // </div>
  )
}

export default App
