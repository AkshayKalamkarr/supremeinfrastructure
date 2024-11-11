'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { titleVariants } from '../../../utils/animation';
import { projects } from '../../../data/commercialprojects';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.3
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 } 
      }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-amber-600/20 hover:border-amber-600"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.image}
          layout="fill"
          objectFit="cover"
          alt={project.title}
          className="transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Button Container */}
        <Link 
          href={`/project/commercialprojects/${project.slug}`}
          className="block mt-auto"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-700 to-yellow-600 text-white rounded-lg hover:from-amber-800 hover:to-yellow-700 transition-all duration-300 text-sm sm:text-base font-medium shadow-sm hover:shadow-md"
          >
            Read More
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const CommercialProject = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-[url('/images/projects/commercialBackgroundWallpaper.jpeg')] bg-center bg-cover"
          style={{ height: 'clamp(200px, 40vh, 500px)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <motion.div
          variants={headerVariants}
          className="relative z-10 px-4 py-16 sm:py-24 md:py-32"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white text-center tracking-wide">
            Commercial Projects
          </h1>
        </motion.div>
      </div>

      {/* Projects Grid Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 lg:py-20">
          {/* Optional Section Title */}
          <motion.div
            variants={titleVariants}
            className="mb-8 sm:mb-12"
          >
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CommercialProject;