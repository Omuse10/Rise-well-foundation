import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"; // ✅ for icons
import Logo from "../assets/logo.png"; // ✅ adjust the path to your logo image

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={Logo}
                alt="Rise-well Foundation Logo"
                className="h-28 w-32 ml-0 mr-0"
              />
              <span className="text-xl font-bold text-white ml-2">
                Rise-well Foundation Kenya
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming communities across Kenya through sustainable
              development programs that empower local leaders and foster
              long-term growth.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/risewellfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/risewellfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.twitter.com/@risewellfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/@risewellfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">Our Programs</a></li>
              <li><a href="#impact" className="hover:text-emerald-400 transition-colors">Impact Stories</a></li>
              <li><a href="#team" className="hover:text-emerald-400 transition-colors">Our Team</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><a href="#volunteer" className="hover:text-emerald-400 transition-colors">Volunteer</a></li>
              <li><a href="#partner" className="hover:text-emerald-400 transition-colors">Donate</a></li>
              <li><a href="#corporate" className="hover:text-emerald-400 transition-colors">Corporate Giving</a></li>
              <li><a href="#reports" className="hover:text-emerald-400 transition-colors">Annual Reports</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom note */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Rise-well Foundation Kenya. All rights reserved. | Reg. No: NPO/123/2010
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;