import React from "react";

function Volunteer() {
  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-6">
        Become a Volunteer 🌟
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl mb-8">
        Join our team of dedicated volunteers and help us make a real difference in communities across Kenya.
        Your time and skills can transform lives through education, healthcare, and sustainable development.
      </p>

      <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300">
        Sign Up to Volunteer
      </button>

      <p className="text-sm text-gray-500 mt-6">
        Together, we can build a better future for Kenya.
      </p>
    </div>
  );
}

export default Volunteer;