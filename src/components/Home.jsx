import React from "react";
import Lottie from "lottie-react";
import Worker from "../assets/animations/Worker.json";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Team from "./Team";
import Client from "./Client";
import Footer from "./Footer";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className='w-full max-w-7xl mx-auto'>
        {/* Main Content Grid */}
        <div className='grid md:grid-cols-2 gap-8 items-center  '>
          {/* Left side (text content) */}
          <div className='md:h-auto '>
            <div className='py-20'>
              <h1 className='text-4xl text-slate-900 font-extrabold mx-auto lg:text-6xl px-2'>
                <span className='text-transparent bg-gradient-to-r bg-clip-text from-slate-700 to-yellow-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'>
                  Welcome To SUPREME INFRASTRUCTURE
                </span>
              </h1>
              <br />
              <h3 className='text-xl lg:text-4xl text-slate-900 font-bold  mx-auto px-6'>
                <span className='text-transparent bg-gradient-to-r bg-clip-text from-slate-800 to-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500'>
                  We Are Team of Talented, Innovative Designers, Engineers and
                  Horticulturists
                </span>
              </h3>
            </div>
          </div>

          {/* Right side (animated image) */}
          <div className='md:h-auto'>
            <div className='py-8 md:py-0'>
              <div className='mx-auto max-w-lg md:max-w-none'>
                <Lottie animationData={Worker} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional sections (About and Services) */}
      <div id='about'>
        <About />
      </div>
      <div id='services'>
        <Services />
      </div>
      {/* <div id='Contact'>
        <Contact />
      </div> */}
      <div id='projects'>
        <Projects />
      </div>
      <div id='Client'>
        <Client />
      </div>
      <div id='Contact'>
        <Contact />
      </div>
      <div id='team'>
        <Team />
      </div>

      <div id='Footer'>
        <Footer />
      </div>

      {/* <div id='portfolio'>
        <Portfolio />
      </div> */}
    </>
  );
};

export default Home;
