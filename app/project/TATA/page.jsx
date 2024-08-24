'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  // ... (your portfolio items remain unchanged)
  {
    name: "TATA Power Mulshi IB",
    images: [
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
    ]
  },
  {
    name: "TATA Power Excellence Centre",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "TATA Power Lonavala IB",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "TATA Power Versova 145 KV",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "TATA Power tata_solar CSPT GF & FF",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "TATA Power Senior Club House, Trombay",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },

];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(portfolioItems[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleCategoryClick = (category) => {
    setIsOpen(false);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsOpen(true);
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-white font-sans"
    >
      <div className="h-[50vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/images/contact/careerBackground.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold text-white text-center leading-tight"
          >
           <span className="text-blue-400">TATA PROJECTS</span> 
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="lg:w-1/4 mb-8 lg:mb-0 md:my-16"
        >
          <nav className="bg-gray-800 bg-opacity-90 rounded-lg p-4 sticky top-8">
            <ul className="space-y-2">
              {portfolioItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleCategoryClick(item)}
                    className={`w-full text-left px-4 py-2 rounded transition-colors ${selectedCategory.name === item.name
                      ? 'bg-yellow-500 text-gray-900 font-bold'
                      : 'hover:bg-gray-700 text-white'
                      }`}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main className="lg:w-3/4 lg:pl-8">
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key={selectedCategory.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 md:mx-44 relative inline-block"
                >
                  {selectedCategory.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </motion.h2>

                {/* Image Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {selectedCategory.images.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        fill={true}
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </motion.div>
  );
}