// pages/index.js

import Link from "next/link";


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/portfolio/img-3.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold text-center">Interior Construction Specialists</h2>
          <p className="mt-4 text-lg text-center">We guide the team</p>
        </div>
      </section>

      {/* Reimagine Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-center">Reimagine. Redefine. Revitalize.</h3>
            <p className="mt-4 text-center">Invite us in, examine, and let us transform your space.</p>
          </div>
          <div>
            <p className="text-gray-700 text-center">We're Layton's Interior Construction Specialists, and you can call us ICS. We're focused on specializations like transformation of commercial spaces, tenant improvements, and more.</p>
          </div>
          <div className="bg-orange-500 text-white p-6">
            <h4 className="text-xl font-bold text-center">Ready to talk about your project?</h4>
            <p className="mt-2 text-center">Contact: John Smith</p>
            <p className="mt-1 text-center">Phone: (123) 456-7890</p>
            <p className="mt-1 text-center">Email: john@company.com</p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <img src="/images/portfolio/img-3.jpg" alt="Description 1" className="w-full h-auto object-cover"/>
          <img src="/images/portfolio/img-3.jpg" alt="Description 2" className="w-full h-auto object-cover"/>
        </div>
      </section>

      {/* Crew Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">The crew you want in your corner.</h3>
            <p className="mt-4">From preconstruction to construction, we're by your side...</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="bg-black text-white px-4 py-2">Contact Us</a>
              <a href="#" className="bg-transparent border border-black text-black px-4 py-2">Watch Video</a>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <div className="w-full grid grid-cols-3 gap-4">
              <button className="text-center bg-white p-0 border">Tenant Improvements</button>
              <button className="text-center bg-white p-4 border">Adaptive Reuse</button>
              <button className="text-center bg-white p-4 border">Build Outs</button>
            </div>
          </div>
        </div>
      </section>

      {/* Good Better Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-center">Good. Better. ICS.</h3>
            <p className="mt-4 text-center">ICS was founded to supply the demand...</p>
          </div>
          <div>
            <div className="p-6 border">
              <h4 className="text-xl font-bold text-center">We're the difference between "meh" and "wow"</h4>
              <p className="mt-2 text-center">ICS was founded to supply the demand for...</p>
              <Link href="/services/servicesdashboard" className="mt-4 inline-block bg-black text-white px-4 py-2 mx-24">View Projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Ready to make a move?</h3>
          <p className="mt-4">ICS needs leaders and problem solvers...</p>
          <a href="#" className="mt-4 inline-block bg-orange-500 text-white px-6 py-3">Open Positions</a>
        </div>
      </section>
    </div>
  );
}
