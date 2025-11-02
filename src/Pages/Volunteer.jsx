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
      
      <Footer />
    </>
  );
}

export default Volunteer;
