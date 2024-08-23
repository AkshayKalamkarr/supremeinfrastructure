'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  {
    name: "TATA Power Mulshi IB",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "TATA Power Excellence Centre",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "TATA Power Lonavala IB",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "TATA Power Versova 145 KV",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "TATA Power tata_solar CSPT GF & FF",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "TATA Power Senior Club House, Trombay",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-white">
      <header className="bg-black bg-opacity-50 p-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-8">Supreme Infrastructure Company</h1>
        <h2 className="text-xl md:text-6xl font-semibold md:mt-8">Tata Projects</h2>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <nav className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
            <ul className="space-y-2">
              {portfolioItems.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleCategoryClick(item)}
                    className={`w-full text-left px-4 py-2 rounded transition-colors ${
                      selectedCategory.name === item.name 
                        ? 'bg-yellow-500 text-gray-900 font-bold' 
                        : 'hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4 md:pl-8">
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key={selectedCategory.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-yellow-500">
                  {selectedCategory.name}
                </h2>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedCategory.images.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}