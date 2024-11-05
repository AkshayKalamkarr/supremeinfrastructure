import IFrameComponent from "@/components/IFrameComponent";
import { Fence,FlipHorizontal, BetweenVerticalStart,Lightbulb,Armchair,Component,Wallpaper,Home,Activity, Banknote, FileCheck, CheckSquare,Dumbbell,Utensils,House,GraduationCap,
  LampCeiling,Library,Scale3D,Layers2,Waves,ShowerHead,Lamp,InspectionPanel ,Pickaxe,LampCeilingIcon,Columns2,Palette,Timer,Sticker,AudioLines,LogIn,Book,FlipHorizontal2,
PanelBottom,History,Sprout,Coffee,HandCoins,Users,Presentation} from 'lucide-react';
import { projects, getProjectBySlug } from "../../../../data/commercialprojects";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const highlightsIcon = {
    Banknote: Banknote,
    FileCheck: FileCheck,
    CheckSquare: CheckSquare,
    FlipHorizontal:FlipHorizontal,
    BetweenVerticalStart:BetweenVerticalStart,
    Lightbulb:Lightbulb,
    Activity:Activity,
    Armchair:Armchair,
    Wallpaper:Wallpaper,
    Component:Component,
    Fence:Fence,
    Dumbbell:Dumbbell,
    Utensils:Utensils,
    House:House,
    GraduationCap:GraduationCap,
    LampCeiling:LampCeiling,
    Home:Home,
    Library:Library,
    Scale3D:Scale3D,
    Layers2:Layers2,
    Waves:Waves,
    ShowerHead:ShowerHead,
    Lamp:Lamp,
    Pickaxe:Pickaxe,
    InspectionPanel:InspectionPanel,
    LampCeilingIcon:LampCeilingIcon,
    Columns2:Columns2,
    Palette:Palette,
    Timer:Timer,
    Sticker:Sticker,
    AudioLines:AudioLines,
    LogIn:LogIn,
    Book:Book,
    FlipHorizontal2:FlipHorizontal2,
    PanelBottom:PanelBottom,
    History:History,
    Sprout:Sprout,
    Coffee:Coffee,
    HandCoins:HandCoins,
    Users:Users,
    Presentation:Presentation,

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

        {(project.galleryImages || project.videos) && (
          <section className='bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 w-full'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-xl mb-8 text-center text-amber-700 md:my-6">
              Gallery
            </h2>
            <div className="w-36 h-1 bg-gradient-to-r bg-cyan-500 hover:bg-cyan-600 mx-auto mb-8"></div>

            {/* Videos Section */}
            {project.videos && project.videos.length > 0 && (
              <div className="mb-12">
                {/* <h3 className="text-2xl font-semibold mb-6 text-center text-orange-800">Videos</h3> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.videos.map((video, index) => (
                    <div key={project.id} className="relative aspect-video w-full">
                      <video
                        className="w-full h-full rounded-lg object-cover"
                        controls
                        poster={video.thumbnail}
                      >
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="mt-2 text-center text-gray-700">{video.title}</p>
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
                    className='relative overflow-hidden aspect-square w-full'
                  >
                    <Image
                      src={galleryImage.image}
                      alt={galleryImage.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className='object-contain transition duration-300 ease-in-out hover:scale-105'
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {project.highlights && (
          <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-xl mb-8 text-center text-amber-700 md:my-6">
              Project Highlights
            </h2>
            <div className="w-36 h-1 bg-gradient-to-r bg-amber-500 hover:bg-cyan-600 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
              {project.highlights.map((item, index) => {
                const IconComponent = highlightsIcon[item.icon];
                return (
                  <div
                    key={index}
                    className="lg:my-8 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  >
                    {IconComponent && <IconComponent className="w-8 h-8 mb-4 text-cyan-800" />}
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
          <div className="w-36 h-1 bg-gradient-to-r bg-amber-700 hover:bg-yellow-600 mx-auto mb-8"></div>

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