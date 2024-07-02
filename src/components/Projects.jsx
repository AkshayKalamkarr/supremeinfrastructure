import React from "react";
import ProjectPage from "../pages/Project-Page"; // Import ProjectPage component
import tata from '../assets/clients-img/7_Tata power.png';
import atlantas from '../assets/clients-img/2_Atlantas.png';

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-purple-600 flex flex-col justify-center items-center">
      {/* Responsive Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
        Our Projects
      </h1>

      {/* Projects Boxes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-start">
        {/* Box 1 */}
        <ProjectPage
          imageSrc={tata}
          imageAlt="Image 1"
          textSide="right"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis ligula et consequat rhoncus."
        />

        {/* Box 2 */}
        <ProjectPage
          imageSrc={atlantas}
          imageAlt="Image 2"
          textSide="left"
          paragraph="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        />

        {/* Box 3 */}
        {/* <ProjectPage
          imageSrc={} // Replace with actual image source
          imageAlt="Image 3"
          textSide="right"
          paragraph="Nullam scelerisque tortor sit amet libero luctus condimentum. Duis dignissim risus a nulla placerat, eget fermentum dui feugiat."
        /> */}

        {/* Box 4 */}
        {/* <ProjectPage
          imageSrc="image4.jpg" // Replace with actual image source
          imageAlt="Image 4"
          textSide="left"
          paragraph="Sed at metus id velit ullamcorper dignissim. Integer euismod auctor felis, id consequat tortor efficitur ut."
        /> */}
      </div>
    </div>
  );
};

export default Projects;
