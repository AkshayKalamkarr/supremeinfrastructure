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
    ]
  },
  {
    name: "Civil Construction",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "Architectural Design",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "Cable Trench",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "Industrial Building",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "Horticulture Design",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "Garden Maintenance",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "Building Design",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(portfolioItems[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullViewImage, setFullViewImage] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  const openFullView = (image) => {
    setFullViewImage(image);
  };

  const closeFullView = () => {
    setFullViewImage(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-6 text-center my-20">Supreme Infrastructure Company</h1>
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
            <div 
              key={index} 
              className="relative w-full h-36 sm:h-48 md:h-64 lg:h-80 rounded-sm overflow-hidden cursor-pointer"
              onClick={() => openFullView(image)}
            >
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

      {/* Full View Modal */}
      {fullViewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeFullView}>
          <div className="relative w-full h-full max-w-4xl max-h-4xl">
            <Image
              src={fullViewImage}
              alt="Full view"
              fill={true}
              style={{ objectFit: "contain" }}
            />
            <button 
              className="absolute top-4 right-4 text-red-600 text-8xl"
              onClick={closeFullView}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}