import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-500 to-slate-800 text-yellow-400 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt='logo' className="w-12 h-12" />
              <h2 className="text-xl font-bold text-transparent bg-gradient-to-r bg-clip-text text-yellow-400  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500">Supreme Infrastructure</h2>
            </div>
            <p className="mb-4 text-sm text-transparent bg-gradient-to-r bg-clip-text text-yellow-400 ">
            We Are Team of Talented, Innovative Designers, Engineers and Horticulturists
            </p>
            <div className="flex space-x-4">
              <FaFacebookF className="text-gray-400 hover:text-blue-500" />
              <FaTwitter className="text-gray-400 hover:text-blue-400" />
              <FaInstagram className="text-gray-400 hover:text-pink-500" />
              <FaLinkedinIn className="text-gray-400 hover:text-blue-700" />
              <FcGoogle className="text-gray-400" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-transparent bg-gradient-to-r bg-clip-text text-yellow-400 ">Company</h3>
            <ul className="space-y-2 text-sm text-transparent bg-gradient-to-r bg-clip-text text-yellow-400 ">
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Clients</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>Tweet @ Us</li>
              <li>Webinars</li>
              <li>Feedback</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Civil Construction</li>
              <li>Building Design</li>
              <li>Cable Trench</li>
              <li>Interior Design</li>
              <li>Architectural Design</li>
              <li>Garden Development</li>
              <li>Horticulture Design</li>
              <li>Industrial Building</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">📞  +91 8356834380</p>
            <p className="text-sm">📧 contact@suprmeinfra.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center text-sm">
          <p>© Copyright Supreme Infrastructure. All rights reserved.<br/><span className='text-slate-500'>Designed by Akshay Kalamkar</span></p>
          
          <div className="mt-4 md:mt-0 space-x-4">
            {/* <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms of Use</a>
            <a href="#" className="hover:text-blue-500">Legal</a>
            <a href="#" className="hover:text-blue-500">Site Map</a> */}
          </div>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
