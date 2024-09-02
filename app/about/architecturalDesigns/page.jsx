'use client'
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/portfolio/img-3.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center text-white">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Architectural Designs Specialists
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            We guide the team
          </motion.p>
        </div>
      </motion.section>

      {/* Reimagine Section */}
      <motion.section
        className="bg-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center md:my-6">Reimagine. Redefine. Revitalize.</h3>
            <p className="mt-4 text-center">Invite us in, examine, and let us transform your space.</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-center md:my-6">We're Supreme's Interior Construction Specialists, and you can call us ICS. We're focused on specializations like transformation of commercial spaces, tenant improvements, and more.</p>
          </motion.div>
          <motion.div
            className="bg-orange-500 text-white p-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-center">Ready to talk about your project?</h4>
            <p className="mt-2 text-center">Contact: John Smith</p>
            <p className="mt-1 text-center">Phone: (123) 456-7890</p>
            <p className="mt-1 text-center">Email: john@company.com</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Section */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <motion.img
            src="/images/portfolio/img-3.jpg"
            alt="Description 1"
            className="w-full h-auto object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.img
            src="/images/portfolio/img-3.jpg"
            alt="Description 2"
            className="w-full h-auto object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.section>

      {/* Crew Section */}
      <motion.section
        className="bg-gray-100 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">The crew you want in your corner.</h3>
            <p className="mt-4">From preconstruction to construction, we're by your side...</p>
            <div className="mt-4 flex space-x-4">
              <motion.a
                href="/contact"
                className="bg-black text-white px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>

            </div>
          </motion.div>
          <motion.div
            className="col-span-2 flex items-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full grid grid-cols-3 gap-4">
              <motion.button
                className="text-center bg-white p-4 border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tenant Improvements
              </motion.button>
              <motion.button
                className="text-center bg-white p-4 border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Adaptive Reuse
              </motion.button>
              <motion.button
                className="text-center bg-white p-4 border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Build Outs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Good Better Section */}
      <motion.section
        className="bg-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center">Good. Better. ICS.</h3>
            <p className="mt-4 text-center">ICS was founded to supply the demand...</p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 border">
              <h4 className="text-xl font-bold text-center">We're the difference between "meh" and "wow"</h4>
              <p className="mt-2 text-center">ICS was founded to supply the demand for...</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/services/servicesdashboard" className="mt-4 inline-block bg-black text-white px-4 py-2 md:mx-64">View Projects</Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Join Us Section */}
      <motion.section
        className="bg-gray-800 text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center">
          <motion.h3
            className="text-3xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to make a move?
          </motion.h3>
          <motion.p
            className="mt-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ICS needs leaders and problem solvers...
          </motion.p>
          <motion.a
            href="#"
            className="mt-4 inline-block bg-orange-500 text-white px-6 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Open Positions
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}