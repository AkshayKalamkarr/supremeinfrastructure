'use client'
import { useState } from 'react';
import Image from 'next/image';

const portfolioItems = [
    {
        name: "Interior Design",
        images: ['/images/portfolio/img-1.jpg',
            '/images/portfolio/img-1.jpg',
            '/images/portfolio/img-1.jpg',
            '/images/portfolio/img-1.jpg',
            '/images/portfolio/img-1.jpg',
            '/images/portfolio/img-1.jpg',
            '/images/portfolio/img-1.jpg',
            '/images/portfolio/img-1.jpg',
            '/images/portfolio/img-1.jpg',
            '/images/portfolio/img-1.jpg',
        /* up to 10 images */]
    },
    {
        name: "Civil Construction",
        images: ['/civil1.jpg', '/civil2.jpg', /* up to 10 images */]
    },
    {
        name: "Architectural Design",
        images: ['/arch1.jpg', '/arch2.jpg', /* up to 10 images */]
    },
    {
        name: "Cable Trench",
        images: ['/cable1.jpg', '/cable2.jpg', /* up to 10 images */]
    },
    {
        name: "Industrial Building",
        images: ['/industrial1.jpg', '/industrial2.jpg', /* up to 10 images */]
    },
    {
        name: "Horticulture Design",
        images: ['/horticulture1.jpg', '/horticulture2.jpg', /* up to 10 images */]
    },
    {
        name: "Garden Maintenance",
        images: ['/garden1.jpg', '/garden2.jpg', /* up to 10 images */]
    },
    {
        name: "Building Design",
        images: ['/building1.jpg', '/building2.jpg', /* up to 10 images */]
    },
];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState(portfolioItems[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCurrentImageIndex(0);
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-82 bg-gray-200 p-4">
                <h1 className="text-2xl font-bold mb-6 text-center">Supreme Infrastructure Comapany</h1>
                <h2 className="text-xl font-semibold mb-4 text-center">PORTFOLIO / SERVICES</h2>
                <ul>
                    {portfolioItems.map((item, index) => (
                        <li key={index} className="mb-2 p-6 text-center">
                            <button
                                onClick={() => handleCategoryClick(item)}
                                className={`text-gray-700 hover:text-gray-900 ${selectedCategory.name === item.name ? 'font-bold' : ''
                                    }`}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-8 text-black">
                <h2 className="text-3xl font-extrabold mb-6 md:mt-24">{selectedCategory.name}</h2>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mt-12">
                    {selectedCategory.images.map((image, index) => (
                        <div key={index} className="relative w-full h-48 rounded-lg overflow-hidden">
                            <Image
                                src={image}
                                alt={`Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
