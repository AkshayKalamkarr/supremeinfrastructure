'use client';
import React, { useState } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
            <p className="text-black dark:text-white">
                {/* The Navbar will show on top of the page */}
            </p>
        </div>
    );
}

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div
            className={cn("fixed top-4 inset-x-0 max-w-4xl mx-auto z-50", className)}
        >
            {/* Mobile Menu Button */}
            <div className="lg:hidden absolute top-4 right-4">
                <button onClick={toggleMenu} className="p-2 bg-white text-black rounded-full shadow-lg focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Slider Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-4/5 bg-white dark:bg-white shadow-md transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 lg:hidden z-40`}
            >
                <div className="p-4">
                    <button onClick={closeMenu} className="p-2 bg-gray-200 text-black rounded-full shadow-lg focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="mt-8 justify-center items-center flex flex-col space-y-8">
                        <HoveredLink href="/">Home</HoveredLink>

                        <div className="group relative">
                            <HoveredLink href="/">About</HoveredLink>
                            <div className="absolute left-0 mt-2 hidden w-40 bg-white border border-gray-300 rounded-md shadow-lg group-hover:block z-10">
                                <Link href="/about/supremeInfrastructure" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Supreme Infrastructure</Link>
                                <Link href="/about/architecturalDesigns" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Architectural Designs</Link>
                            </div>
                        </div>

                        <HoveredLink href="/services/servicesdashboard">Services</HoveredLink>

                        <div className="group relative">
                            <HoveredLink href="/">Projects</HoveredLink>
                            <div className="absolute left-0 mt-2 hidden w-40 bg-white border border-gray-300 rounded-md shadow-lg group-hover:block z-10">
                                <Link href="/project/TATA" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">TATA</Link>
                                <Link href="/project/atlantas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">ATLANTAS</Link>
                                <Link href="/project/coact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">COACT</Link>
                            </div>
                        </div>

                        <div className="group relative">
                            <HoveredLink href="/">Contact</HoveredLink>
                            <div className="absolute left-0 mt-2 hidden w-40 bg-white border border-gray-300 rounded-md shadow-lg group-hover:block z-10">
                                <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">contact</Link>
                                <Link href="/contact/career" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">career</Link>
                            </div>
                        </div>

                        {/* <HoveredLink href="/contact/career">Career</HoveredLink> */}
                    </div>

                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
                <Menu setActive={setActive}>
                    <Link href="/"><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
                    <MenuItem setActive={setActive} active={active} item="About">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/about/supremeInfrastructure">Supreme Infrastructure</HoveredLink>
                            <HoveredLink href="/about/architecturalDesigns">Architectural Designs</HoveredLink>
                        </div>
                    </MenuItem>
                    <Link href="/services/servicesdashboard"><MenuItem setActive={setActive} active={active} item="Services">
                    </MenuItem></Link>
                    <Link href='/project'><MenuItem setActive={setActive} active={active} item="Projects">
                        <div className="text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Commercial Projects"
                                href="/project/TATA"
                                src="/images/projects/TATA/tata-1.jpg"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Residencial Projects"
                                href="/project/ATLANTAS"
                                src="/images/projects/ATLANTAS/atlantas-19.jpg"
                                description="Production ready Tailwind css components for your next project"
                            />
                            <ProductItem
                                title="Guest House"
                                href="/project/COACT"
                                src="/images/projects/COACT/coact-1.jpg"
                                description="Never write from scratch again. Go from idea to blog in minutes."
                            />
                        </div>
                    </MenuItem></Link>
                    <MenuItem setActive={setActive} active={active} item="Contact">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/contact">Contact Us</HoveredLink>
                            <HoveredLink href="/contact/career">Career</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        </div >
    );
}
