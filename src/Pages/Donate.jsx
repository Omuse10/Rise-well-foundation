import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import React, { useState } from "react";

function Donation() {
  // State to hold selected or custom amount as a string (numeric only)
  const [selectedAmount, setSelectedAmount] = useState("");

  // Helper to convert amount string like "$25" to number 25
  const parseAmount = (amount) => Number(amount.replace("$", ""));

  return (
    <>
      <Navbar />

      <main className="bg-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero & Donation Form Container */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          {/* Hero Section */}
          <section className="text-emerald-700 mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Support Our Mission 💚
            </h1>
            <p className="text-lg sm:text-xl max-w-xl mx-auto mb-6 leading-relaxed">
              Every contribution helps us empower communities across Kenya through education, healthcare, and economic development. Your generosity makes a difference.
            </p>
            <button
              onClick={() => {
                const section = document.getElementById("donation-section");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg px-6 py-3 transition"
            >
              Donate via M-Pesa / Card
            </button>
          </section>

          {/* Donation Section */}
          <section id="donation-section">
            <h2 className="text-2xl font-bold text-center mb-8">Make a Donation</h2>

            <form>
              {/* Select Amount */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Select Amount</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["$25", "$50", "$100", "$250"].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`bg-white border rounded-lg py-2 font-semibold hover:bg-green-100 transition ${
                        parseAmount(amount) === Number(selectedAmount)
                          ? "border-green-600 bg-green-200"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelectedAmount(parseAmount(amount))}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Custom Amount / Others</label>
                <input
                  type="text"
                  placeholder="Enter your amount"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={selectedAmount}
                  onChange={(e) => {
                    // Only allow numeric input
                    const val = e.target.value.replace(/\D/g, "");
                    setSelectedAmount(val);
                  }}
                />
              </div>

              {/* Donation Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Donation Type</label>
                <div className="flex flex-wrap gap-6">
                  {["one-time", "monthly", "yearly"].map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="donationType"
                        value={type}
                        className="accent-green-600"
                        defaultChecked={type === "one-time"}
                      />
                      <span className="capitalize">{type.replace("-", " ")}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
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
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Donation;
