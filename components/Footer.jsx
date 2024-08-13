'use client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-700 text-white">
            <div className="container mx-auto px-4 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div

                    >
                        <h2 className="text-xl font-semibold uppercase">Corporate Office</h2>
                        <div className="flex items-start space-x-2">
                            <div className="mt-1 flex-shrink-0" />
                            <p>ROAYL CROWN<br />Shop No 1 Sector 25 Plot No 19,<br />
                                Ravi Rachna, near Khandesh Station,<br />
                                Sector-25, Khandeshhwar,<br />
                                Navi Mumbai, Maharashtra 410209</p>
                        </div>
                    </div>

                    <div
                    >
                        <h2 className="text-xl font-semibold uppercase">Contact Us</h2>
                        <div className="space-y-2 ml-2">
                            <div className="flex items-center space-x-2">
                                <div size={18} />
                                <p>CALL US : (+1) 212-946-2707</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div size={18} />
                                <p>WHATSAPP : +91 - 86570 04324</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div size={18} />
                                <p>EMAIL : info@royalcrown.com</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div size={18} />
                                <p>WEBSITE : www.royalcrown.in</p>
                            </div>
                        </div>
                    </div>

                    <div
                       
                    >
                        <h2 className="text-xl font-semibold uppercase">Quick Links</h2>
                        <div className="flex flex-col space-y-2 ml-2">
                            <Link href='/about/ourteam' className="hover:underline">About Us</Link>
                            <Link href='/projects' className="hover:underline">Projects</Link>
                            <Link href='/gallery' className="hover:underline">Gallery</Link>
                            <Link href='/contact' className="hover:underline">Contact</Link>
                        </div>
                    </div>

                    <div

                    >
                        <h2 className="text-xl font-semibold uppercase">Connect With Us</h2>
                        <div className="flex flex-col space-y-2 ml-2">
                            <Link href='/' className="hover:underline">Instagram</Link>
                            <Link href='/' className="hover:underline">Twitter</Link>
                            <Link href='/' className="hover:underline">LinkedIn</Link>
                            <Link href='/' className="hover:underline">Facebook</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div
               
            >
                <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; 2024 Royal Crown Infra. All Rights Reserved</p>
                        {/* <p className="text-sm text-gray-400">Designed By Akshay Kalamkar</p> */}
                    </div>
                    <div className="space-x-4">
                        <Link className="hover:underline" href='/'>Privacy Policy</Link>
                        <Link className="hover:underline" href='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
