'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <motion.div 
            className="flex flex-col md:flex-row w-full h-auto bg-white gap-8 p-4 md:p-36"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Left Image */}
            <motion.div
                className="w-full md:w-1/3 h-64 md:h-[600px] relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                <motion.img
                    src="/images/demoimg.jpg"
                    alt="Ae'o Ward Village"
                    className="w-full h-full object-cover"
                    initial={{ filter: "grayscale(100%)" }}
                    whileHover={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 0.5 }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h2 className="text-xl md:text-2xl font-bold">Ae'o Ward Village</h2>
                    <p className="text-sm md:text-base">Honolulu, HI</p>
                </motion.div>
            </motion.div>

            {/* Middle Image */}
            <motion.div
                className="w-full md:w-1/3 h-64 md:h-[600px] relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                <motion.img
                    src="/images/demoimg.jpg"
                    alt="Stadium"
                    className="w-full h-full object-cover"
                    initial={{ filter: "grayscale(100%)" }}
                    whileHover={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 0.5 }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h2 className="text-xl md:text-2xl font-bold">Stadium</h2>
                    <p className="text-sm md:text-base">Location</p>
                </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
                className="w-full md:w-1/3 h-auto flex flex-col"
                variants={itemVariants}
            >
                {/* Top Image */}
                <motion.div
                    className="w-full h-64 md:h-[400px] lg:h-[600px] relative md:w-[500px]"
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <motion.img
                        src="/images/demoimg.jpg"
                        alt="Modern Building"
                        className="w-full h-full object-cover"
                        initial={{ filter: "grayscale(100%)" }}
                        whileHover={{ filter: "grayscale(0%)" }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2 className="text-xl md:text-2xl font-bold">Modern Building</h2>
                        <p className="text-sm md:text-base">Location</p>
                    </motion.div>
                </motion.div>
                {/* Text Content */}
                <motion.div
                    className="w-full h-auto p-6 flex flex-col justify-center text-right mt-4 md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
                >
                    <motion.h2
                        className="text-xl md:text-3xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        whileHover={{ scale: 1.05, color: "#1d4ed8" }}
                    >
                        A portfolio with purpose.
                    </motion.h2>
                    <motion.a
                        href="#"
                        className="text-blue-600 flex items-center justify-end"
                        whileHover={{ x: 10, color: "#2563eb" }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        SEE MORE
                        <motion.svg 
                            className="w-4 h-4 ml-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Portfolio;