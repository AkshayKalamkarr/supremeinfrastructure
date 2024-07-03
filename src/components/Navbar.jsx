import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbarlist = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Team", href: "/#team" },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    setIsOpen(false);
    if (href === "/#") {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("/#")) {
      // Scroll to the corresponding section
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <div className="fixed top-0 h-16 flex items-center w-full z-50 left-0 right-0 bg-gradient-to-b from-slate-500 to-slate-800">
      <Popover className="relative w-full">
        {({ open, close }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 z-50">
              <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
                <div className="flex-shrink-0">
                  <Link to="/#">
                    <span className="sr-only">SUPREME INFRASTRUCTURE</span>
                    <img
                      className="h-8 w-auto sm:h-16"
                      src={logo}
                      alt="SUPREME INFRASTRUCTURE"
                    />
                  </Link>
                </div>
                <div className="-my-2 -mr-2 md:hidden flex items-center space-x-2">
                  <div className="flex items-center justify-end md:flex-1 lg:w-0">
                    <Link
                      to="/contact" // Updated to scroll to the contact section
                      className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation("/#contact");
                      }}
                    >
                      Contact us
                    </Link>
                  </div>
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  {Navbarlist.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-bold text-white hover:text-white-900"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                    >
                      {item.name.toUpperCase()}
                    </a>
                  ))}
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Link
                    to="/#contact" // Updated to scroll to the contact section
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/contact");
                    }}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>

            <Transition
              show={isOpen}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                static
                className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src={logo}
                          alt="supreme infrastructure"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button
                          className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-200 space-y-6 py-6 px-5">
                    {Navbarlist.map((item) => (
                      <div
                        key={item.name}
                        className="block text-lg font-semibold text-gray-900 hover:text-red-700 py-2 cursor-pointer"
                        onClick={() => handleNavigation(item.href)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
