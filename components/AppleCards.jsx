"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className='w-full h-full py-20 mt-22 md:mt-36'>
      <h2 className='max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center'>
        Get to know Our Services.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className='bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4'
          >
            <p className='text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
              <span className='font-bold text-neutral-700'>
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src='https://assets.aceternity.com/macbook.png'
              alt='Macbook mockup from Aceternity UI'
              height='500'
              width='500'
              className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "INTERIOR DESIGN",
    title: "Using latest technology to make efficient use of spaces. Better designing concepts.",
    src: "/images/services/interior.jpeg",
    content: <DummyContent />,
  },
  {
    category: "CIVIL CONSTRUCTION",
    title: "Using the latest technology and machines we create buildings which are economical yet safe.",
    src: "/images/services/civil.jpg",
    content: <DummyContent />,
  },
  {
    category: "ARCHITECTURAL DESIGN",
    title: "We work on the latest trends as per the markets for developing an economical and budget-friendly option to our clients.",
    src: "/images/services/architecture.jpg",
    content: <DummyContent />,
  },

  {
    category: "CABLE TRENCH",
    title: "A method of laying cables into the ground by digging trenches. It is also known as underground cabling.",
    src: "/images/services/cabletrench.jpg",
    content: <DummyContent />,
  },
  {
    category: "INDUSTRIAL BUILDING",
    title: "We have been associated with many corporates, who are related in the EV & Solar Businesses.",
    src: "/images/services/industrial-building.jpg",
    content: <DummyContent />,
  },
  {
    category: "HORTICULTURE DESIGN",
    title: "Worked in many prestigious projects like the Urban Jungle By Panvel Municipal Corporation under the GOI Funded Urban Forest theme.",
    src: "/images/services/horticulture-design.jpg",
    content: <DummyContent />,
  },
  {
    category: "GARDEN MAINTENANCE",
    title: "Development and decorative planting of gardens, yards, grounds, parks, and other types of areas.",
    src: "/images/services/garden-maintenance.jpg",
    content: <DummyContent />,
  },
  {
    category: "BUILDING DESIGN",
    title: "We use technology with ideas to create designs that are sustainable in any environment.",
    src: "/images/services/building-design.jpg",
    content: <DummyContent />,
  },
];
