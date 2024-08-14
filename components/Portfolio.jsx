import React from 'react';

const Portfolio = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-auto bg-white gap-8 p-4 md:p-36">
            {/* Left Image */}
            <div className="w-full md:w-1/3 h-64 md:h-[600px] relative">
                <img
                    src="/images/demoimg.jpg"
                    alt="Ae'o Ward Village"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full">
                    <h2 className="text-xl md:text-2xl font-bold">Ae'o Ward Village</h2>
                    <p className="text-sm md:text-base">Honolulu, HI</p>
                </div>
            </div>

            {/* Middle Image */}
            <div className="w-full md:w-1/3 h-64 md:h-[600px] relative">
                <img
                    src="/images/demoimg.jpg"
                    alt="Stadium"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full">
                    <h2 className="text-xl md:text-2xl font-bold">Ae'o Ward Village</h2>
                    <p className="text-sm md:text-base">Honolulu, HI</p>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/3 h-auto flex flex-col md:flex-cols-2">
                {/* Top Image */}
                <div className="w-full h-64 md:h-[400px] lg:h-[600px] relative">
                    <img
                        src="/images/demoimg.jpg"
                        alt="Modern Building"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full">
                        <h2 className="text-xl md:text-2xl font-bold">Ae'o Ward Village</h2>
                        <p className="text-sm md:text-base">Honolulu, HI</p>
                    </div>
                </div>
                {/* Text Content */}
                <div className="w-full h-auto p-6 flex flex-col justify-center bg-white text-right mt-4 md:mt-0">
                    <h2 className="text-xl md:text-3xl font-bold mb-4">A portfolio with purpose.</h2>
                    <a href="#" className="text-blue-600 flex items-center justify-end">
                        SEE MORE
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
