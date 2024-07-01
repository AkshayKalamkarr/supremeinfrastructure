// import React from "react";
// import Client from "../components/Client";

// const ClientPage = () => {
//   return (
//     <div>
//       <Client />
//     </div>
//   );
// };

// export default ClientPage;


import { cn } from "../lib/utils";
import Marquee from "../components/magicui/marquee";
import allana from '../assets/clients-img/1_Allana.png'
import atlantas from '../assets/clients-img/2_Atlantas.png'
import mcgm from '../assets/clients-img/3_MCGM.png'
import siemens from '../assets/clients-img/5_Siemens.png'
import tatasolar from '../assets/clients-img/6_Tata Power Solar.png'
import tatapower from '../assets/clients-img/7_Tata power.png'
import toshiba from '../assets/clients-img/8_Toshiba.png'
import tpwodl from '../assets/clients-img/9_TPSODL-06.png'

const reviews = [
  {
    img: allana,
  },
  {
    img: atlantas
  },
  {
    img: mcgm,
  },
  {
    img: siemens,
  },
  {
    img: tatasolar,
  },
  {
    img: toshiba,
  },
  {
    img: tatapower,
  },
  {
    img: tpwodl,
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-64 h-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img className='w-full h-full object-cover' alt='' src={img} />
    </figure>
  );
};

const ClientPage = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review, index) => (
          <ReviewCard key={index + firstRow.length} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  );
};

export default ClientPage;
