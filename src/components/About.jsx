import React from "react";
import aboutus from "../assets/team/about us.jpg";
const About = () => {
  return (
    // <div className="max-w-[1800] h-screen flex items-center justify-center bg-gray-100">
    //     <div className="">
    //     <h1 className="text-4xl text-slate-900 font-bold">ABOUT COMPANY</h1>
    //     </div>
    //     <div className="">
    //         {/* <img src={aboutus} alt="" /> */}
    //     </div>
    // </div>

    <div
      id='about'
      className='max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-28'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full'>
        {/* Left side (image) */}
        <div className='order-2 md:order-1 h-full flex items-center justify-center'>
          <img
            className='md:max-w-full md:h-auto rounded-lg shadow-lg'
            src={aboutus}
            alt='About Us'
          />
        </div>
        {/* Right side (information) */}
        <div className='order-1 md:order-2 h-full flex flex-col justify-center'>
          <h1 className='text-4xl text-slate-900 font-bold mb-4'>
            ABOUT US
          </h1>
          <p className='text-base text-gray-800 leading-relaxed text-left'>
            Established in Mumbai (Maharashtra), India in the Year 2017. Supreme
            infrastructure Company was envisaged and developed under the
            leadership of{" "}
            <span className='font-semibold'>Mr. Lakshminarayanan Pillai</span>{" "}
            to provide good Quality Civil & Engineering Services.
            <br />
            <br />
            Supreme infrastructure is engaged in providing various kind of civil
            construction service that include Building construction, substation,
            cable trenching, horticulture Garden design & Maintenance, interior
            designing, Turnkey projects, Rain water Harvesting, Sewage waste
            management system, Government Liaising works.
            <br />
            <br />
            These are offered as per requirement of our clients. We use high
            quality raw material through our service in every filed, as we
            believe in providing quality centric Services & providing Good
            quality in the most economical way is our main motto.
            <br />
            <br />
            Safety is another important part of our organization, where we
            impart site safety training to each of our staff. Our team of
            engineers & professional are experienced from many years in the
            field of civil Engineering.
            <br />
            <br />
            Further our team is guided & driven by the will to provide best
            Quality Services in most economical way. Our Team knowledge and
            experience in providing quality service & client satisfaction is
            unmatchable. We use latest & modern machinery in providing our
            services. We provide these services in all parts of the country and
            leave a long standing relation with our esteemed clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
