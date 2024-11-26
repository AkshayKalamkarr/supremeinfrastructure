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
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
  },
  {
    name: "Industrial Building",
    images: ['/images/portfolio/img-1.jpg', '/images/portfolio/img-1.jpg']
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
    images: ['/services/garden-maintenence/garden-1.JPG',
      '/services/garden-maintenence/garden-2.JPG',
      '/services/garden-maintenence/garden-3.JPG',
      '/services/garden-maintenence/garden-4.JPG',
      '/services/garden-maintenence/garden-5.JPG',
      '/services/garden-maintenence/garden-6.JPG',
      '/services/garden-maintenence/garden-7.JPG',
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
      <aside className="w-full lg:w-1/5 bg-amber-600 p-4">
        {/* <h1 className="text-3xl font-bold mb-2 text-center text-gray-800  md:my-24">Supreme Infrastructure Company</h1> */}
        <h2 className="text-4xl font-bold mb-6 text-center text-white lg:my-12">PORTFOLIO</h2>
        <ul className="space-y-2">
          {portfolioItems.map((item, index) => (
            <li key={index} className="w-full">
              <button
                onClick={() => handleCategoryClick(item)}
                className={`w-full py-3 px-4 transition-all duration-300 ease-in-out text-center md:text-center md:my-4 ${selectedCategory.name === item.name
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
                className="relative aspect-square overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
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