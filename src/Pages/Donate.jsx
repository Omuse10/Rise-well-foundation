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
        onButtonClick={() => alert("Donation coming soon!")}
        bgColor="bg-emerald-50"
        textColor="text-emerald-700"
      />
      <Footer />
    </>
  );
}

export default Donation;

