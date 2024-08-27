'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects/projectData'; // Adjust the import path as needed

// Enhanced Feature Component
const FeatureCard = ({ feature, index }) => (
    <motion.li
        className="flex items-start space-x-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, color: "#3B82F6" }}
    >
        <motion.span
            className="text-blue-500 font-bold text-xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            •
        </motion.span>
        <span className="text-gray-800 text-lg">{feature}</span>
    </motion.li>
);

export default function Project() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageOpen, setIsImageOpen] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const handleImageClick = () => {
        setIsImageOpen(true);
    };

    const closeImage = () => {
        setIsImageOpen(false);
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
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            {/* Sidebar */}
            <motion.aside
                className="w-full lg:w-1/5 bg-blue-950 text-white p-4"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold mb-6 text-center lg:my-12">PROJECTS</h2>
                <ul className="flex flex-wrap lg:flex-col justify-center">
                    {projects.map((project, index) => (
                        <motion.li
                            key={index}
                            className="w-1/2 lg:w-full mb-2 p-2 lg:p-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button
                                onClick={() => handleProjectClick(project)}
                                className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 md:text-center ${selectedProject?.title === project.title ? 'bg-gray-600 text-white' : 'hover:bg-gray-700'}`}
                            >
                                {project.title}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 p-4 lg:p-8">
                <AnimatePresence mode="wait">
                    {selectedProject ? (
                        <motion.div
                            key={selectedProject.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg shadow-xl overflow-hidden"
                        >
                            <div className="h-[40vh] lg:h-[30vh] bg-cover bg-center relative" style={{ backgroundImage: `url('${selectedProject.backgroundImage.image}')` }}>
                                <motion.div
                                    className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <h1 className="text-3xl lg:text-6xl font-extrabold text-white text-center leading-tight px-4">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
                                            {selectedProject.title} 
                                        </span>
                                    </h1>
                                </motion.div>
                            </div>

                            <div className="container mx-auto px-4 py-8">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <motion.div
                                        className="lg:w-1/2 space-y-6"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <div className="rounded-lg p-6">
                                            <h2 className="text-2xl font-semibold mb-4 text-center">Project Information</h2>
                                            <ul className="space-y-3">
                                                {selectedProject.projectInformation.map((info, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                                        className="flex justify-between items-center"
                                                    >
                                                        <span className="font-medium">{Object.keys(info)[0]}:</span>
                                                        <span className="text-gray-600">{Object.values(info)[0]}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        <motion.div
                                            className=" rounded-lg p-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                        >
                                            <h2 className="text-2xl font-semibold mb-4 text-center">Project Description</h2>
                                            <p className="leading-relaxed">{selectedProject.projectdescription}</p>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="lg:w-1/2"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <div className="relative h-64 lg:h-[570px] rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={handleImageClick}>
                                            <AnimatePresence initial={false}>
                                                <motion.img
                                                    key={currentImageIndex}
                                                    src={selectedProject.galleryImages[currentImageIndex].image}
                                                    alt={selectedProject.galleryImages[currentImageIndex].alt}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    initial={{ opacity: 0, scale: 1.1 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 1 }}
                                                />
                                            </AnimatePresence>
                                        </div>

                                        <div className="flex justify-center mt-4">
                                            {selectedProject.galleryImages.map((_, index) => (
                                                <motion.button
                                                    key={index}
                                                    className={`w-3 h-3 rounded-full mx-1 ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    whileHover={{ scale: 1.2 }}
                                                    whileTap={{ scale: 0.8 }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Project Features Section */}
                                <motion.div
                                    className="mt-12  rounded-lg p-6 "
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 md:mx-56">Project Features</h2>
                                    <ul className="space-y-4 lg:pl-8 md:mx-48">
                                        {selectedProject.projectFeatures.map((feature, index) => (
                                            <FeatureCard key={index} feature={feature} index={index} />
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center text-2xl mt-20 text-gray-600"
                        >
                            Select a project to view details
                        </motion.p>
                    )}
                </AnimatePresence>
            </main>

            {/* Fullscreen Image Modal */}
            {isImageOpen && selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={closeImage}
                >
                    <motion.img
                        src={selectedProject.galleryImages[currentImageIndex].image}
                        alt={selectedProject.galleryImages[currentImageIndex].alt}
                        className="max-w-full max-h-full object-contain"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            )}
        </div>
    );
}