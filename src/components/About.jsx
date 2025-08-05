import React from "react";
import bizLogo from "../assets/icons/Luxe-and-Co Logo.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="p-5 py-20 lg:max-w-[1200px] md:max-w-[950px] sm:max-w-[750px] max-w-[500px] mx-auto">
        <div>
          <img className="w-[150px]" src={bizLogo} alt="Luxe&Co. Logo" />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-white">
            Welcome to <span className="text-primary">Luxe</span>&Co.
          </h2>
          <p>
            Welcome to <b>Luxe & Co.</b>, your destination for sophisticated
            beauty transformations and indulgent self-care. Our talented team of
            <b>stylists, estheticians, and beauty experts</b> are here to make
            you look and feel your absolute best — every visit, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
