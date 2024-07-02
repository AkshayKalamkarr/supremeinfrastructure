import React from 'react';
import ContactForm from '../pages/contact-page';

const Contact = () => {
    ////// dont forget to ad dcontact number on form
    return (
        <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-24 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Right side (location details and map) */}
                <div className="order-2 md:order-1">
                    <div className="text-slate-900 mb-8">
                        <h1 className="text-4xl font-bold mb-4">LOCATION</h1>
                        <p className="text-bold text-gray-800 leading-relaxed">
                            <span className='font-bold'></span>
                            <br /><br />
                            Mayuresh Planet,603, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614
                        </p>
                    </div>
                    <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Company Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1654.9710497131566!2d73.03244624110917!3d19.007458918908416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c30763eef235%3A0xc2ce8f2ef45e3191!2sMayuresh%20Planet!5e1!3m2!1sen!2sin!4v1719571256238!5m2!1sen!2sin"
                            width="100%"
                            height="500"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
                {/* Left side (contact form) */}
                <div className="order-1 md:order-2">
                    <div className="text-slate-900 mb-8">
                        <h1 className="text-4xl font-bold mb-4">CONTACT US</h1>
                        <p className="text-base text-gray-800 leading-relaxed m-10">
                            <span className='font-bold'>For More Business Enquiry</span>
                            <br /><br />
                        </p>
                    </div>
                    <div className="text-slate-900 mb-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
