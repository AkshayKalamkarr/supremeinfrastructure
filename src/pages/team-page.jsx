import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion for animations

const TeamPage = ({ imageSrc, imageAlt, textSide, heading, paragraph }) => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full mx-auto px-4 md:px-6 lg:px-8 mb-8">
      {/* Image */}
      <div className={`w-full md:w-1/2 lg:w-5/12 mb-4 md:mb-0 ${textSide === "left" ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
        <motion.img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-auto rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }} // Scale up image on hover
        />
      </div>

      {/* Text */}
      <div className={`w-full md:w-1/2 lg:w-5/12 px-4 ${textSide === "left" ? "order-1 md:order-2" : "order-2 md:order-1"}`}>
        {/* Heading with animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }} // Initial animation state (hidden above, moved up)
          animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
          transition={{ duration: 0.5 }} // Animation duration
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:text-left"
          whileHover={{ scale: 1.1 }} // Scale up heading on hover
        >
          {heading}
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-800 font-bold"
          whileHover={{ scale: 1.05 }} // Scale up text on hover
        >
          {paragraph}
        </motion.p>
      </div>
    </div>
  );
};

export default TeamPage;
