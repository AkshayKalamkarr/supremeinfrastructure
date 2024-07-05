import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

//////////// assets
import interior from "../assets/animations/interior.json";
import building from "../assets/animations/building.json";
import architecture from "../assets/animations/architecture.json";
import cable from "../assets/animations/cable.json";
import industrial from "../assets/animations/industrial.json";
import horticulture from "../assets/animations/horticulture.json";
import garden from "../assets/animations/garden.json";
import civil from "../assets/animations/civil.json";

const ServiceBox = ({ to, animation, title, description }) => {
  let animationData = null;

  // Determine animation data based on type
  if (typeof animation === 'string') {
    switch (animation) {
      case 'interior':
        animationData = interior;
        break;
      case 'civil':
        animationData = civil;
        break;
      case 'architecture':
        animationData = architecture;
        break;
      case 'cable':
        animationData = cable;
        break;
      case 'industrial':
        animationData = industrial;
        break;
      case 'horticulture':
        animationData = horticulture;
        break;
      case 'garden':
        animationData = garden;
        break;
      case 'building':
        animationData = building;
        break;
      default:
        break;
    }
  } else {
    // Assume animation is already the imported JSON object
    animationData = animation;
  }

  return (
    <Link to={to} className="block h-full">
      <div className='bg-white p-4 shadow-md rounded-lg h-full flex flex-col'>
        <div className="flex-grow">
          <Lottie animationData={animationData} className='mb-4 rounded-lg h-48 object-cover' />
        </div>
        <h2 className='text-xl font-bold text-slate-800 mb-2'>
          {title}
        </h2>
        <p className='text-slate-600'>
          {description}
        </p>
      </div>
    </Link>
  );
};

const Services = () => {
  const services = [
    { to: '/interiorpage', animation: 'interior', title: 'INTERIOR DESIGN', description: 'Using latest technology to make efficient use of spaces, Better designing concepts.' },
    { to: '/civilpage', animation: civil, title: 'CIVIL CONSTRUCTION', description: 'Using the latest technology and machines we create buildings which are economical yet safe.' },
    { to: '/architecturepage', animation: architecture, title: 'ARCHITECTURAL DESIGN', description: 'We work on the latest trends as per the markets for developing an economical and budget friendly options to our clients.' },
    { to: '/cablepage', animation: cable, title: 'CABLE TRENCH', description: 'A method of laying cables into the ground by digging trenches. It is also known as underground cabling.' },
    { to: '/industrialpage', animation: industrial, title: 'INDUSTRIAL BUILDING', description: 'We have been associated with many corporates, who are related in the EV & Solar Businesses.' },
    { to: '/horticulturepage', animation: horticulture, title: 'HORTICULTURE DESIGN', description: 'Worked in many prestigious projects like the Urban Jungle By Panvel Municipal Corporation under the GOI Funded Urban Forest theme.' },
    { to: '/gardenpage', animation: garden, title: 'GARDEN MAINTENANCE', description: 'Development and decorative planting of gardens, yards, grounds, parks, and other types of areas.' },
    { to: '/buildingpage', animation: building, title: 'BUILDING DESIGN', description: 'We use technology with ideas to create design which are sustainable in any environment.' },
  ];

  return (
    <div id='services'>
      <div className='min-h-screen bg-gradient-to-b from-slate-200 to-slate-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
          <h1 className='text-4xl text-slate-800 font-bold mb-4 text-center'>OUR SERVICES</h1>
          <h3 className='text-xl text-slate-600 text-center mb-12'>
            Our Exclusive Services We Offer
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {services.map((service, index) => (
              <ServiceBox key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
