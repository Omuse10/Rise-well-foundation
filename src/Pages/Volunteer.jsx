import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Volunteer() {
  return (
    <>
      <Navbar />

      <main className="bg-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero & Volunteer Form Container */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          {/* Hero Section */}
          <section className="text-center text-emerald-700 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Become a Volunteer 🌟
            </h1>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
              Join our team of dedicated volunteers and help us make a real
              difference in communities across Kenya.
            </p>
            <button
              onClick={() => alert("Sign up coming soon!")}
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300"
            >
              Sign Up to Volunteer
            </button>
            <p className="text-sm md:text-lg text-gray-500 mt-8">
              Thank you for being part of our journey to transform lives.
            </p>
          </section>

          {/* Volunteer Form Section */}
          <section id="volunteer-section">
            <h2 className="text-2xl font-bold text-center mb-8">Become a Volunteer</h2>

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
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="joe@example.com"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+254712345678"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Areas of Interest */}
              <div className="mb-8">
                    <label className="block text-sm font-semibold mb-2">Areas of Interest</label>
                    <div className="flex flex-col space-y-4">


                      {/* Tech Field Subtitle */}
                      <span className="text-xs text-gray-600 font-bold mb-1">Tech</span>
                      <div className="flex flex-col space-y-2">
                        {[
                          "Arduino Programming",
                          "3D Printing",
                          "Web Development",
                          "Programming",
                        ].map((area, index) => (
                          <label key={index} className="inline-flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 accent-green-700" //text-green-500 its for tailwind v2 not supported on some modern versions of browsers
                            />
                            <span className="ml-2">{area}</span>
                          </label>
                        ))}
                      </div>


                      {/* Health Field Subtitle */}
                      <span className="text-xs text-gray-600 font-bold mt-4 mb-1">Health</span>
                      <div className="flex flex-col space-y-2">
                        {[
                          "Nutrition",
                          "Meditation",
                          "Mental Health Support",
                        ].map((area) => (
                          <label key={area} className="inline-flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 accent-green-700" //using the accent-green-500 class here modern browser support
                            />
                            <span className="ml-2">{area}</span>
                          </label>
                        ))}
                      </div>


                      {/* Entertainment Field Subtitle */}
                      <span className="text-xs text-gray-600 font-bold mt-4 mb-1">Entertainment</span>
                      <div className="flex flex-col space-y-2">
                        {[
                          "Music",
                          "Drama",
                          "Art",
                        ].map((area) => (
                          <label key={area} className="inline-flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 accent-green-700"
                            />
                            <span className="ml-2">{area}</span>
                          </label>
                        ))}
                      </div>
                      {/* Add other categories here */}
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
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Volunteer;
