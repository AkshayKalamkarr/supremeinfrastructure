// import  { useState } from "react";
// import { GrMenu } from "react-icons/gr";
// import { FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";



// const Navbar = () => {
//     const [click,setClick]=useState(false);
//     const handleClick=()=>setClick(!click)
//     const content = <>
//         <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-500 transition">
//             <ul className="text-center text-xl p-20">
//             <Link spy={true} smooth={true} to="/Home"><li className="my-4 py-4 border-b border-slate-950 hover:bg-slate-800 hover:rounded">Home</li></Link>
//             <Link spy={true} smooth={true} to="About"><li className="my-4 py-4 border-b border-slate-950 hover:bg-slate-800 hover:rounded">About</li></Link>
//             <Link spy={true} smooth={true} to="Servives"><li className="my-4 py-4 border-b border-slate-950 hover:bg-slate-800 hover:rounded">Services</li></Link>
//             <Link spy={true} smooth={true} to="Portfolio"><li className="my-4 py-4 border-b border-slate-950 hover:bg-slate-800 hover:rounded">Portfolio</li></Link>
//             <Link spy={true} smooth={true} to="Team"><li className="my-4 py-4 border-b border-slate-950 hover:bg-slate-800 hover:rounded">Team</li></Link>
//             <Link spy={true} smooth={true} to="Projects"><li className="my-4 py-4 border-b border-slate-950 hover:bg-slate-800 hover:rounded">Projects</li></Link>
//             <Link spy={true} smooth={true} to="Contact"><li className="my-4 py-4 border-b border-slate-950 hover:bg-slate-800 hover:rounded">Contact Us</li></Link>
//             </ul>
//         </div>
//     </>
//     return (
//         <nav>
//             <div className="h-10vh flex justify-between z-50 bg-slate-950 text-white lg:py-5 px-20 py-4 flex-1">
//                 <div className="flex items-center flex-1">
//                     <span className="text-3xl font-bold">Logo</span>
//                 </div>
//                 <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
//                     <div className="flex-10">
//                         <ul className="flex gap-8 mr-16 text-[18px]">
//                             <Link spy={true} smooth={true} to="Home">
//                             <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Home</li>
//                             </Link>
//                             <Link spy={true} smooth={true} to="About">
//                             <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">About</li>
//                             </Link>
//                             <Link spy={true} smooth={true} to="Services">
//                             <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Services</li>
//                             </Link>
//                             <Link spy={true} smooth={true} to="Portfolio">
//                             <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Portfolio</li>
//                             </Link>
//                             <Link spy={true} smooth={true} to="Team">
//                             <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Team</li>
//                             </Link>
//                             <Link spy={true} smooth={true} to="Projects">
//                             <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Projects</li>
//                             </Link>
//                             <Link spy={true} smooth={true} to="Contact">
//                             <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Contact us</li>
//                             </Link>
//                         </ul>
//                     </div>
//                 </div>
//                 <div>
//                     {click && content}
//                 </div>
//                 <button className="block sm:hidden transition" onClick={handleClick}>{click ? <FaTimes/> : < GrMenu/>}</button>
//             </div>
//         </nav >
//     )
// }

// export default Navbar








// //////////////////////////////////////
// import React from "react";
// import Lottie from "lottie-react";
// import Worker from '../assets/Worker.json'
// import About from "./About";
// import Services from "./Services";

// const Home = () => {
//     return (
//         <>
//             {/* <div className="max-w-[1800] mx-auto grid md:grid-cols-2">
//             <div className="h-194 py-20">
//                 <h1 className="text-6xl text-slate-900 font-extrabold mx-auto max-w-6xl">
//                     <span className="text-transparent bg-gradient-to-r bg-clip-text from-slate-700 to-yellow-600">Welcome to Supreme Infrastructure</span>
//                 </h1><br />
//                 <h3 className="text-4xl text-slate-900 font-bold mx-auto max-w-4xl">
//                     <span className="text-transparent bg-gradient-to-r bg-clip-text from-slate-800 to-slate-800">We Are Team of Talented, Innovative Designers, Engineers and Horticulturist</span>    
//                 </h3>
//             </div>

//             <div className="h-124">
//                 <div>
//                     <Lottie animationData={Worker} />
//                 </div>
//             </div>
//         </div> */}
//             <div className="max-w-screen-2xl mx-auto min-h-96 grid md:grid-cols-2 items-center gap-8 px-4 md:px-8">
//                 {/* Left side */}
//                 <div className="md:h-auto">
//                     <div className="py-20">
//                         <h1 className="text-6xl text-slate-900 font-extrabold max-w-6xl mx-auto">
//                             <span className="text-transparent bg-gradient-to-r bg-clip-text from-slate-700 to-yellow-600">Welcome to Supreme Infrastructure</span>
//                         </h1>
//                         <br />
//                         <h3 className="text-4xl text-slate-900 font-bold max-w-4xl mx-auto">
//                             <span className="text-transparent bg-gradient-to-r bg-clip-text from-slate-800 to-slate-800">We Are Team of Talented, Innovative Designers, Engineers and Horticulturists</span>
//                         </h3>
//                     </div>
//                 </div>

//                 {/* Right side (animated image) */}
//                 <div className="md:h-auto">
//                     <div className="py-8 md:py-0">
//                         <div className="mx-auto max-w-lg md:max-w-none">
//                             <Lottie animationData={Worker} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <About />
//             <Services/>
//         </>

//     )
// }
// export default Home




// import React from "react";

// const Services = () => {
//     return (
//         <>
//             <div className="min-h-screen bg-slate-500">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
//                     <h1 className="text-4xl text-slate font-bold mb-4">OUR SERVICES</h1>
//                     <h3 className="text-xl text-slate">Our Exclusive Services We Offer</h3>
//                 </div>
//             </div>



//         </>
//     )
// }

// export default Services


const Team=()=>{
    return(
        <h1>this is team page</h1>
    )
}

export default Team