'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHardHat, FaShoppingCart, FaPencilRuler, FaUserShield, FaCalculator } from 'react-icons/fa';

const CareerPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: null,
        position: '',
    });

    const handleChange = (e) => {
        if (e.target.name === 'resume') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    const jobs = [
        { title: 'Site Engineer', department: 'Engineering', icon: FaHardHat },
        { title: 'Purchase Engineer', department: 'Product', icon: FaShoppingCart },
        { title: 'Interior Designer', department: 'Design', icon: FaPencilRuler },
        { title: 'Admin', department: 'Administration', icon: FaUserShield },
        { title: 'Accountant', department: 'Finance', icon: FaCalculator },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/images/contact/careerBackground.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl font-extrabold text-white text-center leading-tight"
                    >
                        Join Our <span className="text-blue-400">Innovative</span> Team
                    </motion.h1>
                </div>
            </div>

            <main className="container mx-auto px-4 py-20 -mt-20 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-2xl text-center mb-16 mt-8 text-gray-700 max-w-3xl mx-auto"
                >
                    Discover exciting career opportunities and grow with us in a dynamic, innovative environment
                </motion.p>

                <section className="mb-24">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Open Positions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-none p-8 hover:bg-blue-50 transition duration-300 text-center border-2 border-blue-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="text-4xl mb-4"
                                >
                                    <job.icon className="text-blue-600" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">{job.title}</h3>
                                <p className="text-lg text-blue-600 font-semibold">{job.department}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            className="h-full bg-cover bg-center rounded-none overflow-hidden"
                            style={{ backgroundImage: "url('/images/contact/careerBackground-2.jpg')" }}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="h-full bg-black bg-opacity-50 flex items-center justify-center p-8">
                                <motion.h2
                                    className="text-4xl font-bold text-white text-center"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    Be Part of Our Story
                                </motion.h2>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Apply Now</h2>
                        <form onSubmit={handleSubmit} className="bg-white rounded-none p-8 border-2 border-blue-200">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-lg font-semibold text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-none focus:outline-none focus:border-blue-500 transition duration-300"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-lg font-semibold text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-none focus:outline-none focus:border-blue-500 transition duration-300"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="position" className="block mb-2 text-lg font-semibold text-gray-700">Position</label>
                                <select
                                    id="position"
                                    name="position"
                                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-none focus:outline-none focus:border-blue-500 transition duration-300"
                                    required
                                    onChange={handleChange}
                                >
                                    <option value="">Select a position</option>
                                    {jobs.map((job, index) => (
                                        <option key={index} value={job.title}>{job.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-8">
                                <label htmlFor="resume" className="block mb-2 text-lg font-semibold text-gray-700">Upload Resume</label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-none focus:outline-none focus:border-blue-500 transition duration-300"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 rounded-none transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit Application
                            </motion.button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CareerPage;
