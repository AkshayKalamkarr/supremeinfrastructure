import React from 'react';
import Image from 'next/image';

const services = [
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
        image: '/images/services/cable-trench.png',
    },
    {
        title: 'INDUSTRIAL BUILDING',
        description: 'We have been associated with many corporates, who are related in the EV & Solar Businesses.',
        image: '/images/services/industrial-building.png',
    },
    {
        title: 'HORTICULTURE DESIGN',
        description: 'Worked in many prestigious projects like the Urban Jungle By Panvel Municipal Corporation under the GOI Funded Urban Forest theme.',
        image: '/images/services/horticulture-design.png',
    },
    {
        title: 'GARDEN MAINTENANCE',
        description: 'Development and decorative planting of gardens, yards, grounds, parks, and other types of areas.',
        image: '/images/services/garden-maintenance.png',
    },
    {
        title: 'BUILDING DESIGN',
        description: 'We use technology with ideas to create design which are sustainable in any environment.',
        image: '/images/services/building-design.png',
    },
];

const ServicesGrid = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4">
                                <div className="w-20 h-20 mx-auto mb-4">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={80}
                                        height={80}
                                        layout="responsive"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-center mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600 text-center">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;