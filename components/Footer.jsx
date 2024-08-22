'use client'
import Link from 'next/link'
import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaGlobe, FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold uppercase border-b-2 border-yellow-500 pb-2 mb-4 text-center">Corporate Office</h2>
                        <div className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="flex-shrink-0 mt-1 text-yellow-500 " size={20} />
                            <p className="text-gray-300 ">
                                SUPREME INFRASTRUCTURE<br />
                                Office No 603 Sector 15<br />
                                Ravi Rachna, near Belapur Court Station,<br />
                                Sector-15, Belapur,<br />
                                Navi Mumbai, Maharashtra 410209
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold uppercase border-b-2 border-yellow-500 pb-2 mb-4 text-center">Contact Us</h2>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-7">
                                <FaPhone className="text-yellow-500" size={18} />
                                <p className="text-gray-300">CALL US : (+1) 212-946-2707</p>
                            </div>
                            <div className="flex items-center space-x-7">
                                <FaWhatsapp className="text-yellow-500" size={18} />
                                <p className="text-gray-300">WHATSAPP : +91 - 86570 04324</p>
                            </div>
                            <div className="flex items-center space-x-7">
                                <FaEnvelope className="text-yellow-500" size={18} />
                                <p className="text-gray-300">EMAIL : info@supremeinfrastructure</p>
                            </div>
                            <div className="flex items-center space-x-7">
                                <FaGlobe className="text-yellow-500" size={18} />
                                <p className="text-gray-300">WEBSITE : www.supremeinfrastructure.in</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold uppercase border-b-2 border-yellow-500 pb-2 mb-4 text-center">Quick Links</h2>
                        <div className="flex flex-col space-y-2">
                            {['About Us', 'Projects', 'Gallery', 'Contact'].map((item, index) => (
                                <Link key={index} href={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-300 hover:text-yellow-500 transition duration-300 text-center">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold uppercase border-b-2 border-yellow-500 pb-2 mb-4 text-center">Connect With Us</h2>
                        <div className="flex space-x-4">
                            {[FaInstagram, FaTwitter, FaLinkedin, FaFacebook].map((Icon, index) => (
                                <Link key={index} href="/" className="text-gray-300 hover:text-yellow-500 transition duration-300 px-6">
                                    <Icon size={24}/>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-900 py-4">
                <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400">&copy; 2024 Royal Crown Infra. All Rights Reserved</p>
                    </div>
                    <div className="space-x-4">
                        {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                            <Link key={index} className="text-gray-400 hover:text-yellow-500 transition duration-300" href="/">
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