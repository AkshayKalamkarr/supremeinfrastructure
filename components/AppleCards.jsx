"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className='w-full h-full py-8 md:py-0 mt-22 md:mt-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='relative inline-block text-3xl md:text-5xl font-extrabold text-black font-sans text-center mb-4 md:mb-8 md:mx-96'>
          Get to know Our Services
          <span className='absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
        </h2>
        <div className='w-32 h-1 bg-blue-600 mx-auto mb-8'></div>
        <p className='text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto'>
          Discover our comprehensive range of innovative solutions tailored to meet your needs.
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
}


const data = [
  {
    category: "INTERIOR DESIGN",
    title: "Using latest technology to make efficient use of spaces. Better designing concepts.",
    src: "/images/services/interior.jpeg",
    // content: <DummyContent />,
  },
  {
    category: "CIVIL CONSTRUCTION",
    title: "Using the latest technology and machines we create buildings which are economical yet safe.",
    src: "/images/services/civil.jpg",
    // content: <DummyContent />,
  },
  {
    category: "ARCHITECTURAL DESIGN",
    title: "We work on the latest trends as per the markets for developing an economical and budget-friendly option to our clients.",
    src: "/images/services/architecture.jpg",
    // content: <DummyContent />,
  },

  {
    category: "CABLE TRENCH",
    title: "A method of laying cables into the ground by digging trenches. It is also known as underground cabling.",
    src: "/images/services/cabletrench.jpg",
    // content: <DummyContent />,
  },
  {
    category: "INDUSTRIAL BUILDING",
    title: "We have been associated with many corporates, who are related in the EV & Solar Businesses.",
    src: "/images/services/industrial-building.jpg",
    // content: <DummyContent />,
  },
  {
    category: "HORTICULTURE DESIGN",
    title: "Worked in many prestigious projects like the Urban Jungle By Panvel Municipal Corporation under the GOI Funded Urban Forest theme.",
    src: "/images/services/horticulture-design.jpg",
    // content: <DummyContent />,
  },
  {
    category: "GARDEN MAINTENANCE",
    title: "Development and decorative planting of gardens, yards, grounds, parks, and other types of areas.",
    src: "/images/services/garden-maintenance.jpg",
    // content: <DummyContent />,
  },
  {
    category: "BUILDING DESIGN",
    title: "We use technology with ideas to create designs that are sustainable in any environment.",
    src: "/images/services/building-design.jpg",
    // content: <DummyContent />,
  },
];
