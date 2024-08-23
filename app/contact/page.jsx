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

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.3 } },
    blur: { scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen  text-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px]"
        style={{ backgroundImage: "url('/images/contact/contactBackground.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative container mx-auto h-full flex items-center justify-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider sm:tracking-widest text-center">
            Let's Connect
          </h1>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-2xl p-8 transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-3xl font-sm mb-6 text-indigo-700 text-center">Contact Info</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-indigo-600" />
                <div>
                  <p className="font-semibold ">Address:</p>
                  <p >Villa No. 5, Mayuresh Chambers,</p>
                  <p >Plot No. 60, Sector 11, CBD Belapur,</p>
                  <p >Navi Mumbai 400614</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-indigo-600" />
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p>+91 98198 00022 / +91 98198 00044</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-indigo-600" />
                <div>
                  <p className="font-semibold mx-">Email:</p>
                  <p>info@royalcrown.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 text-center">Follow Us</h3>
              <div className="flex space-x-6 md:mx-20">
                {[
                  { icon: FaFacebookF, color: 'bg-blue-600' },
                  { icon: FaTwitter, color: 'bg-blue-400' },
                  { icon: FaInstagram, color: 'bg-pink-500' },
                  { icon: FaLinkedinIn, color: 'bg-blue-700' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`${social.color} text-white p-3 rounded-full`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
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
            className="lg:col-span-2 bg-white shadow-2xl rounded-2xl p-8 transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-3xl font-sm mb-6 text-indigo-700 text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300"
                  />
                </motion.div>
              </div>
              <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number *"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300"
                />
              </motion.div>
              <motion.div variants={inputVariants} whileFocus="focus" whileBlur="blur">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300"
                  rows={4}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg font-semibold">
                  Send Message
                </button>
              </motion.div>
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
          <h2 className="text-3xl font-sm mb-6 text-indigo-700 text-center">Our Location</h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.4861920722088!2d73.0323341258145!3d19.007324804812182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c30763eef235%3A0xc2ce8f2ef45e3191!2sMayuresh%20Planet!5e1!3m2!1sen!2sin!4v1724216080490!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}