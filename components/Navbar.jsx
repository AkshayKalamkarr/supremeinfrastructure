'use client'
import React, { useState } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

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
    const [openDropdowns, setOpenDropdowns] = useState({});

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpenDropdowns({});
    };

    const toggleDropdown = (key) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div
            className={cn("fixed top-4 inset-x-0 max-w-4xl mx-auto z-50", className)}
        >
            {/* Mobile Menu Button */}
            <div className="lg:hidden absolute top-4 right-4">
                <button onClick={toggleMenu} className="p-2 bg-white text-black rounded-full shadow-lg focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Slider Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-2xl transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-all duration-300 ease-in-out lg:hidden z-40`}
            >
                <div className="p-4 flex justify-between items-center mx-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
                    <button
                        onClick={closeMenu}
                        className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full shadow-lg focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="mt-8 flex flex-col space-y-4 px-8">
                    <MobileMenuItem href="/" onClick={closeMenu}>
                        Home
                    </MobileMenuItem>

                    <MobileMenuDropdown
                        title="About"
                        isOpen={openDropdowns.about}
                        onClick={() => toggleDropdown('about')}
                    >
                        <MobileMenuItem href="/about/supremeInfrastructure" onClick={closeMenu}>
                            Supreme Infrastructure
                        </MobileMenuItem>
                        <MobileMenuItem href="/about/architecturalDesigns" onClick={closeMenu}>
                            Architectural Designs
                        </MobileMenuItem>
                    </MobileMenuDropdown>

                    <MobileMenuItem href="/services/servicesdashboard" onClick={closeMenu}>
                        Services
                    </MobileMenuItem>

                    <MobileMenuDropdown
                        title="Projects"
                        isOpen={openDropdowns.projects}
                        onClick={() => toggleDropdown('projects')}
                    >
                        <MobileMenuItem href="/project/TATA" onClick={closeMenu}>
                            TATA
                        </MobileMenuItem>
                        <MobileMenuItem href="/project/atlantas" onClick={closeMenu}>
                            ATLANTAS
                        </MobileMenuItem>
                        <MobileMenuItem href="/project/coact" onClick={closeMenu}>
                            COACT
                        </MobileMenuItem>
                    </MobileMenuDropdown>

                    <MobileMenuDropdown
                        title="Contact"
                        isOpen={openDropdowns.contact}
                        onClick={() => toggleDropdown('contact')}
                    >
                        <MobileMenuItem href="/contact" onClick={closeMenu}>
                            Contact Us
                        </MobileMenuItem>
                        <MobileMenuItem href="/contact/career" onClick={closeMenu}>
                            Career
                        </MobileMenuItem>
                    </MobileMenuDropdown>
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
                                description="Explore our commercial project portfolio."
                            />
                            <ProductItem
                                title="Residential Projects"
                                href="/project/ATLANTAS"
                                src="/images/projects/ATLANTAS/atlantas-19.jpg"
                                description="Discover our residential project designs."
                            />
                            <ProductItem
                                title="Guest House"
                                href="/project/COACT"
                                src="/images/projects/COACT/coact-1.jpg"
                                description="View our guest house projects."
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
        </div>
    );
}

function MobileMenuItem({ href, onClick, children }) {
    return (
        <Link
            href={href}
            className="block py-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
            onClick={onClick}
        >
            {children}
        </Link>
    );
}

function MobileMenuDropdown({ title, isOpen, onClick, children }) {
    return (
        <div>
            <button
                onClick={onClick}
                className="flex items-center justify-between w-full py-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
            >
                {title}
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 mt-2 space-y-2 ${isOpen ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div>
    );
}