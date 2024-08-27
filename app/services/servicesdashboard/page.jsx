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
  const [fullViewImage, setFullViewImage] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const openFullView = (image) => {
    setFullViewImage(image);
  };

  const closeFullView = () => {
    setFullViewImage(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Supreme Infrastructure Company</h1>
        <h2 className="text-xl font-semibold mb-6 text-center text-gray-600">PORTFOLIO / SERVICES</h2>
        <ul className="space-y-2">
          {portfolioItems.map((item, index) => (
            <li key={index} className="w-full">
              <button
                onClick={() => handleCategoryClick(item)}
                className={`w-full py-3 px-4 text-left transition-all duration-300 ease-in-out md:text-center md:my-4 ${selectedCategory.name === item.name
                    ? 'bg-gray-200 text-gray-800 font-bold'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800 md:my-28">{selectedCategory.name}</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {selectedCategory.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openFullView(image)}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Full View Modal */}
      {fullViewImage && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50" onClick={closeFullView}>
          <div className="relative w-full h-full max-w-5xl max-h-5xl p-4">
            <Image
              src={fullViewImage}
              alt="Full view"
              fill={true}
              style={{ objectFit: "contain" }}
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
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