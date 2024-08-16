"use client";
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
            className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50", className)}
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
                className={`fixed top-0 left-0 h-full w-3/4 bg-white dark:bg-gray-800 shadow-md transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 lg:hidden z-40`}
            >
                <div className="p-4">
                    <button onClick={closeMenu} className="p-2 bg-gray-200 text-black rounded-full shadow-lg focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="mt-8 flex flex-col space-y-4">
                        <HoveredLink href="/services">Home</HoveredLink>
                        <HoveredLink href="/products">About</HoveredLink>
                        <HoveredLink href="/pricing"> Services</HoveredLink>
                        <HoveredLink href="/pricing">Project</HoveredLink>
                        <HoveredLink href="/pricing">Contact</HoveredLink>
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
                            <HoveredLink href="/about/interiorConstructionSpecialists">Interior Construction Specialists</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Services">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/interior-Design">Interior Design</HoveredLink>
                            <HoveredLink href="/civil-Construction">Civil Construction</HoveredLink>
                            <HoveredLink href="/architectural-Design">Architectural Design</HoveredLink>
                            <HoveredLink href="/cable-Trench">Cable Trench</HoveredLink>
                            <HoveredLink href="/industrial-Building">Industrial Building</HoveredLink>
                            <HoveredLink href="/horticulture-Design">Horticulture Design</HoveredLink>
                            <HoveredLink href="/graden-Maintenance">Garden Maintenance</HoveredLink>
                            <HoveredLink href="/building-Design">Building Design</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Project">
                        <div className="text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="/images/demoimg.jpg"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Tailwind Master Kit"
                                href="https://tailwindmasterkit.com"
                                src="/images/demoimg.jpg"
                                description="Production ready Tailwind css components for your next project"
                            />
                            <ProductItem
                                title="Moonbeam"
                                href="https://gomoonbeam.com"
                                src="/images/demoimg.jpg"
                                description="Never write from scratch again. Go from idea to blog in minutes."
                            />
                            <ProductItem
                                title="Rogue"
                                href="https://userogue.com"
                                src="/images/demoimg.jpg"
                                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                            />
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Contact">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/contact">Contact Us</HoveredLink>
                            <HoveredLink href="/career">Career</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}
