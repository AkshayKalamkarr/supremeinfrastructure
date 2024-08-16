'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
    // ... (services array remains unchanged)
    {
        title: 'INTERIOR DESIGN',
        description: 'Using latest technology to make efficient use of spaces. Better designing concepts.',
        image: '/images/services/interior.jpeg',
    },
    {
        title: 'CIVIL CONSTRUCTION',
        description: 'Using the latest technology and machines we create buildings which are economical yet safe.',
        image: '/images/services/civil.jpg',
    },
    {
        title: 'ARCHITECTURAL DESIGN',
        description: 'We work on the latest trends as per the markets for developing an economical and budget friendly options to our clients.',
        image: '/images/services/architecture.jpg',
    },
    {
        title: 'CABLE TRENCH',
        description: 'A method of laying cables into the ground by digging trenches. It is also known as underground cabling.',
        image: '/images/services/cabletrench.jpg',
    },
    {
        title: 'INDUSTRIAL BUILDING',
        description: 'We have been associated with many corporates, who are related in the EV & Solar Businesses.',
        image: '/images/services/industrial-building.jpg',
    },
    {
        title: 'HORTICULTURE DESIGN',
        description: 'Worked in many prestigious projects like the Urban Jungle By Panvel Municipal Corporation under the GOI Funded Urban Forest theme.',
        image: '/images/services/horticulture-design.jpg',
    },
    {
        title: 'GARDEN MAINTENANCE',
        description: 'Development and decorative planting of gardens, yards, grounds, parks, and other types of areas.',
        image: '/images/services/garden-maintenance.jpg',
    },
    {
        title: 'BUILDING DESIGN',
        description: 'We use technology with ideas to create design which are sustainable in any environment.',
        image: '/images/services/building-design.jpg',
    },
];

const ServicesGrid = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative h-64">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 transform hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                                <p className="text-sm text-gray-600 text-center">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;