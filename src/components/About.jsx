import React from "react";
import bizLogo from "../assets/icons/Luxe-and-Co Logo.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-section-con">
        <div className=" flex flex-col justify-center items-start md:flex-row md:items-center p-5 md:p-10 h-[800px] max-w-lapDesk mx-auto -z-5">
          <div>
            <img
              className="w-[150px] md:w-full"
              src={bizLogo}
              alt="Luxe&Co. Logo"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-white">
              Welcome to <span className="text-primary">Luxe</span>&Co.
            </h2>
            <p>
              Welcome to <b>Luxe & Co.</b>, your destination for sophisticated
              beauty transformations and indulgent self-care. Our talented team
              of
              <b>stylists, estheticians, and beauty experts</b> are here to make
              you look and feel your absolute best — every visit, every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
