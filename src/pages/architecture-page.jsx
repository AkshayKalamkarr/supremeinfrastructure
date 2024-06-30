import React from "react";

const Architecturalpage=()=>{
    return(
        <div className="min-h-screen bg-slate-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
                <h1 className="text-4xl text-slate font-bold mb-4">ARCHITECTURAL DESIGN</h1>
                {/* <h3 className="text-xl text-slate">Our Exclusive Services We Offer</h3> */}
            </div>

            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <img src={civil1} alt="" className="mb-4 rounded-lg" />
                        <h2 className="text-xl font-bold text-slate-800 mb-2">CIVIL CONSTRUCTION</h2>
                        <p className="text-slate-600">Using latest technology to make efficient use of spaces, Better designing concepts.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}