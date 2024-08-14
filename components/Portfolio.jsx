'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-auto bg-white gap-8 p-4 md:p-36">
            {/* Left Image */}
            <motion.div
                className="w-full md:w-1/3 h-64 md:h-[600px] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                <motion.img
                    src="/images/demoimg.jpg"
                    alt="Ae'o Ward Village"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
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
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                <motion.img
                    src="/images/demoimg.jpg"
                    alt="Stadium"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
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
            <div className="w-full md:w-1/3 h-auto flex flex-col">
                {/* Top Image */}
                <motion.div
                    className="w-full h-64 md:h-[400px] lg:h-[600px] relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <motion.img
                        src="/images/demoimg.jpg"
                        alt="Modern Building"
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
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
                    className="w-full h-auto p-6 flex flex-col justify-center bg-white text-right mt-4 md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-3xl font-bold mb-4">A portfolio with purpose.</h2>
                    <motion.a
                        href="#"
                        className="text-blue-600 flex items-center justify-end"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        SEE MORE
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;
