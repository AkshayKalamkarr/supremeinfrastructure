import React, { useState, useEffect } from "react";
import greenworld1 from '../../assets/projects/greenworld/greenworld1.jpg';
import greenworld2 from '../../assets/projects/greenworld/greenworld2.jpg';
import greenworld3 from '../../assets/projects/greenworld/greenworld3.jpg';
import greenworld4 from '../../assets/projects/greenworld/greenworld4.jpg';
import greenworld5 from '../../assets/projects/greenworld/greenworld5.jpg';
import greenworld6 from '../../assets/projects/greenworld/greenworld6.jpg';
import greenworld7 from '../../assets/projects/greenworld/greenworld7.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/Carousel";

const images = [greenworld1, greenworld2, greenworld3, greenworld4, greenworld5, greenworld6, greenworld7]; // Array of image sources

const Greenworld = () => {
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
                AKSHAR GREENWORLD
              </h1>
              <div className="bg-gray-200 p-4 rounded-lg mb-4">
                <h2 className="text-xl font-semibold mb-2">Project Details</h2>
                <p className='text-black-600 text-sm mb-2'>
                  <strong>Client:</strong> Akshar Greenworld<br />
                  <strong>Approximate Area:</strong> 1850 sqft<br />
                  <strong>Project Duration:</strong> 135 Days<br />
                </p>
              </div>
              <p className='text-black text-md'>
                This 4 BHK flat design strikes the balance between comfort and elegance. From vibrant colors to bold prints, the Emaar Palm Hills home has it all! Filled with desi elements, it is a reflection of the owners’ personality, and we can’t help loving it.<br />

                <span className="font-bold">Project Features:</span>
                <ul className="list-disc pl-4">
                  <li>Wooden flooring for bedrooms.</li>
                  <li>Wooden hanging ceiling.</li>
                  <li>Wall décor in living area with lights.</li>
                  <li>Small gym set up with study zone.</li>
                  <li>4 bathrooms with different tile finishes.</li>
                  <li>Cozy balconies with outdoor furniture.</li>
                  <li>Modular kitchen.</li>
                  <li>4 bedrooms with unique designs and material finishes.</li>
                </ul>
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

export default Greenworld;
