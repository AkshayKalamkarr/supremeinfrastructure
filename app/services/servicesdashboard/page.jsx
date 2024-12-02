'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const portfolioItems = [
  {
    name: "Interior Design",
    images: [
      /// ATLANTAS
      '/images/projects/ATLANTAS/atlantas-7.jpg',
      '/images/projects/ATLANTAS/atlantas-18.jpg',
      '/images/projects/ATLANTAS/atlantas-5.jpg',

      /// PROCURMENT OFFICE OF TATA POWER SOLAR
      '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-5.jpg',
      '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-6.jpg',
      '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-21.jpg',
      '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-22.jpg',
      '/images/projects/TATAPOWERSOLARPROCUREMENTOFFICEBANGOLARE/tataBanglore-34.jpg',

      /// CIVIL AND ESTATE OFFICE OF TATA POWER TROMBAY
      '/images/projects/TATAPOWERCIVILTROMBAY/trombay-7.jpeg',

      /// TATA POWER SOLAR CIVIL OFFICE AND BREAK OUT AREA , BANGOLARE
      '/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-3.jpg',
      '/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-9.jpg',
      '/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-19.jpg',
      '/images/projects/TATAPOWERSOLARCIVILOFFICEANDBRICKOUTAREABANGOLARE/tataBanglore-22.jpg',

      ///  ADMIN AND HR OFFICE OF TATA POWER SOLAR AT BANGALORE
      '/images/projects/TPSSLBANGOLARE/tpsslBanglore-4.jpg',
      '/images/projects/TPSSLBANGOLARE/tpsslBanglore-7.jpg',
      '/images/projects/TPSSLBANGOLARE/tpsslBanglore-11.jpg',
      '/images/projects/TPSSLBANGOLARE/tpsslBanglore-17.jpg',

      /// SUPREME INFRASTRUCTURE HEAD OFFICE AT MAYURESH PLANET BELAPUR
      '/images/projects/MAYURESHPLANET/mayuresh-1.jpg',
      '/images/projects/MAYURESHPLANET/mayuresh-3.jpg',
      '/images/projects/MAYURESHPLANET/mayuresh-6.jpg',
      '/images/projects/MAYURESHPLANET/mayuresh-7.jpg',


      /// COACT
      '/images/projects/COACT/coact-1.jpg',
      '/images/projects/COACT/coact-11.jpg',
      '/images/projects/COACT/coact-14.jpg',




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
    images: []
  },
  {
    name: "Industrial Building",
    images: []
  },
  {
    name: "Horticulture Design",
    images: [
      '/services/horticulture-design/horticulture-1.JPG',
      '/services/horticulture-design/horticulture-2.JPG',
      '/services/horticulture-design/horticulture-3.JPG',
      '/services/horticulture-design/horticulture-4.JPG',
      '/services/horticulture-design/horticulture-5.JPG',
      '/services/horticulture-design/horticulture-6.JPG',
      '/services/horticulture-design/horticulture-7.JPG',
      '/services/horticulture-design/horticulture-8.JPG',
      '/services/horticulture-design/horticulture-9.JPG',
      '/services/horticulture-design/horticulture-10.JPG',
      '/services/horticulture-design/horticulture-11.JPG',
      '/services/horticulture-design/horticulture-12.JPG',
      '/services/horticulture-design/horticulture-13.JPG',
    ]
  },
  {
    name: "Garden Maintenance",
    images: [
      '/services/garden-maintenence/garden-3.JPG',
      '/services/garden-maintenence/garden-4.JPG',
      '/services/garden-maintenence/garden-5.JPG',
      '/services/garden-maintenence/garden-6.JPG',
      '/services/garden-maintenence/garden-8.JPG',
    ]
  },
  {
    name: "Building Design",
    images: ['/services/building-design/building-1.JPG',
      '/services/building-design/building-2.JPG',
      '/services/building-design/building-3.JPG',
      '/services/building-design/building-4.JPG',
      '/services/building-design/building-5.JPG',
    ]
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(portfolioItems[0]);
  const [fullViewImage, setFullViewImage] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsMobileMenuOpen(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  // Coming Soon Component
  const ComingSoon = () => (
    <div className="flex items-center justify-center h-full w-full">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-gray-700 mb-4 animate-pulse">
          Coming Soon
        </h3>
        <p className="text-xl text-gray-500 animate-bounce">
          Stay Tuned!
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={toggleMobileMenu}
          className="bg-red-600 text-white p-2 rounded-md my-2"
        >
          {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>

      {/* Sidebar for Mobile and Desktop */}
      <aside 
        className={`
          fixed inset-y-0 left-0 w-64 bg-amber-600 p-4 transform transition-transform duration-300 ease-in-out z-40
          md:relative md:w-1/5 md:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-white lg:my-12 mt-14">PORTFOLIO</h2>
        <ul className="space-y-2">
          {portfolioItems.map((item, index) => (
            <li key={index} className="w-full">
              <button
                onClick={() => handleCategoryClick(item)}
                className={`w-full py-3 px-4 transition-all duration-300 ease-in-out text-center md:text-center md:my-4 ${
                  selectedCategory.name === item.name
                    ? 'bg-gray-200 text-gray-800 font-bold'
                    : 'text-white hover:bg-gray-900'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 flex flex-col">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-8 text-gray-800 md:my-28 mt-16">
          {selectedCategory.name}
        </h2>

        {/* Scrollable Image Grid */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto pr-2 md:pr-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#CBD5E0 #EDF2F7',
          }}
        >
          {selectedCategory.images.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
              {selectedCategory.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openFullView(image)}
                >
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <ComingSoon />
          )}
        </div>
      </main>

      {/* Full View Modal */}
      {fullViewImage && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50" 
          onClick={closeFullView}
        >
          <div className="relative w-full h-full max-w-5xl max-h-5xl p-2 md:p-4">
            <Image
              src={fullViewImage}
              alt="Full view"
              fill={true}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <button
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-2xl md:text-4xl lg:text-6xl hover:text-red-600 transition-colors"
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