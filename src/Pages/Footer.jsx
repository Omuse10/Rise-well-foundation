import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"; // ✅ for icons
import Logo from "../assets/logo.png"; // ✅ adjust the path to your logo image
import { Link } from "react-router-dom";

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
                href="https://www.facebook.com/profile.php?id=61583136432986"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/rise.wellorg/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://x.com/RisewellK34553"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/rise-well-b70597397/"
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
                <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-emerald-400 transition-colors">Our Programs</Link></li>
                <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-emerald-400 transition-colors">Impact Stories</Link></li>
                <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-emerald-400 transition-colors">Our Team</Link></li>
              </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/volunteer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-400 transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-400 transition-colors">Donate</Link></li>
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