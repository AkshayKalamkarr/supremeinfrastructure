import React from "react";

const ProjectPage = ({ imageSrc, imageAlt, textSide, paragraph }) => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full mx-auto px-4 md:px-6 lg:px-8 mb-8">
      {/* Image */}
      <div className={`w-full md:w-1/2 lg:w-5/12 mb-4 md:mb-0 ${textSide === "left" ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* Text */}
      <div className={`w-full md:w-1/2 lg:w-5/12 px-4 ${textSide === "left" ? "order-1 md:order-2" : "order-2 md:order-1"}`}>
        <p className="text-lg text-gray-800">{paragraph}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
