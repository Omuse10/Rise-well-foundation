import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png"; // ✅ adjust path

function HomeSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center ml-2 sm:ml-4 lg:ml-6">
              <img
                src={Logo}
                alt="Rise-well Foundation Logo"
                className="h-20 w-24 sm:h-24 sm:w-28 mt-2"
              />
              <h1 className="text-left sm:text-2xl font-black leading-tight lg:mt-8">
                Rise-well Foundation Kenya
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600">About</a>
              <a href="#programs" className="text-gray-700 hover:text-emerald-600">Programs</a>
              <a href="#impact" className="text-gray-700 hover:text-emerald-600">Impact</a>
              <a href="#team" className="text-gray-700 hover:text-emerald-600">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600">Contact</a>
              <Link
                to="/donate"
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors"
              >
                Donate Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</a>
              <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Programs</a>
              <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Impact</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Team</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</a>
              <Link
                to="/donate"
                className="w-full text-left bg-orange-600 text-white px-3 py-2 rounded-md hover:bg-orange-700 transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-[#DB9F75] to-[#FFDAB9] text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transforming Lives Through
              <span className="text-orange-400"> Community Impact</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Empowering communities across Kenya through education, healthcare, and sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
                Join Our Mission
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-800 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSection;
