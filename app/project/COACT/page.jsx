'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/projects/TATA/tata-1.jpg',
  '/images/projects/TATA/tata-2.jpg',
  '/images/projects/TATA/tata-3.jpg',
  '/images/projects/TATA/tata-4.jpg',
  '/images/projects/TATA/tata-5.jpg',
  '/images/projects/TATA/tata-6.jpg',
  '/images/projects/TATA/tata-7.jpg',
  '/images/projects/TATA/tata-8.jpg',
  '/images/projects/TATA/tata-9.jpg',
  '/images/projects/TATA/tata-10.jpg',
  // Add more image paths as needed
];

const Coact = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 md:my-24">TATA Power Mulshi IB</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Project information</h2>
            <ul className="space-y-2">
              <li><span className="font-medium">Client:</span> TATA Power</li>
              <li><span className="font-medium">Approx Area:</span> 1500 sqft</li>
              <li><span className="font-medium">Project duration:</span> 135 Days</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              Mulshi IB, situated about 40 km from Pune, is a storage dam for
              Bhira hydro power station of Tata Power Company Limited. The
              Bungalow is located near dam and dam constructed across the
              rivers Mula & Nila near village Mulshi during the years 1921-26 is
              a gravity dam constructed in rubble masonry.
            </p>
            <p className="text-gray-700">
              We have renovated the Mulshi IB with new design and concepts
              IN Year 2018-19. By keeping Bungalow's vintage look in mind we
              have design this beautiful stone structure from scarp.
            </p>
            <p className="text-gray-700">
              This is Tata power's oldest property among all. Bungalow home
              plans share a common style with Craftsman, Rustic and Cottage
              home designs. A great porch for your rocker, typically one level
              and over-hanging eaves are some of the classic features.
            </p>
          </div>
        </div>

        <div className="relative h-96 md:h-full">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`Tata Power Mulshi IB ${currentImageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Coact;