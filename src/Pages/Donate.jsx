import React from "react";

function Donation() {
  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-6">
        Support Our Mission 💚
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl mb-8">
        Every contribution helps us empower communities across Kenya through education, healthcare,
        and economic development. Your generosity makes a difference.
      </p>

      <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300">
        Donate via M-Pesa / Card
      </button>

      <p className="text-sm text-gray-500 mt-6">
        Thank you for being part of our journey to transform lives.
      </p>
    </div>
  );
}

export default Donation;
