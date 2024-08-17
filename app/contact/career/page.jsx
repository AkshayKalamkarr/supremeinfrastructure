'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        { title: 'Site Engineer', department: 'Engineering' },
        { title: 'Purchase Manager', department: 'Product' },
        { title: 'Interior Designer', department: 'Design' },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="h-96 bg-conatin bg-center relative" style={{ backgroundImage: "url('/images/careerBackground.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    {/* <h1 className="text-5xl font-bold text-white">Join Our Team</h1> */}
                </div>
            </div>

            <main className="container mx-auto px-4 py-20">
            <h1 className="text-5xl font-bold text-center text-black">Join Our Team</h1>
                <p className="text-xl text-center mb-12 mt-8 text-gray-700">Discover exciting career opportunities and grow with us</p>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Open Positions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{job.title}</h3>
                                <p className="text-sm text-gray-600">{job.department}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Apply Now</h2>
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8">
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-700">Position</label>
                            <select
                                id="position"
                                name="position"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                onChange={handleChange}
                            >
                                <option value="">Select a position</option>
                                {jobs.map((job, index) => (
                                    <option key={index} value={job.title}>{job.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-700">Upload Resume</label>
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit Application
                        </motion.button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default CareerPage;