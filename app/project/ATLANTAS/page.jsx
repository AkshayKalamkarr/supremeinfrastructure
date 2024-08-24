'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/projects/ATLANTAS/atlantas-1.jpeg',
  '/images/projects/ATLANTAS/atlantas-2.jpg',
  '/images/projects/ATLANTAS/atlantas-3.jpeg',
  '/images/projects/ATLANTAS/atlantas-4.jpg',
  '/images/projects/ATLANTAS/atlantas-5.jpg',
  '/images/projects/ATLANTAS/atlantas-6.jpg',
  '/images/projects/ATLANTAS/atlantas-7.jpg',
  '/images/projects/ATLANTAS/atlantas-8.jpg',
  '/images/projects/ATLANTAS/atlantas-9.jpg',
  '/images/projects/ATLANTAS/atlantas-10.jpg',
  '/images/projects/ATLANTAS/atlantas-11.jpg',
  '/images/projects/ATLANTAS/atlantas-12.jpg',
  '/images/projects/ATLANTAS/atlantas-13.jpg',
  '/images/projects/ATLANTAS/atlantas-14.jpg',
  '/images/projects/ATLANTAS/atlantas-15.jpg',
  '/images/projects/ATLANTAS/atlantas-16.jpg',
  '/images/projects/ATLANTAS/atlantas-17.jpg',
  '/images/projects/ATLANTAS/atlantas-18.jpg',
  '/images/projects/ATLANTAS/atlantas-19.jpg',
  '/images/projects/ATLANTAS/atlantas-20jpg',
  '/images/projects/ATLANTAS/atlantas-21.jpg',
];

const Atlantas = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="h-[40vh] md:h-[50vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/images/projects/ATLANTAS/bg-background.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-tight px-4"
          >
            <span className="text-blue-400">ATLANTAS PROJECT</span>
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">ATLANTAS</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
              <h2 className="text-xl font-semibold mb-4 text-center">Project information</h2>
              <ul className="space-y-2 text-center">
                <li><span className="font-medium">Client:</span> Atlanats Crew Management</li>
                <li><span className="font-medium">Approx Area:</span> 7500 sqft</li>
                <li><span className="font-medium">Project duration:</span> 120 Days</li>
              </ul>
            </div>

            <div className="space-y-4 text-sm md:text-base">
              <p className="text-gray-700">
                The project Atlantas involved merging 8 offices into 1 single large space. The challenging part was to keep the singularity of all offices like 'FIRE, ELECTRICAL & Washroom pipeline, so that in the near future the offices can be leased out without making much modifications to the present setup. The design was based on the young and vibrant people who were going to work. It had a pantry with all modern facilities. The reception lobby depicted the line of work Atlanta's was doing. The design was done with the latest tools like providing 3D walkways, which showed the client what the office would look like before it could be done.

                The space looks more beautiful with the mood lights, colour combinations of tiles & furniture, max height glass partition and used elements on wall decor from their core field.
              </p>
              <div className="text-gray-700">
                <h3 className='text-black font-bold text-center text-xl md:text-2xl mb-4'>Projects Features:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>100+ Seating at single floor</li>
                  <li>65+ seating for cafeteria</li>
                  <li>14 seater huge Conference room</li>
                  <li>Separate account department</li>
                  <li>Gents & Ladies toilet with Italian tile finish design</li>
                  <li>Main entry with huge branding</li>
                  <li>Colourful Interview room & meeting room</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative h-64 md:h-96 lg:h-[500px]">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`Atlantas Project Image ${currentImageIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full mx-1 ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atlantas;