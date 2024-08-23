'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarDemo } from './Navbar';
import Link from 'next/link';

// Typewriter effect for text
const TypewriterEffect = ({ text, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      {text}
    </motion.span>
  );
};

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  const title = "Supreme Infrastructure Company";
  const description = "We are a team of talented, innovative designers, engineers, and horticulturists.";

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="relative w-full h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <source src="/videos/video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <NavbarDemo />

      {/* Repositioned and Enlarged Logo */}
      <motion.div
        className="absolute top-2 md:mx-24 left-12 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-4 lg:right-10 filter brightness-900"
        initial={{ opacity: 0, y: -50, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      >
        <img src="/images/home/logo.png" alt="Logo" className="h-24 sm:h-28 md:h-32 lg:h-40" />
      </motion.div>

      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-start justify-center p-4 sm:p-8 md:p-12 lg:p-16"
        variants={containerVariants}
      >
        <motion.h2
          className="text-gray-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold mb-4 ml-0 sm:ml-4 md:ml-8 lg:ml-14"
          variants={itemVariants}
        >
          <AnimatePresence>
            {isClient && title.split('').map((char, index) => (
              <TypewriterEffect key={index} text={char} delay={index * 0.05} />
            ))}
          </AnimatePresence>
        </motion.h2>
        <motion.div
          className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl flex flex-col ml-0 sm:ml-4 md:ml-8 lg:ml-14"
          variants={itemVariants}
        >
          {description}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link href='/about/supremeInfrastructure'>
            <motion.button
              className="mt-6 px-4 sm:px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl ml-0 sm:ml-4 md:ml-8 lg:ml-14"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;