'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { titleVariants } from '../../../utils/animation';
import { guestprojects } from '../../../data/guesthousedata';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 50 }
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-amber-600/20 hover:border-amber-600"
    >
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority={false}
        />
      </div>
      <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900  line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {project.description}
          </p>
        </div>
        <Link
          href={`/project/guesthouse/${project.slug}`}
          className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium rounded-lg transition-all duration-300 text-sm sm:text-base"
        >
          Read More
          <span className="ml-2">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

const GuestProject = () => {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center">
        <Image
          src="/images/projects/commercialBackgroundWallpaper.jpeg"
          alt="Guest House Projects Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="container relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wider text-center px-4"
        >
          Guest House Projects
        </motion.h1>
      </div>

      {/* Projects Grid Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 lg:py-16">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="max-w-2xl mx-auto text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Discover Our Featured Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {guestprojects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestProject;