import IFrameComponent from "@/components/IFrameComponent";
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

  return (
    <div className="bg-gradient-to-b from-white-100 to-white min-h-screen flex justify-center md:my-32">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className=' py-8'>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-1/2 lg:pr-6 text-center'>
              <h1 className='text-2xl md:text-3xl font-bold mb-4 text-black text-center lg:text-center'>
                {project.title}
              </h1>
              <p className='mb-4 text-sm md:text-base text-black'>
                {project.fullDescription}
              </p>
            </div>
            <div className='lg:w-1/2 mt-4 lg:mt-0'>
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

      </div>
    </div>
  );
}