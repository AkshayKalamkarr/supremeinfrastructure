import React from "react";
import interior1 from "../../assets/images/interiorimages/interior1.jpg";
import interior2 from "../../assets/images/interiorimages/interior2.jpg";
import interior3 from "../../assets/images/interiorimages/interior3.jpg";
import interior4 from "../../assets/images/interiorimages/interior4.jpg";
import interior5 from "../../assets/images/interiorimages/interior5.jpg";
import interior7 from "../../assets/images/interiorimages/interior7.jpg";
import interior8 from "../../assets/images/interiorimages/interior8.jpg";
import interior9 from "../../assets/images/interiorimages/interior9.jpg";

const Interiorpage = () => {
  return (
    <div className='min-h-screen bg-slate-500'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-slate font-bold mb-4'>Interior Design</h1>
      </div>

      <div className='max-w-screen-2xl mx-auto px-4 md:px-8 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
          {[
            { image: interior1, title: 'SPORTS CLUB INTERIOR' },
            { image: interior2, title: 'INTERIOR DESIGN' },
            { image: interior3, title: 'INTERIOR DESIGN' },
            { image: interior4, title: 'INTERIOR DESIGN' },
            { image: interior5, title: 'INTERIOR DESIGN' },
            // { image: interior6, title: 'INTERIOR DESIGN' },
            { image: interior7, title: 'INTERIOR DESIGN' },
            { image: interior8, title: 'INTERIOR DESIGN' },
            { image: interior9, title: 'INTERIOR DESIGN' },
          ].map((item, index) => (
            <div key={index} className='bg-white p-4 shadow-md rounded-lg'>
              <img src={item.image} alt='' className='mb-4 rounded-lg w-full h-auto' />
              <h2 className='text-xl font-bold text-slate-800 mb-2'>{item.title}</h2>
              <p className='text-slate-600'>
                Using latest technology to make efficient use of spaces, Better designing concepts.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interiorpage;
