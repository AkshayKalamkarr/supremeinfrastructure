import React from 'react'

const SupremeQuote = () => {
  return (
    <div className='w-full h-[500px] flex items-center justify-center bg-gray-100 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-gray-200 opacity-50 rounded-full scale-[2] transform -translate-x-1/4 -translate-y-1/4'></div>
      <div className='max-w-4xl mx-4 z-10 animate-fade-in-up'>
        <p className='text-2xl md:text-3xl lg:text-4xl text-center font-serif'>
          Supreme infrastructure is engaged in providing various kind of civil construction
          service that include Building construction, substation, cable trenching,
          horticulture Garden design & Maintenance, interior designing, Turnkey projects,
          Rain water Harvesting, Sewage waste management system, Government Liaising works.
        </p>
      </div>
    </div>
  )
}

export default SupremeQuote