import React, { useState } from 'react';

const MimosaHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="p-4 md:p-6 lg:p-8 flex flex-col">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex">
            <div className="w-10 h-10 md:w-12 md:h-12 relative">
              <div className="absolute border border-gray-800 rounded-full w-full h-full"></div>
              <div className="absolute border border-gray-800 rounded-full w-full h-full ml-2"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
              FEATURED WORK
            </button>
            <button className="px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
              ABOUT
            </button>
            <button className="px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
              MOOD SWINGS
            </button>
            <button className="px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-100 transition-colors">
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            <button className="px-4 py-2 border border-gray-800 rounded-full text-center hover:bg-gray-100 transition-colors">
              FEATURED WORK
            </button>
            <button className="px-4 py-2 border border-gray-800 rounded-full text-center hover:bg-gray-100 transition-colors">
              ABOUT
            </button>
            <button className="px-4 py-2 border border-gray-800 rounded-full text-center hover:bg-gray-100 transition-colors">
              MOOD SWINGS
            </button>
            <button className="px-4 py-2 border border-gray-800 rounded-full text-center hover:bg-gray-100 transition-colors">
              CONTACT
            </button>
          </div>
        )}

        <div className="flex-grow flex items-center justify-center mt-12 md:mt-16 lg:mt-20">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
              mimosa GmbH is an independent branding consultancy, research, and creative studio. We build brands and help them communicate with their
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MimosaHeader;