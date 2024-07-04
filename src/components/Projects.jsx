import React from 'react';
import { SiTata } from 'react-icons/si';
import { MdWebAsset } from 'react-icons/md';
import { BsStack } from 'react-icons/bs';
import { HiArrowCircleDown } from "react-icons/hi";
import background from '../assets/background/background.jpg'; // Import the background image
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, to }) => (
  <Link to={to} className="text-black">
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="text-3xl text-yellow-500 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <button className="mt-4 text-sm text-gray-600 hover:text-yellow-500">MORE</button>
    </div>
  </Link>
);

const Projects = () => {
  return (
    <div
      className="bg-yellow-400 min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Ensure the background image covers the entire container
        backgroundRepeat: "no-repeat", // Prevent the background image from repeating
      }}
    >
      <div className="max-w-6xl w-full px-4 md:px-8">
        {/* Responsive Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 mb-24 text-center">
          Our Projects
        </h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={<SiTata />} title="TATA POWER" to="/Tata" />
          <ServiceCard icon={<MdWebAsset />} title="ATLANTAS" to="/atlantas" />
          <ServiceCard icon={<HiArrowCircleDown />} title="COACT IMPRINTS" to="/coact" />
          <ServiceCard icon={<BsStack />} title="GREENWORLD" to="/Greenworld" />
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        {/* Image by Freepik */}
      </div>
    </div>
  );
};

export default Projects;
