import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for icons
import Logo from "../assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-1 bg-white shadow-md sticky top-0 z-50">
      {/* Left Section: Logo + Title */}
      <div className="flex flex-row sm:flex-row sm:items-center ml-0 sm:ml-6">
        <img
          src={Logo}
          alt="Saniki Space Foundation Logo"
          className="h-20 w-24 sm:h-24 sm:w-28 object-contain"
        />
        <Link to="/" className="text-left text-lg sm:text-2xl font-black leading-tight text-gray-800 sm:ml-2 mt-6 sm:mt-0">
          Saniki Space Foundation
          <span className="hidden sm:inline">&nbsp;</span>
          <br className="block sm:hidden" />
          Kenya
        </Link>
      </div>

      {/* Hamburger Icon (Visible only on Mobile) */}
      <button
        className="sm:hidden text-gray-800 mb-3 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex space-x-4 mr-8 text-gray-800 font-medium">
        <Link to="/" className="hover:text-green-600">
          Home
        </Link>
        <Link to="/volunteer" className="hover:text-green-600">
          Volunteer
        </Link>
        <Link to="/donate" className="hover:text-green-600">
          Donate
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center sm:hidden py-4 space-y-2 z-10">
          <Link
            to="/"
            className="hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/volunteer"
            className="hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Volunteer
          </Link>
          <Link
            to="/donate"
            className="hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
