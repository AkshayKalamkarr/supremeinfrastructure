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
        <div className="min-h-screen bg-cover bg-center text-white" style={{backgroundImage: "url('/images/contactBackground.jpg')"}}>
            <div className="min-h-screen bg-black bg-opacity-50"> {/* Overlay for better text readability */}
                <header className="py-36 text-center">
                    <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
                    <p className="text-xl">Discover exciting career opportunities and grow with us</p>
                </header>

                <main className="container mx-auto px-4 py-20">
                    <section className="mb-20">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Open Positions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 hover:shadow-lg transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                                    <p className="text-sm opacity-80">{job.department}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* <section className="mb-20">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Why Join Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {['Innovative Environment', 'Professional Growth', 'Work-Life Balance'].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <div className="bg-white text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fas fa-star text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
                                    <p className="text-sm opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </motion.div>
                            ))}
                        </div>
                    </section> */}

                    <section>
                        <h2 className="text-3xl font-semibold mb-8 text-center">Apply Now</h2>
                        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="position" className="block mb-2 text-sm font-medium">Position</label>
                                <select
                                    id="position"
                                    name="position"
                                    className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
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
                                <label htmlFor="resume" className="block mb-2 text-sm font-medium">Upload Resume</label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit Application
                            </motion.button>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default CareerPage;