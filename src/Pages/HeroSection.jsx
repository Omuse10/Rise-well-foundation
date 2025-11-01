import React from "react";

function HeroSection({ title, description, buttonText, onButtonClick, bgColor, textColor }) {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-center px-4 ${bgColor || "bg-emerald-50"}`}>
      <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${textColor || "text-emerald-700"}`}>
        {title}
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl mb-8">
        {description}
      </p>

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300"
        >
          {buttonText}
        </button>
      )}

      <p className="text-sm text-gray-500 mt-6">
        Thank you for being part of our journey to transform lives.
      </p>
    </div>
  );
}

export default HeroSection;
