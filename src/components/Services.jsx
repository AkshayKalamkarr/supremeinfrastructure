import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

//////////// asseets
import interior from "../assets/animations/interior.json"; // Replace with your image imports
import building from "../assets/animations/building.json";
import architecture from "../assets/animations/architecture.json";
import cable from "../assets/animations/cable.json";
import industrial from "../assets/animations/industrial.json";
import horticulture from "../assets/animations/horticulture.json";
import garden from "../assets/animations/garden.json";
import civil from "../assets/animations/civil.json";


//////////////  services
import interiorPage from '../pages/service-pages/interior-page'
import civilPage from '../pages/service-pages/civil-page'









const Services = () => {
  return (
    <div id='services'>
      {/* Hero section */}
      <div className='min-h-screen bg-gradient-to-b from-slate-200 to-slate-100'>
        <div className='max-w-7xl mx-auto px-8 py-28 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center'>
          <h1 className='text-4xl text-slate font-bold mb-4'>OUR SERVICES</h1>
          <h3 className='text-xl text-slate'>
            Our Exclusive Services We Offer
          </h3>
        </div>
        {/* Services section */}
        <div className='max-w-screen-2xl mx-auto px-4 md:px-8 py-8'>
          <div className='grid w-full h-full grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Service Box 1 */}
            <Link to='/interiorpage'>
              <div className='bg-white p-4 shadow-md rounded-lg'>
                <Lottie animationData={interior} className='mb-4 rounded-lg' />
                <h2 className='text-xl font-bold text-slate-800 mb-2'>
                  INTERIOR DESIGN
                </h2>
                <p className='text-slate-600'>
                  Using latest technology to make efficient use of spaces,
                  Better designing concepts.
                </p>
              </div>
            </Link>

            {/* Service Box 2 */}
            <Link to='/civilpage'>
              <div className='bg-white p-4 shadow-md rounded-lg'>
                <Lottie animationData={civil} className='mb-4 rounded-lg' />
                <h2 className='text-xl font-bold text-SLATE-800 mb-2'>
                  CIVIL CONSTRUCTION
                </h2>
                <p className='text-SLATE-600'>
                  Using the latest technology and machines we create buildings
                  which are economical yet safe.
                </p>
              </div>
            </Link>

            {/* Service Box 3 */}
            <Link to='/architecturepage'>
              <div className='bg-white p-4 shadow-md rounded-lg'>
                <Lottie
                  animationData={architecture}
                  className='mb-4 rounded-lg'
                />
                <h2 className='text-xl font-bold text-gray-800 mb-2'>
                  ARCHITECTURAL DESIGN
                </h2>
                <p className='text-gray-600'>
                  We work on the latest trends as per the markets for developing
                  an economical and budget friendly options to our clients.
                </p>
              </div>
            </Link>
            {/* Service Box 4 */}
            <Link to='/cablepage'><div className='bg-white p-4 shadow-md rounded-lg'>
              <Lottie animationData={cable} className='mb-4 rounded-lg' />
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                CABLE TRENCH
              </h2>
              <p className='text-gray-600'>
                A method of laying cables into the ground by digging trenches.
                It is also known as underground cabling.
              </p>
            </div></Link>
            {/* Service Box 5 */}
            <div className='bg-white p-4 shadow-md rounded-lg'>
              <Lottie animationData={industrial} className='mb-4 rounded-lg' />
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                INDUSTRIAL BUILDING
              </h2>
              <p className='text-gray-600'>
                We have been associated with many corporates, who are related in
                the EV & Solar Businesses.
              </p>
            </div>
            {/* Service Box 6 */}
            <div className='bg-white p-4 shadow-md rounded-lg'>
              <Lottie
                animationData={horticulture}
                className='mb-4 rounded-lg'
              />
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                HORTICULTURE DESIGN
              </h2>
              <p className='text-gray-600'>
                Worked in many prestigious projects like the Urban Jungle By
                Panvel Municipal Corporation under the GOI Funded Urban Forest
                theme.
              </p>
            </div>
            {/* Service Box 7 */}
            <div className='bg-white p-4 shadow-md rounded-lg'>
              <Lottie animationData={garden} className='mb-4 rounded-lg' />
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                GARDEN MAINTENANCE
              </h2>
              <p className='text-gray-600'>
                Development and decorative planting of gardens, yards, grounds,
                parks, and other types of areas.
              </p>
            </div>
            {/* Service Box 8 */}
            <div className='bg-white p-4 shadow-md rounded-lg'>
              <Lottie animationData={building} className='mb-4 rounded-lg' />
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                BUILDING DESIGN
              </h2>
              <p className='text-gray-600'>
                We use technology with ideas to create design which are
                sustainable in any environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
