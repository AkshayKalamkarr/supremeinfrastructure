'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-cover bg-center" style={{backgroundImage: "url('/images/contactBackground.jpg')"}}>
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-white mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="mb-6 text-sm">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="border border-white px-4 py-2 hover:bg-white hover:text-gray-900 transition duration-300">
            LEARN MORE
          </button>

        </div>
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-white text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter a valid email address"
                  className="w-full px-3 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-white text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  className="w-full px-3 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-white text-sm mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                className="w-full px-3 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white text-sm mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full px-3 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-opacity-90 transition duration-300">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;