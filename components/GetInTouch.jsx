'use client'
import React from 'react';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  return (
    <div className="relative h-3/6 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/home/getinTouch.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white p-6 max-w-2xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let's Get In Touch
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            It would be great to hear from you! If you got any questions, Please do not hesitate to contact us!
            Meet our experts, share your dreams! Reach us with trust, We will leave you with no regrets!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <motion.a 
              href="tel:+918356834380" 
              className="inline-block px-6 py-3 border-2 border-white rounded-md text-lg transition-colors duration-300 hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              +91 8356834380
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;