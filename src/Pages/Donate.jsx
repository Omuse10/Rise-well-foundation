import React from "react";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function Donation() {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Support Our Mission 💚"
        description="Every contribution helps us empower communities across Kenya through education, healthcare, and economic development. Your generosity makes a difference."
        buttonText="Donate via M-Pesa / Card"
        onButtonClick={() => {
          const section = document.getElementById("donation-section");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
        bgColor="bg-emerald-50"
        textColor="text-emerald-700"
      />

      {/* === Simple Donation Section (closer to HeroSection) === */}
      <section
        id="donation-section"
        className="bg-emerald-50 -mt-60 sm:-mt-16 md:-mt-24 pb-10" // negative margin to pull section closer
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Make a Donation</h2>

          <form>
            {/* Select Amount */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Select Amount</label>
              <div className="grid grid-cols-2 gap-2">
                {["$25", "$50", "$100", "$250"].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="bg-white border border-gray-300 rounded-lg py-2 font-semibold hover:bg-green-100 transition"
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Custom Amount / Others</label>
              <input
                type="text"
                placeholder="Enter your amount"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Donation Type */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Donation Type</label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="donationType"
                    value="one-time"
                    className="accent-green-600"
                    defaultChecked
                  />
                  <span>One-time</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="donationType" value="monthly" className="accent-green-600" />
                  <span>Monthly</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="donationType" value="yearly" className="accent-green-600" />
                  <span>Yearly</span>
                </label>
              </div>
            </div>

            {/* Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition"
            >
              Complete Donation
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Donation;
