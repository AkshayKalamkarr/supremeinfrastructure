'use client'
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NavbarDemo } from './Navbar';
import Link from 'next/link';

const TypewriterEffect = ({ text }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="font-poppins inline-block"
    >
      {text}
    </motion.span>
  );
};

const HeroSection = () => {
  const videoRef = useRef(null);
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

    // Play video on component mount
    playVideo();

    // Handle video autoplay on mobile devices
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('touchstart', playVideo);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('touchstart', playVideo);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        duration: 0.8 
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Video Background */}
        <motion.video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            filter: 'brightness(0.7) contrast(1.1)',
          }}
        >
          <source src="/videos/unwatermark_video-4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Navbar */}
        <NavbarDemo />

        {/* Logo */}
        <motion.div
          className="absolute top-4 left-4 z-10 sm:top-6 sm:left-6 lg:top-8 lg:left-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
        >
          <img 
            src="/images/home/logo.png" 
            alt="Logo" 
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
          />
        </motion.div>

        {/* Content Container */}
        <div className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-7xl mx-auto text-center"
            variants={containerVariants}
          >
            {/* Title */}
            <motion.h1
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 lg:mb-8"
              variants={titleVariants}
            >
              <div className="flex flex-wrap justify-center gap-x-2">
                {title.split(' ').map((word, wordIndex) => (
                  <div key={wordIndex} className="inline-flex">
                    {word.split('').map((char, charIndex) => (
                      <TypewriterEffect 
                        key={`${wordIndex}-${charIndex}`} 
                        text={char} 
                      />
                    ))}
                  </div>
                ))}
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-amber-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto px-4"
              variants={descriptionVariants}
            >
              {description}
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/about/supremeInfrastructure">
                <motion.button
                  className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-amber-700 to-yellow-600 text-white text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 0px 15px rgba(255,255,255,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;