'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-6/6 object-cover"
      >
        <source src="/videos/video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <h2 className="text-red text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
          Welcome to Supreme Infrastructure
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;