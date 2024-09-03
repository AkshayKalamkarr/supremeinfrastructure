'use client'
import Link from 'next/link'
import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaGlobe, FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaInfoCircle, FaProjectDiagram, FaImages, FaAddressBook } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Corporate Office */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold uppercase border-b-2 border-yellow-500 pb-2 mb-4 text-start">Corporate Office</h2>
                        <div className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="flex-shrink-0 mt-1 text-yellow-500 animate-pulse" size={20} />
                            <p className="text-gray-300 text-sm sm:text-base">
                                SUPREME INFRASTRUCTURE<br />
                                Office No 603, Sector 15,<br />
                                near Belapur Court Station,<br />
                                Sector-15, Belapur,<br />
                                Navi Mumbai, Maharashtra 410209
                            </p>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold uppercase border-b-2 border-yellow-500 pb-2 mb-4 text-start">Contact Us</h2>
                        <div className="space-y-3">
                            {[
                                { icon: FaPhone, text: 'CALL US : (+1) 212-946-2707' },
                                { icon: FaWhatsapp, text: 'WHATSAPP : +91 - 86570 04324' },
                                { icon: FaEnvelope, text: 'EMAIL : info@supremeinfrastructure' },
                                { icon: FaGlobe, text: 'WEBSITE : www.supremeinfrastructure.in' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 sm:space-x-7 group">
                                    <item.icon className="text-yellow-500 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" size={18} />
                                    <p className="text-gray-300 text-sm sm:text-base transition-colors duration-300 group-hover:text-yellow-500">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold uppercase border-b-2 border-yellow-500 pb-2 mb-4 text-start">Quick Links</h2>
                        <div className="space-y-3">
                            {[
                                { icon: FaInfoCircle, text: 'About Us', href: '/about/supremeInfrastructure' },
                                { icon: FaProjectDiagram, text: 'Projects', href: '/projects' },
                                { icon: FaImages, text: 'Gallery', href: '/gallery' },
                                { icon: FaAddressBook, text: 'Contact', href: '/contact' }
                            ].map((item, index) => (
                                <Link key={index} href={item.href} className="flex items-center space-x-3 group">
                                    <item.icon className="text-yellow-500 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" size={18} />
                                    <span className="text-gray-300 hover:text-yellow-500 transition duration-300 text-sm sm:text-base hover:underline hover:underline-offset-4">
                                        {item.text}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Connect With Us */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold uppercase border-b-2 border-yellow-500 pb-2 mb-4 text-start">Connect With Us</h2>
                        <div className="flex md:mx-8 space-x-4">
                            {[FaInstagram, FaTwitter, FaLinkedin, FaFacebook].map((Icon, index) => (
                                <Link key={index} href="/" className="text-gray-300 hover:text-yellow-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
                                    <Icon size={24} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-900 py-4">
                <div className="container mx-auto px-4 text-center sm:flex sm:justify-between sm:items-center">
                    <div className="mb-4 sm:mb-0">
                        <p className="text-gray-400 text-sm sm:text-base">&copy; 2024 Supreme Infrastructure Company. All Rights Reserved</p>
                    </div>
                    <div className="space-x-4">
                        {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                            <Link key={index} className="text-gray-400 hover:text-yellow-500 transition duration-300 text-sm sm:text-base hover:underline hover:underline-offset-4" href="/">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
