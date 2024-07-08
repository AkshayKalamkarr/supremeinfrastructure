import React from "react";
import aboutus from "../assets/team/about-us.jpg";
const About = () => {
  return (

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
      </div>
      <div className="w-full md:w-1/2 relative">
        <div className="aspect-w-4 aspect-h-3">
          <img
            src={aboutus}
            alt="Modern buildings"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;


// import React from "react";
// import aboutus from "../assets/team/about-us.jpg";

// const About = () => {
//   return (
//     <div
//       className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
//       style={{ backgroundImage: `url(${aboutus})` }}
//     >
//       <div className="bg-white bg-opacity-90 p-4 md:p-8 lg:p-12 rounded-lg max-w-5xl mx-auto text-center">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900">
//           About Us
//         </h1>
//         <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
//           Supreme Infrastructure
//         </h2>
//         <p className="text-gray-600 mb-8">
//           Established in Mumbai (Maharashtra), India in the Year 2017. Supreme infrastructure Company was envisaged and developed under the leadership of <span className="font-bold">Mr. Lakshminarayanan Pillai</span>  to provide good Quality Civil & Engineering Services.

//         //           Supreme infrastructure is engaged in providing various kind of civil construction service that include Building construction, substation, cable trenching, horticulture Garden design & Maintenance, interior designing, Turnkey projects, Rain water Harvesting, Sewage waste management system, Government Liaising works.

//         //           These are offered as per requirement of our clients. We use high quality raw material through our service in every filed, as we believe in providing quality centric Services & providing Good quality in the most economical way is our main motto.

//         //           Safety is another important part of our organization, where we impart site safety training to each of our staff. Our team of engineers & professional are experienced from many years in the field of civil Engineering.

//         //           Further our team is guided & driven by the will to provide best Quality Services in most economical way. Our Team knowledge and experience in providing quality service & client satisfaction is unmatchable.We use latest & modern machinery in providing our services. We provide these services in all parts of the country and leave a long standing relation with our esteemed clients.

//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
