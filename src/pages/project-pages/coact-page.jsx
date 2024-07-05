import React, { useState, useEffect } from "react";
import coact1 from '../../assets/projects/coact/coact1.jpg';
import coact2 from '../../assets/projects/coact/coact2.jpg';
import coact3 from '../../assets/projects/coact/coact3.jpg';
import coact4 from '../../assets/projects/coact/coact4.jpg';
import coact5 from '../../assets/projects/coact/coact5.jpg';
import coact6 from '../../assets/projects/coact/coact6.jpg';
import coact7 from '../../assets/projects/coact/coact7.jpg';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/Carousel";

const images = [coact1, coact2, coact3, coact4, coact5, coact6, coact7]; // Array of image sources

const Coact = () => {
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
                COACT IMPRINTS
              </h1>
              <div className="bg-gray-200 p-4 rounded-lg mb-4 lg:hidden"> {/* Only visible on mobile screens */}
                <h2 className="text-xl font-semibold mb-2">Project Details</h2>
                <p className='text-gray-600 text-sm mb-2'>
                  <strong>Client:</strong> Coact Imprints<br />
                  <strong>Approximate Area:</strong> 1500 sqft<br />
                  <strong>Project Duration:</strong> 135 Days<br />
                </p>
              </div>
            </div>
            <div className="mb-8 lg:mb-0"> {/* mb-0 on lg screens to maintain spacing */}
              <div className="hidden lg:block mb-4"> {/* Only visible on lg screens */}
                <h2 className="text-xl font-semibold mb-2">Project Details</h2>
                <p className='text-gray-600 text-sm mb-2'>
                  <strong>Client:</strong> Coact Imprints<br />
                  <strong>Approximate Area:</strong> 1500 sqft<br />
                  <strong>Project Duration:</strong> 135 Days<br />
                </p>
              </div>
              <p className='text-black text-md'>
                The project Coact Imprints involved merging 8 offices into 1 single large space. The challenging part was to keep the singularity of all offices like ‘FIRE, ELECTRICAL & Washroom pipeline', so that in the near future the offices can be leased out without making many modifications to the present setup. The design was based on the young and vibrant people who were going to work. It had a pantry with all modern facilities. The reception lobby depicted the line of work Atlanta’s was doing. The design was done with the latest tools like providing 3D walkways, which provided the client with what the office will look like before it could be done.

                The space looks more beautiful with the mood lights, color combinations of tiles & furniture, max height glass partition, and used elements on wall decor from their core filed.<br/>
                <span className="font-bold">Project Features:
                100+ seating at a single floor.
                65+ seating for cafeteria.
                14 seater huge conference room.
                Separate account department.
                Gents & ladies toilet with Italian tile finish design.
                Main entry with huge branding.
                Colorful interview room & meeting room.</span>
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

export default Coact;
