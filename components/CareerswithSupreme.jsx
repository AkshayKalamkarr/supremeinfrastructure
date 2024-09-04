'use client'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const CareerswithSupreme = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay was prevented. User interaction required to play the video.");
            });
        }
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen p-4 bg-gray-200">
            <Head>
                <title>Careers with Supreme</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col md:flex-row max-w-6xl w-full rounded-lg overflow-hidden shadow-lg">
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <video 
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        loop 
                        muted 
                        playsInline 
                        poster="/images/video-poster.jpg"
                    >
                        <source src="/videos/career.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <button 
                            className="bg-white text-black px-4 py-2 rounded-full opacity-75 hover:opacity-100 transition duration-300"
                            onClick={() => videoRef.current.play()}
                        >
                            Play Video
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-12 bg-white">
                    <h2 className="text-blue-600 text-xs md:text-sm mb-4 md:mb-6 text-center">CAREERS WITH SUPREME</h2>
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center">It's time to make a move.</h1>
                    <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6 text-center">
                        Supreme needs people-readers and problem-solvers, creators and collaborators, thinkers, doers, and innovators. Above all, we need leaders.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base mb-6 md:mb-8 text-center">
                        That's where you come in.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                        <Link href="/contact" className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition duration-300 text-center">
                            JOIN SUPREME
                        </Link>
                        <Link href="/contact/career" className="bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition duration-300 flex items-center justify-center">
                            <span>COME TO BELONG</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CareerswithSupreme