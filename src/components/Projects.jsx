// import React from 'react';
// import { SiTata } from 'react-icons/si';
// import { MdWebAsset } from 'react-icons/md';
// import { BsStack } from 'react-icons/bs';
// import background from '../assets/background/background.jpg'; // Import the background image
// import { Link } from 'react-router-dom';
// import tata from '../pages/tata-page'


// const ServiceCard = ({ icon, title, to }) => (
//   <Link to={to} className="text-black">
//     <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//       <div className="text-3xl text-yellow-500 mb-4">{icon}</div>
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <button className="mt-4 text-sm text-gray-600 hover:text-yellow-500">MORE</button>
//     </div>
//   </Link>
// );

// const Projects = () => {
//   return (
//     <div className="bg-yellow-400 min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
//          style={{
//            backgroundImage: `url(${background})`,
//          }}>
//       <div className="max-w-6xl w-full px-4 md:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <ServiceCard icon={<SiTata />} title="TATA POWER" to="/tata" />
//           <ServiceCard icon={<MdWebAsset />} title="ATLANTAS" to="/atlantas" />
//           <ServiceCard icon={<SiTata />} title="COACT IMPRINTS" to="/coact-imprints" />
//           <ServiceCard icon={<BsStack />} title="GREENWORLD" to="/greenworld" />
//         </div>
//       </div>
      
//       <div className="mt-8 text-center text-sm text-gray-600">
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
import { SiTata } from 'react-icons/si';
import { MdWebAsset } from 'react-icons/md';
import { BsStack } from 'react-icons/bs';
import background from '../assets/background/background.jpg'; // Import the background image
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, to }) => (
  <Link to={to} className="text-black">
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="text-3xl text-yellow-500 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <button className="mt-4 text-sm text-gray-600 hover:text-yellow-500">MORE</button>
    </div>
  </Link>
);

const Projects = () => {
  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
         style={{
           backgroundImage: `url(${background})`,
         }}>
      <div className="max-w-6xl w-full px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={<SiTata />} title="TATA POWER" to="/Tata" />
          <ServiceCard icon={<MdWebAsset />} title="ATLANTAS" to="/atlantas" />
          <ServiceCard icon={<SiTata />} title="COACT IMPRINTS" to="/coact-imprints" />
          <ServiceCard icon={<BsStack />} title="GREENWORLD" to="/greenworld" />
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-600">
        Image by Freepik
      </div>
    </div>
  );
};

export default Projects;

