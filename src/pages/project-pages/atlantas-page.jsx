import React, { useState, useEffect } from "react";
import atlantas1 from '../../assets/projects/atlantas/atlantas1.jpg';
import atlantas2 from '../../assets/projects/atlantas/atlantas2.jpg';
import atlantas3 from '../../assets/projects/atlantas/atlantas3.jpg';
import atlantas4 from '../../assets/projects/atlantas/atlantas4.jpg';
import atlantas5 from '../../assets/projects/atlantas/atlantas5.jpg';
import atlantas6 from '../../assets/projects/atlantas/atlantas6.jpg';
import atlantas7 from '../../assets/projects/atlantas/atlantas7.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/Carousel";

const images = [atlantas1, atlantas2, atlantas3, atlantas4, atlantas5, atlantas6, atlantas7]; // Array of image sources

const Atlanats = () => {
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
                ATLANATAS
              </h1>
              <div className="bg-gray-200 p-4 rounded-lg mb-4">
                <h2 className="text-xl font-semibold mb-2">Project Details</h2>
                <p className='text-black-600 text-sm mb-2'>
                  <strong>Client:</strong> Atlanats Crew Management<br />
                  <strong>Approximate Area:</strong> 7500 sqft<br />
                  <strong>Project Duration:</strong> 120 Days<br />
                </p>
              </div>
              <p className='text-black text-md text-left'>
                The project Atlantas Involved merging 8 offices into 1 single large space. The challenging, part was to keep the singularity of all office like ‘FIRE, ELECTRICAL & Washroom pipeline, so that in near future the offices can be leased out without making much modifications to the present setup. The Design was based on the young and vibrant People who were going to work. It Had a Pantry with all modern facility. The reception lobby depicted the line of work Atlanta’s was doing. The design was done with the latest tools like providing 3D walkways, which provided the client what the office will look like before it could be done.

                The space looks more beautiful with the Mood lights, Colour combinations of tiles & Furniture, Max Height Glass partition and used elements on wall decor from their Core filed.<br/>
                
                <span className="font-bold">Projects Features:
                100+ Seating at single floor.
                65+ seating for cafeteria.
                14 seater huge Conference room.
                Separate account department.
                Gents & Ladies toilet with Italian tile finish design.
                Main entry with huge branding.
                Colourful Interview room & meeting room.</span>
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

export default Atlanats;
