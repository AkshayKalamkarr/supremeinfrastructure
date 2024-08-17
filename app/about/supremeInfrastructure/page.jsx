'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaDrawPolygon, FaTree, FaHardHat, FaPaintBrush } from 'react-icons/fa';

const AboutUsPage = () => {
    const services = [
        { icon: <FaBuilding />, title: 'Civil Construction', description: 'Expert construction services for various infrastructure projects.' },
        { icon: <FaDrawPolygon />, title: 'Architecture Design', description: 'Innovative and sustainable architectural solutions for modern needs.' },
        { icon: <FaTree />, title: 'Horticulture & Gardens', description: 'Creating lush, vibrant green spaces in urban environments.' },
        { icon: <FaHardHat />, title: 'Building Projects', description: 'Comprehensive building services from conception to completion.' },
        { icon: <FaPaintBrush />, title: 'Interior Design', description: 'Crafting beautiful and functional interior spaces.' },
    ];

    const stats = [
        { value: '50+', label: 'Projects Completed' },
        { value: '10+', label: 'Years of Experience' },
        { value: '100+', label: 'Happy Clients' },
        { value: '100+', label: 'Awards Won' },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('/images/civil-construction.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white text-center">Building Tomorrow's World Today</h1>
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-16">
                {/* About Us Section */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">About Supreme Infrastructure</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                        Supreme Infrastructure is a leading civil engineering and construction company with over 50 years of experience. 
                        We specialize in delivering high-quality infrastructure projects, innovative architectural designs, and 
                        sustainable urban green spaces. Our commitment to excellence and cutting-edge technology sets us apart in the industry.
                    </p>
                </section>

                {/* Services Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 text-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="text-4xl mb-4 text-blue-600">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="mb-20 bg-blue-600 text-white py-16 rounded-lg">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div 
                                    key={index} 
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-xl">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission and Vision */}
                <section className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div 
                            className="bg-white rounded-lg shadow-lg p-8"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                            <p className="text-gray-600">
                                To deliver innovative and sustainable infrastructure solutions that enhance the quality of life 
                                for communities while maintaining the highest standards of safety, quality, and environmental responsibility.
                            </p>
                        </motion.div>
                        <motion.div 
                            className="bg-white rounded-lg shadow-lg p-8"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the global leader in infrastructure development, recognized for our innovative designs, 
                                sustainable practices, and commitment to shaping a better future for generations to come.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Build Your Dream Project?</h2>
                    <motion.button 
                        className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Us Today
                    </motion.button>
                </section>
            </main>
        </div>
    );
};

export default AboutUsPage;