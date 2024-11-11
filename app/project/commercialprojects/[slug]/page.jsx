"use client";
import { useState } from "react";
import IFrameComponent from "@/components/IFrameComponent";
import { Banknote, FileCheck } from "lucide-react";
import { projects } from "../../../../data/commercialprojects";
import Image from "next/image";
import { useParams } from "next/navigation";

const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};

export default function ProjectPage() {
  const { slug } = useParams();
  console.log(slug);
  const project = getProjectBySlug(slug);
  const [fullViewImage, setFullViewImage] = useState(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  const openFullView = (image) => {
    setFullViewImage(image);
  };

  const closeFullView = () => {
    setFullViewImage(null);
  };

  const highlightsIcon = {
    Banknote: Banknote,
    FileCheck: FileCheck,
    // ... (rest of your icons)
  };

  return (
    <div className='bg-gradient-to-b from-white-100 to-white min-h-screen flex justify-center md:my-32'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <section className='py-8 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-start mx-auto w-full'>
            <div className='lg:w-1/2 lg:pr-6 text-center'>
              <h1 className='text-2xl md:text-5xl font-bold mb-4 text-amber-800 text-center lg:text-center md:my-8 md:ml-24'>
                {project.title}
              </h1>
              <p className='mb-4 text-sm md:text-base text-black lg:text-center lg:ml-24'>
                {project.fullDescription}
              </p>
            </div>
            <div className='lg:w-2/2 mt-4 lg:mt-0 lg:ml-36'>
              <div
                className='cursor-pointer transition-transform duration-300 hover:scale-105'
                onClick={() => openFullView(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className='w-full h-auto object-cover rounded-lg'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {(project.galleryImages || project.videos) && (
          <section className='bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 w-full'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-xl mb-8 text-center text-amber-800 md:my-6'>
              Gallery
            </h2>
            <div className='w-36 h-1 bg-gradient-to-r bg-amber-700 hover:bg-amber-700 mx-auto mb-8'></div>

            {/* Videos Section */}
            {project.videos && project.videos.length > 0 && (
              <div className='mb-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {project.videos.map((video, index) => (
                    <div key={index} className='relative aspect-video w-full'>
                      <video
                        className='w-full h-full rounded-lg object-cover'
                        controls
                        poster={video.thumbnail}
                      >
                        <source src={video.url} type='video/mp4' />
                        Your browser does not support the video tag.
                      </video>
                      <p className='mt-2 text-center text-gray-700'>
                        {video.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Images Grid */}
            {project.galleryImages && (
              <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:mt-16 w-full'>
                {project.galleryImages.map((galleryImage, index) => (
                  <div
                    key={index}
                    className='relative overflow-hidden aspect-square w-full cursor-pointer'
                    onClick={() => openFullView(galleryImage.image)}
                  >
                    <Image
                      src={galleryImage.image}
                      alt={galleryImage.alt}
                      fill
                      sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'
                      className='object-contain transition duration-300 ease-in-out hover:scale-105'
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Highlights Section */}
        {project.highlights && (
          <div className='bg-gray-200 py-12 px-4 sm:px-6 lg:px-8 w-full'>
            {/* ... (rest of your highlights section) ... */}
          </div>
        )}

        {/* Configuration Section */}
        <section className='bg-white py-12 px-4 sm:px-6 lg:px-8 w-full'>
          {/* ... (rest of your configuration section) ... */}
        </section>

        {/* Full View Modal */}
        {fullViewImage && (
          <div
            className='fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50'
            onClick={closeFullView}
          >
            <div className='relative w-full h-full max-w-5xl max-h-5xl p-4'>
              <Image
                src={fullViewImage}
                alt='Full view'
                fill={true}
                style={{ objectFit: "contain" }}
              />
              <button
                className='absolute top-4 right-4 text-white text-4xl hover:text-red-600 transition-colors md:text-6xl'
                onClick={closeFullView}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
