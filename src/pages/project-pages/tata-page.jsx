import React, { useState, useEffect } from "react";
import tata1 from '../../assets/projects/tata/tata1.jpg';
import tata2 from '../../assets/projects/tata/tata2.jpg';
import tata3 from '../../assets/projects/tata/tata3.jpg';
import tata4 from '../../assets/projects/tata/tata4.jpg';
import tata5 from '../../assets/projects/tata/tata5.jpg';
import tata6 from '../../assets/projects/tata/tata6.jpg';
import tata7 from '../../assets/projects/tata/tata7.jpg';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/Carousel";

const images = [tata1, tata2, tata3, tata4, tata5, tata6, tata7]; // Array of image sources

const Tata = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-cover bg-center'>
      <div className='max-w-6xl w-full px-4 md:px-8'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start mt-16 p-4'>
          <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
            <Carousel autoPlay={true} interval={2000}>
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                    <img
                      src={src}
                      alt={`Interior ${index + 1}`}
                      className='w-full h-auto object-contain'
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className='w-full lg:w-1/2 lg:pl-12'>
            <div className="mb-8">
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-700 mb-4 text-center lg:text-center'>
                TATA
              </h1>
              <div className="bg-gray-200 p-4 rounded-lg mb-4">
                <h2 className="text-xl font-semibold mb-2">Project Details</h2>
                <p className='text-black-600 text-sm mb-2'>
                  <strong>Client:</strong> Tata Power Company Limited<br />
                  <strong>Approximate Area:</strong> 1500 sqft<br />
                  <strong>Project Duration:</strong> 135 days<br />
                </p>
              </div>
              <p className='text-black text-md'>
                Mulshi IB, situated about 40 km from Pune, is a storage dam for Bhira hydro power station of Tata Power Company Limited. The Bungalow is located near dam and dam constructed across the rivers Mula & Nila near village Mulshi during the years 1921-26 is a gravity dam constructed in rubble masonry.

                We have renovated the Mulshi IB with new design and concepts IN Year 2018-19. By keeping Bungalow’s vintage look in mind we have design this beautiful stone structure from scarp.

                This is Tata power’s oldest property among all. Bungalow home plans share a common style with Craftsman, Rustic and Cottage home designs. A great porch for your rocker, typically one level and over-hanging eaves are some of the classic features.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8 text-center text-sm text-gray-600'>
        {/* Image by Freepik */}
      </div>
    </div>
  );
};

export default Tata;
