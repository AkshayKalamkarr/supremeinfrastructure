import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-500 to-slate-800 text-yellow-400 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* New responsive box */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-8">
            <div className="bg-slate-500 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={logo} alt='logo' className="w-12 h-12" />
                <h2 className="text-xl font-bold text-transparent bg-clip-text text-yellow-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500">Supreme Infrastructure</h2>
              </div>
              <p className="mb-4 text-sm text-yellow-400">
                We Are Team of Talented, Innovative Designers, Engineers and Horticulturists
              </p>
              <div className="flex space-x-4 mb-4">
                <FaFacebookF className="text-gray-300 hover:text-blue-500" />
                <FaTwitter className="text-gray-300 hover:text-blue-400" />
                <FaInstagram className="text-gray-300 hover:text-pink-500" />
                <FaLinkedinIn className="text-gray-300 hover:text-blue-700" />
                <FcGoogle className="text-gray-300" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p className="text-sm mb-1">📞 +91 8356834380</p>
                <p className="text-sm">📧 contact@supremeinfra.com</p>
              </div>
            </div>
          </div>

          {/* Rest of the footer content */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4 text-transparent bg-clip-text text-yellow-400">Company</h3>
              <ul className="space-y-2 text-sm text-yellow-400">
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

            {/* Our Services */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm grid grid-cols-2 gap-2">
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
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center text-sm">
          <p>© Copyright Supreme Infrastructure. All rights reserved.<br /><span className='text-slate-500'>Designed by Akshay Kalamkar</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;