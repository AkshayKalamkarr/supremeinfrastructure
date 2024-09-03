'use client'
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[50vh]"
        style={{ backgroundImage: "url('/images/contact/contactBackground.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative container mx-auto h-full flex items-center justify-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide text-center drop-shadow-lg">
            Let's Connect
          </h1>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 shadow-md rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600 border-b-4 border-blue-600 pb-2 text-center">
              Contact Info
            </h2>
            <div className="space-y-6 text-center md:text-left">
              <div className="flex items-start justify-center md:justify-start space-x-4">
                <FaMapMarkerAlt className="text-2xl text-blue-500" />
                <div>
                  <p className="font-semibold">Address:</p>
                  <p>Villa No. 5, Mayuresh Chambers, Plot No. 60, Sector 11, CBD Belapur, Navi Mumbai 400614</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <FaPhone className="text-2xl text-blue-500" />
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p>+91 98198 00022 / +91 98198 00044</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <FaEnvelope className="text-2xl text-blue-500" />
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>info@supremeinfrastructure</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 shadow-md rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 border-b-4 border-blue-600 pb-2 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-blue-300 focus:border-blue-500 outline-none rounded transition duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-blue-300 focus:border-blue-500 outline-none rounded transition duration-300"
                />
              </div>
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number *"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full p-4 border-2 border-blue-300 focus:border-blue-500 outline-none rounded transition duration-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border-2 border-blue-300 focus:border-blue-500 outline-none rounded transition duration-300"
                rows={4}
              />
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 text-center border-b-4 border-blue-600 pb-2">
            Location
          </h2>
          <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.4861920722088!2d73.0323341258145!3d19.007324804812182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c30763eef235%3A0xc2ce8f2ef45e3191!2sMayuresh%20Planet!5e1!3m2!1sen!2sin!4v1724216080490!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
