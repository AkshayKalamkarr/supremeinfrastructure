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
              className='mt-1 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105 px-4 py-2'
            />
          </div>
          {/* <div className='form-group'>
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
              className='mt-1 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105 px-4 py-2'
            />
          </div> */}
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
              className='mt-1 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105 px-4 py-2'
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
              className='mt-1 block w-full border-b border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105 px-4 py-2'
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
