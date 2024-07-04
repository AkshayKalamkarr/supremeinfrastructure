import React from "react";
import aboutus from "../assets/team/about us.jpg";
const About = () => {
  return (
    // <div
    //   id='about'
    //   className='max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-28'
    // >
    //   <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full'>
    //     {/* Left side (image) */}
    //     <div className='order-2 md:order-1 h-full flex items-center justify-center'>
    //       <img
    //         className='md:max-w-full md:h-auto rounded-lg shadow-lg'
    //         src={aboutus}
    //         alt='About Us'
    //       />
    //     </div>
    //     {/* Right side (information) */}
    //     <div className='order-1 md:order-2 h-full flex flex-col justify-center'>
    //       <h1 className='text-4xl text-slate-900 font-bold mb-4'>
    //         ABOUT US
    //       </h1>
    //       <p className='text-base text-gray-800 leading-relaxed text-left'>
    //         Established in Mumbai (Maharashtra), India in the Year 2017. Supreme
    //         infrastructure Company was envisaged and developed under the
    //         leadership of{" "}
    //         <span className='font-semibold'>Mr. Lakshminarayanan Pillai</span>{" "}
    //         to provide good Quality Civil & Engineering Services.
    //         <br />
    //         <br />
    //         Supreme infrastructure is engaged in providing various kind of civil
    //         construction service that include Building construction, substation,
    //         cable trenching, horticulture Garden design & Maintenance, interior
    //         designing, Turnkey projects, Rain water Harvesting, Sewage waste
    //         management system, Government Liaising works.
    //         <br />
    //         <br />
    //         These are offered as per requirement of our clients. We use high
    //         quality raw material through our service in every filed, as we
    //         believe in providing quality centric Services & providing Good
    //         quality in the most economical way is our main motto.
    //         <br />
    //         <br />
    //         Safety is another important part of our organization, where we
    //         impart site safety training to each of our staff. Our team of
    //         engineers & professional are experienced from many years in the
    //         field of civil Engineering.
    //         <br />
    //         <br />
    //         Further our team is guided & driven by the will to provide best
    //         Quality Services in most economical way. Our Team knowledge and
    //         experience in providing quality service & client satisfaction is
    //         unmatchable. We use latest & modern machinery in providing our
    //         services. We provide these services in all parts of the country and
    //         leave a long standing relation with our esteemed clients.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white min-h-screen p-4 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between">   
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight ">
          About Us
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
          Supreme Infrastructure
        </h2>
        <p className="text-gray-600 mb-8">
          Established in Mumbai (Maharashtra), India in the Year 2017. Supreme infrastructure Company was envisaged and developed under the leadership of <span className="font-bold">Mr. Lakshminarayanan Pillai</span>  to provide good Quality Civil & Engineering Services.

          Supreme infrastructure is engaged in providing various kind of civil construction service that include Building construction, substation, cable trenching, horticulture Garden design & Maintenance, interior designing, Turnkey projects, Rain water Harvesting, Sewage waste management system, Government Liaising works.

          These are offered as per requirement of our clients. We use high quality raw material through our service in every filed, as we believe in providing quality centric Services & providing Good quality in the most economical way is our main motto.

          Safety is another important part of our organization, where we impart site safety training to each of our staff. Our team of engineers & professional are experienced from many years in the field of civil Engineering.

          Further our team is guided & driven by the will to provide best Quality Services in most economical way. Our Team knowledge and experience in providing quality service & client satisfaction is unmatchable.We use latest & modern machinery in providing our services. We provide these services in all parts of the country and leave a long standing relation with our esteemed clients.
        </p>
        {/* <button className="bg-black text-white px-6 py-3 rounded-full flex items-center">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        Chat Now
      </button> */}
      </div>
      <div className="w-full md:w-1/2 relative">
        <div className="aspect-w-4 aspect-h-3">
          <img
            src={aboutus}
            alt="Modern buildings"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <span className="text-6xl md:text-7xl lg:text-8xl font-bold">30k</span>
      </div> */}
      </div>
    </div>
  );
};

export default About;
