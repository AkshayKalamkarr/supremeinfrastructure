"use client";
import React, { useState } from "react";
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

    return (
        <div
            className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="p-2 text-gray-600 hover:text-gray-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md">
                    <div className="p-4 space-y-4">
                        <HoveredLink href="/services">Services</HoveredLink>
                        <HoveredLink href="/products">Products</HoveredLink>
                        <HoveredLink href="/pricing">Pricing</HoveredLink>
                        <HoveredLink href="/pricing">Pricing</HoveredLink>
                        <HoveredLink href="/pricing">Pricing</HoveredLink>
                    </div>
                </div>
            )}

            {/* Desktop Menu */}
            <div className="hidden lg:block">
                <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="Services">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                            <HoveredLink href="/branding">Branding</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Products">
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
                    <MenuItem setActive={setActive} active={active} item="Pricing">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Pricing">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}