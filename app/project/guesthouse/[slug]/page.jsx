import IFrameComponent from "@/components/IFrameComponent";
import { Building2, Home, Banknote, FileCheck, CheckSquare } from 'lucide-react';
import { guestprojects, getProjectBySlug } from "../../../../data/guesthousedata";
import Image from "next/image";
import Link from "next/link";


export async function generateStaticParams() {
  return guestprojects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }
  const highlightsIcon = {
    Building2: Building2,
    Home: Home,
    Banknote: Banknote,
    FileCheck: FileCheck,
    CheckSquare: CheckSquare
  };

  return (
    <div className="bg-gradient-to-b from-white-100 to-white min-h-screen flex justify-center md:my-32">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <section className='py-8 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-start mx-auto w-full'>
            <div className='lg:w-1/2 lg:pr-6 text-center'>
              <h1 className='text-2xl md:text-5xl font-bold mb-4 text-amber-700 text-center lg:text-center md:my-8 md:ml-24'>
                {project.title}
              </h1>
              <p className='mb-4 text-sm md:text-base text-black lg:text-center lg:ml-24'>
                {project.fullDescription}
              </p>
              {/* <p className='mb-4 text-sm md:text-lg font-semibold text-cyan-700 text-center lg:text-center md:mt-8'>
              {project.tagLine}
            </p> */}

            </div>
            <div className='lg:w-2/2 mt-4 lg:mt-0 lg:ml-36'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className='w-full h-auto object-cover rounded-lg'
              />
            </div>
          </div>
        </section>

        {project.galleryImages && (
          <section className='bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 w-full'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-xl mb-8 text-center text-amber-700 md:my-6">
              Gallery
            </h2>
            <div className="w-36 h-1 bg-gradient-to-r bg-cyan-500 hover:bg-cyan-600 mx-auto mb-8"></div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:mt-16 w-full'>
              {project.galleryImages.map((galleryImage, index) => (
                <div
                  key={index}  // Adding key here
                  className='relative overflow-hidden aspect-square w-full'
                >
                  <Image
                    src={galleryImage.image}
                    alt={galleryImage.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className='object-contain transition duration-300 ease-in-out hover:scale-105'
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.highlights && (
          <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-xl mb-8 text-center text-amber-700 md:my-6">
              Project Highlights
            </h2>
            <div className="w-36 h-1 bg-gradient-to-r bg-cyan-500 hover:bg-cyan-600 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
              {project.highlights.map((item, index) => {
                const IconComponent = highlightsIcon[item.icon];
                return (
                  <div
                    key={index}
                    className="lg:my-8 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  >
                    {IconComponent && <IconComponent className="w-8 h-8 mb-4 text-cyan-400" />}
                    <p className="text-sm font-medium text-gray-900">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Configuration Section */}
        <section className='bg-white py-12 px-4 sm:px-6 lg:px-8 w-full'>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-xl mb-8 text-center text-amber-700 md:my-6">
            Configuration
          </h2>
          <div className="w-36 h-1 bg-gradient-to-r bg-amber-700 hover:bg-cyan-600 mx-auto mb-8"></div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-navy-700 text-black md:text-center">
                  <th className="py-3 px-4 text-left md:text-center">Approx Area</th>
                  <th className="py-3 px-4 text-left md:text-center">Project duration</th>
                  <th className="py-3 px-4 text-left md:text-center">Price</th>
                </tr>
              </thead>
              <tbody>
                {project.configuration.map((config, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-4 md:text-center">{config.flat}</td>
                    <td className="py-3 px-4 md:text-center">{config.carpet}</td>
                    <td className="py-3 px-4 md:text-center">
                      <Link href="/contact" className="bg-gradient-to-r from-amber-700 to-yellow-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                        Get Quote
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>

  );
}