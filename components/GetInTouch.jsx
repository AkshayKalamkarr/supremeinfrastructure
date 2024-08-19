import React from 'react';

const GetInTouch = () => {
  return (
    <div className="relative h-3/6 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/getinTouch.jpg')"}}>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white p-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Get In Touch</h1>
          <p className="text-lg md:text-xl mb-8">
            It would be great to hear from you! If you got any questions, Please do not to hesitate to contact us !!
            Meet our experts, share your dreams ! Reach us with trust, We will leave you with no regrets !!
          </p>
          <a 
            href="tel:+918356834380" 
            className="inline-block px-6 py-3 border-2 border-white rounded-md text-lg transition-colors duration-300 hover:bg-white hover:text-black"
          >
            +91 8356834380
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;