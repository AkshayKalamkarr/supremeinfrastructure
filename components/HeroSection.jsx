'use client'
import React, { useState, useEffect, useRef } from 'react';
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
  const videoRef = useRef(null);
  const title = "Supreme Infrastructure Company";
  const description = "We are a team of talented, innovative designers, engineers, and horticulturists.";

  useEffect(() => {
    setIsClient(true);

    // Attempt to play the video manually on mobile devices
    const playVideo = () => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Video play failed:", error);
          });
        }
      }
    };

    playVideo();

    window.addEventListener('touchstart', playVideo);
    return () => window.removeEventListener('touchstart', playVideo);
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
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          filter: 'none',
          imageRendering: 'high-quality',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      >
        <source src="/videos/video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <NavbarDemo />

      {/* Repositioned and Enlarged Logo */}
      <motion.div
        className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-4 lg:left-10 z-10"
        initial={{ opacity: 0, y: -50, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      >
        <img src="/images/home/logo.png" alt="Logo" width={120} height={120} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
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
              className="mt-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-600 to-yellow-400 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl ml-0 sm:ml-4 md:ml-14"
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