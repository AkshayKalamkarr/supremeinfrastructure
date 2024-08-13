'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavbarDemo } from './Navbar';

const TypewriterEffect = ({ text, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
    >
      {text}
    </motion.span>
  );
};

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  const title = "Supreme Infrastructure";
  const description = "We are team of talented, innovative designers, Engineers and horticulturist";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <NavbarDemo/>

      {/* Logo Positioning */}
      <motion.div
        className="absolute top-4 left-4 md:top-4 md:left-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/images/logo.png" alt="Logo" className="h-16 md:h-24" />
      </motion.div>


      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-start justify-center p-4 sm:p-8 md:p-12 lg:p-16">
        <motion.h2
          className="text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-6xl md:ml-14 font-extrabold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isClient && title.split('').map((char, index) => (
            <TypewriterEffect key={index} text={char} delay={index * 0.1} />
          ))}
        </motion.h2>
        <motion.div
          className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col md:ml-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {description}
        </motion.div>
        <motion.button
          className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 text-sm sm:text-xl md:ml-64"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
