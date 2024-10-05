'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { NavbarDemo } from './Navbar';
import Link from 'next/link';

const TypewriterEffect = ({ text, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="font-poppins inline-block"
    >
      {text}
    </motion.span>
  );
};

const HeroSection = () => {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const title = "Supreme Infrastructure Company";
  const description = "We are a team of Talented, Innovative Designers, Engineers, and Horticulturists.";

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
        });
      }
    };

    playVideo();
    window.addEventListener('touchstart', playVideo);
    controls.start("visible");
    return () => window.removeEventListener('touchstart', playVideo);
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 10 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 1.5 } },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(255,255,255,0.5)",
      transition: {
        yoyo: Infinity,
        duration: 0.5
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden"
      initial="hidden"
      animate={controls}
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
          filter: 'brightness(1.2) contrast(1.1) saturate(1.05)',
          WebkitFilter: 'brightness(1.2) contrast(1.1) saturate(1.05)'
        }}
      >
        <source src="/videos/video-4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <NavbarDemo />

      <motion.div
        className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-4 lg:left-10 z-10 md:mx-24"
        variants={logoVariants}
      >
        <img src="/images/home/logo.png" alt="Logo" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-start justify-center p-4 sm:p-8 md:p-12 lg:p-16"
        variants={containerVariants}
      >
        <motion.h2
          className="font-montserrat text-gray-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold mb-4 ml-0 sm:ml-4 md:ml-8 lg:ml-14 text-shadow-lg"
          variants={itemVariants}
        >
          {title.split('').map((char, index) => (
            <TypewriterEffect key={index} text={char} delay={index * 0.05} />
          ))}
        </motion.h2>
        <motion.div
          className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl flex flex-col ml-0 sm:ml-4 md:ml-8 lg:ml-14 text-shadow"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 0.5 }}
        >
          {description}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link href='/about/supremeInfrastructure'>
            <motion.button
              className="mt-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold rounded-full transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl ml-0 sm:ml-4 md:ml-14 shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
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