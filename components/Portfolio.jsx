'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
            className="flex flex-col lg:flex-row w-full h-auto bg-gray-200 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Left Image */}
            <motion.div
                className="w-full lg:w-1/3 h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[450px] relative md:mt-10"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                <Image
                    src="/images/demoimg.jpg"
                    alt="Ae'o Ward Village"
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500 hover:filter-none"
                    style={{ filter: 'grayscale(100%)' }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 p-3 sm:p-4 text-white bg-black bg-opacity-50 w-full md:mt-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Ae'o Ward Village</h2>
                    <p className="text-xs sm:text-sm lg:text-base">Honolulu, HI</p>
                </motion.div>
            </motion.div>

            {/* Middle Image */}
            <motion.div
                className="w-full lg:w-1/3 h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[450px] relative md:mt-10"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                <Image
                    src="/images/demoimg.jpg"
                    alt="Stadium"
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500 hover:filter-none"
                    style={{ filter: 'grayscale(100%)' }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 p-3 sm:p-4 text-white bg-black bg-opacity-50 w-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Stadium</h2>
                    <p className="text-xs sm:text-sm lg:text-base">Location</p>
                </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
                className="w-full lg:w-1/3 h-auto flex flex-col"
                variants={itemVariants}
            >
                {/* Top Image */}
                <motion.div
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[450px] relative md:mt-10"
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <Image
                        src="/images/demoimg.jpg"
                        alt="Modern Building"
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-500 hover:filter-none"
                        style={{ filter: 'grayscale(100%)' }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 p-3 sm:p-4 text-white bg-black bg-opacity-50 w-full"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Modern Building</h2>
                        <p className="text-xs sm:text-sm lg:text-base">Location</p>
                    </motion.div>
                </motion.div>
                {/* Text Content */}
                <motion.div
                    className="w-full h-auto p-4 sm:p-6 flex flex-col justify-center text-right mt-4 lg:mt-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
                >
                    <motion.h2
                        className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        whileHover={{ scale: 1.05, color: "#1d4ed8" }}
                    >
                        A portfolio with purpose.
                    </motion.h2>
                    <motion.a
                        href="#"
                        className="text-blue-600 flex items-center justify-end text-sm sm:text-base"
                    // whileHover={{ x: 10, color: "#2563eb" }}
                    // transition={{ type: "spring", stiffness: 300, damping: 10 }}
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