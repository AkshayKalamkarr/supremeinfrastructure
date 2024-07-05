// import React from 'react';
// import ContactForm from '../pages/contact-page';

// const Contact = () => {
//     ////// dont forget to ad dcontact number on form
//     return (
//         <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-slate-500 to-slate-800 ">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//                 {/* Right side (location details and map) */}
//                 <div className="order-2 md:order-1">
//                     <div className="text-slate-900 mb-8">
//                         <h1 className="text-4xl font-bold mb-4">LOCATION</h1>
//                         <p className="text-bold text-gray-800 leading-relaxed">
//                             <span className='font-bold'></span>
//                             <br /><br />
//                             Mayuresh Planet,603, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614
//                         </p>
//                     </div>
//                     <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-lg">
//                         <iframe
//                             title="Company Location"
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1654.9710497131566!2d73.03244624110917!3d19.007458918908416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c30763eef235%3A0xc2ce8f2ef45e3191!2sMayuresh%20Planet!5e1!3m2!1sen!2sin!4v1719571256238!5m2!1sen!2sin"
//                             width="100%"
//                             height="500"
//                             allowFullScreen=""
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                             className="rounded-lg"
//                         ></iframe>
//                     </div>
//                 </div>
//                 {/* Left side (contact form) */}
//                 <div className="order-1 md:order-2">
//                     <div className="text-slate-900 mb-8">
//                         <h1 className="text-4xl font-bold mb-4">CONTACT US</h1>
//                         <p className="text-base text-gray-800 leading-relaxed m-10">
//                             <span className='font-bold'>For More Business Enquiry</span>
//                             <br /><br />
//                         </p>
//                     </div>
//                     <div className="text-slate-900 mb-8">
//                         <ContactForm />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;

import React from "react";

const ContactPage = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen mt-12'>
      {/* Contact Form */}
      <div className='w-full md:w-1/3 p-4 md:p-8 bg-gradient-to-b from-slate-500 to-slate-800 flex flex-col justify-center'>
        <h2 className='text-2xl font-bold mb-6 text-center md:text-left'>
          Contact Us
        </h2>
        <form className='flex flex-col space-y-4'>
          <div className='form-group'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-white'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter your Name'
              className='mt-1 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105'
            />
          </div>
          <div className='form-group'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-white'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Enter a valid email address'
              className='mt-1 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105'
            />
          </div>
          <div className='form-group'>
            <label
              htmlFor='contact'
              className='block text-sm font-medium text-white'
            >
              Contact Number
            </label>
            <input
              type='tel'
              id='contact'
              placeholder='Enter your contact number'
              className='mt-1 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105'
            />
          </div>
          <div className='form-group'>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-white'
            >
              Message
            </label>
            <textarea
              id='message'
              rows='3'
              className='mt-1 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105'
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className='w-full md:w-1/3 p-4 md:p-8 bg-gray-800 text-white flex flex-col justify-center'>
        <div className='mb-8'>
          <h3 className='text-yellow-500 font-bold mb-2'>CALL US</h3>
          {/* <p className="mb-2">1 (234) 567-891</p> */}
          <p className='mb-6'>+91 8356834380</p>

          <h3 className='text-yellow-500 font-bold mb-2'>LOCATION</h3>
          <p className='mb-6'>
            603 ,Mayuresh Planet, Sector 15,
            <br /> CBD Belapur, Navi Mumbai, Maharashtra 400614
          </p>
        </div>

        <div>
          <h3 className='text-yellow-500 font-bold mb-2'>OUR TOP SERVICES</h3>
          <ul className='list-disc list-inside'>
            <li>Interior Design</li>
            <li>Civil Construction</li>
            <li>Architectural Design</li>
            <li>Cable Trench</li>
            <li>Industrial Building</li>
            <li>Horticulture Design</li>
            <li>Garden Maintenance</li>
            <li>building design</li>
          </ul>
        </div>
      </div>

      {/* Map */}
      <div className='w-full md:w-1/3'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1654.9710497131566!2d73.03244624110917!3d19.007458918908416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c30763eef235%3A0xc2ce8f2ef45e3191!2sMayuresh%20Planet!5e1!3m2!1sen!2sin!4v1719571256238!5m2!1sen!2sin'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
