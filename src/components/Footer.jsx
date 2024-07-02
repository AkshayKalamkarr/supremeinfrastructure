import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-800 w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-2">
      <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0 flex-grow">
        <img src={logo} alt="Logo" className="h-24 w-24 mr-4" />
        <div className="text-white text-sm text-center md:text-center md:flex md:items-center md:h-full"> {/* Updated this line */}
          © 2024 Supreme Infrastructure. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
