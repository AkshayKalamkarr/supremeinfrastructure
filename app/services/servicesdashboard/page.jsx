'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const portfolioItems = [
  // ... (your existing portfolio items)
  {
    name: "Interior Design",
    images: ['/images/projects/TATA/tata-1.jpg',
      '/images/projects/TATA/tata-2.jpg',
      '/images/projects/TATA/tata-3.jpg',
      '/images/projects/TATA/tata-5.jpg',
      '/images/projects/TATA/tata-7.jpg',
      '/images/projects/TATA/tata-8.jpg',
      '/images/projects/TATA/tata-9.jpg',
      /*  coact interior*/
      '/images/projects/COACT/coact-1.jpg',
      '/images/projects/COACT/coact-2.jpg',
      '/images/projects/COACT/coact-3.jpg',
      /*  coact interior*/
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
      '/images/projects/ATLANTAS/atlantas-20.jpg',
      '/images/projects/ATLANTAS/atlantas-21.jpg',


    ]
  },
  {
    name: "Civil Construction",
    images: ['/services/civil-construction/civil-1.JPG',
      '/services/civil-construction/civil-2.JPG',
      '/services/civil-construction/civil-3.JPG',
      '/services/civil-construction/civil-4.JPG',
      '/services/civil-construction/civil-5.JPG',
      '/services/civil-construction/civil-6.JPG',
      '/services/civil-construction/civil-7.JPG',
      '/services/civil-construction/civil-8.JPG',
    ]
  },
  {
    name: "Architectural Design",
    images: ['/services/architectural-design/architectural-1.JPG',
      '/services/architectural-design/architectural-2.JPG',
      '/services/architectural-design/architectural-3.JPG',

    ]
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
    images: ['/services/horticulture-design/horticulture-1.JPG',
      '/services/horticulture-design/horticulture-2.JPG',
      '/services/horticulture-design/horticulture-3.JPG',
      '/services/horticulture-design/horticulture-4.JPG',
    ]
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
  const scrollContainerRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  const openFullView = (image) => {
    setFullViewImage(image);
  };

  const closeFullView = () => {
    setFullViewImage(null);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop += e.deltaY;
      }
    };

    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800  md:my-24">Supreme Infrastructure Company</h1>
        <h2 className="text-xl font-semibold mb-6 text-center text-gray-600">PORTFOLIO / SERVICES</h2>
        <ul className="space-y-2">
          {portfolioItems.map((item, index) => (
            <li key={index} className="w-full">
              <button
                onClick={() => handleCategoryClick(item)}
                className={`w-full py-3 px-4 transition-all duration-300 ease-in-out text-center md:text-center md:my-4 ${selectedCategory.name === item.name
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
      <main className="flex-1 p-8 md:p-12 flex flex-col">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800 md:my-20">{selectedCategory.name}</h2>

        {/* Scrollable Image Grid */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto pr-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#CBD5E0 #EDF2F7',
          }}
        >
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
              className="absolute top-4 right-4 text-white text-4xl hover:text-red-600 transition-colors md:text-6xl"
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