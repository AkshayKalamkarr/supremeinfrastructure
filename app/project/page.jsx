'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects/projectData'; // Adjust the import path as needed

export default function Project() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    useEffect(() => {
        if (selectedProject) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => 
                    (prevIndex + 1) % selectedProject.galleryImages.length
                );
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [selectedProject]);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar */}
            <aside className="w-full md:w-1/6 bg-gray-200 p-4">
                <h2 className="text-xl font-semibold mb-4 text-center md:my-12">Projects</h2>
                <ul className="flex flex-wrap md:flex-col justify-center">
                    {projects.map((project, index) => (
                        <li key={index} className="w-1/2 md:w-full mb-2 p-2 md:p-6 text-center">
                            <button
                                onClick={() => handleProjectClick(project)}
                                className={`text-gray-700 hover:text-gray-900 ${selectedProject?.title === project.title ? 'font-bold' : ''}`}
                            >
                                {project.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-4 md:p-8 text-black">
                {selectedProject ? (
                    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                        <div className="h-[50vh] md:h-[50vh] bg-cover bg-center relative" style={{ backgroundImage: `url('${selectedProject.galleryImages[currentImageIndex].image}')` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                                <h1 className="text-3xl md:text-6xl font-extrabold text-white text-center leading-tight px-4">
                                    <span className="text-blue-400">{selectedProject.title} PROJECT</span>
                                </h1>
                            </div>
                        </div>

                        <div className="container mx-auto px-4 py-8">
                            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">{selectedProject.title}</h1>

                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/2 space-y-6">
                                    <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
                                        <h2 className="text-xl font-semibold mb-4 md:text-center">Project information</h2>
                                        <ul className="space-y-2 text-center">
                                            {selectedProject.projectInformation.map((info, index) => (
                                                <li key={index}><span className="font-medium">{Object.keys(info)[0]}:</span> {Object.values(info)[0]}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-4 text-sm md:text-base md:text-center">
                                        <p className="text-gray-700">{selectedProject.projectdescription}</p>
                                    </div>
                                </div>

                                <div className="md:w-1/2">
                                    <div className="relative h-64 md:h-96 lg:h-[500px]">
                                        <AnimatePresence initial={false}>
                                            <motion.img
                                                key={currentImageIndex}
                                                src={selectedProject.galleryImages[currentImageIndex].image}
                                                alt={selectedProject.galleryImages[currentImageIndex].alt}
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex justify-center mt-4">
                                        {selectedProject.galleryImages.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full mx-1 ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                                                onClick={() => setCurrentImageIndex(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-xl mt-20">Select a project to view details</p>
                )}
            </main>
        </div>
    );
}