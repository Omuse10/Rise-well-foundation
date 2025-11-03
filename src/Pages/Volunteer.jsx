import React from "react";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function Volunteer() {
  return (
    <>
      <Navbar />
      
      <HeroSection
        title="Become a Volunteer 🌟"
        description="Join our team of dedicated volunteers and help us make a real difference in communities across Kenya."
        buttonText="Sign Up to Volunteer"
        onButtonClick={() => alert("Sign up coming soon!")}
        bgColor="bg-emerald-50"
        textColor="text-emerald-700"
      />

       {/* === Simple Volunteer Section (closer to HeroSection) === */}
       <section
        id="volunteer-section"
        className="bg-emerald-50 -mt-60 sm:-mt-16 md:-mt-24 pb-10" // negative margin to pull section closer
      >
       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-2xl p-8 w-full overflow-hidden break-words whitespace-normal leading-relaxed">
          <h2 className="text-2xl font-bold text-center mb-6">Become a Volunteer</h2>

          <form>

            {/* Full Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                placeholder="joe@example.com"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+254712345678"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

           {/* Areas of Interest */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Areas of Interest</label>
              <div className="flex flex-col space-y-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
                  <span className="ml-2">Community Outreach</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
                  <span className="ml-2">Mental Health</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
                  <span className="ml-2">Fundraising</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
                  <span className="ml-2">Digital Marketing</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
                  <span className="ml-2">Social Media Management</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition"
            >
              Volunteer Now
            </button>
          </form>
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default Volunteer;
