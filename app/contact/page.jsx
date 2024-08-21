'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

  const locations = [
    { city: 'Belapur , Navi Mumbai', address: '603,Supreme Infrastructure ,Mayuresh Planet, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-28">
          <Image
            src="/images/contactBackground.jpg"
            alt="Modern Building"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-4">Have an inquiry or some feedback for us? Fill out the form below to contact our team.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter a valid email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
              
              <div className="h-[450px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.4861920722088!2d73.0323341258145!3d19.007324804812182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c30763eef235%3A0xc2ce8f2ef45e3191!2sMayuresh%20Planet!5e1!3m2!1sen!2sin!4v1724216080490!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
            
            <div className="mt-8 justify-center  ">
              {locations.map((location, index) => (
                <div key={index} className="text-sm justify-center">
                  <h3 className="font-bold justify-center">{location.city}</h3>
                  <p>{location.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
