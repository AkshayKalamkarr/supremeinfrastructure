import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import home from './Home'
import about from './About'
import service from './Services'
import Project from './Projects';
import team from './Team'

const Footer = () => {
  return (
    <footer className="bg-slate-800 w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-2">
      <div className="flex items-center mb-4 md:mb-0">
        <img src={logo} alt="Logo" className="h-24 w-24 mr-4" />
        <div className="flex flex-col md:flex-row justify-center md:justify-start">
          <Link to="/" className="text-white hover:text-gray-200 mb-2 md:mb-0 md:mr-4">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200 mb-2 md:mb-0 md:mr-4">About</Link>
          <Link to="/service" className="text-white hover:text-gray-200 mb-2 md:mb-0 md:mr-4">Service</Link>
          <Link to="/project" className="text-white hover:text-gray-200 mb-2 md:mb-0 md:mr-4">Project</Link>
          <Link to="/team" className="text-white hover:text-gray-200">Team</Link>
        </div>
      </div>
      <div className="text-white text-sm text-center md:text-right mt-4 md:mt-0">
        © 2024 Supreme Infrastructure. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


// import home from './Home'
// import about from './About'
// import service from './Services'
// import Projects from './Projects';
// import team from './Team'