'use client'
import { useState } from 'react';
import Image from 'next/image';

const portfolioItems = [
  {
    name: "Interior Design",
    images: ['/images/portfolio/img-1.jpg',
      '/images/portfolio/img-1.jpg',
      '/images/portfolio/img-1.jpg',
      '/images/portfolio/img-1.jpg',
      '/images/portfolio/img-1.jpg',
      '/images/portfolio/img-1.jpg',
      '/images/portfolio/img-1.jpg',
      '/images/portfolio/img-1.jpg',
      '/images/portfolio/img-1.jpg',
      '/images/portfolio/img-1.jpg',
    /* up to 10 images */]
  },
  {
    name: "Civil Construction",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "Architectural Design",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "Cable Trench",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "Industrial Building",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "Horticulture Design",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "Garden Maintenance",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
  {
    name: "Building Design",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg', /* up to 10 images */]
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(portfolioItems[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Supreme Infrastructure Company</h1>
        <h2 className="text-xl font-semibold mb-4 text-center">PORTFOLIO / SERVICES</h2>
        <ul className="flex flex-wrap md:flex-col justify-center">
          {portfolioItems.map((item, index) => (
            <li key={index} className="w-1/2 md:w-full mb-2 p-2 md:p-6 text-center">
              <button
                onClick={() => handleCategoryClick(item)}
                className={`text-gray-700 hover:text-gray-900 ${selectedCategory.name === item.name ? 'font-bold' : ''
                  }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 md:p-8 text-black">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 md:mt-24 md:mb-6">{selectedCategory.name}</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {selectedCategory.images.map((image, index) => (
            <div key={index} className="relative w-full h-36 sm:h-48 md:h-64 lg:h-80 rounded-sm overflow-hidden">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                fill={true}
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}