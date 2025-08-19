import React from "react";
import MainKeyVisual from "./MainKeyVisual";
import About from "./About";
import SignatureServicesSection from "./SignatureServicesSection";
import ServiceTemplate from "./ServiceTemplate";
import TestimonialSection from "./TestimonialSection";
import CTAsection from "./CTAsection";
import Footer from "./Footer";

const MainBody = () => {
  return (
    <div>
      <MainKeyVisual />
      <div className="bg-black h-[100px]"></div>
      <About />
      <div className="bg-black h-[100px]"></div>
      <SignatureServicesSection />
      <div className="bg-black h-[100px]"></div>
      <ServiceTemplate />
      <div className="bg-black h-[100px]"></div>
      <TestimonialSection />
      <div className="bg-black h-[100px]"></div>
      <CTAsection />
      <div className="bg-black h-[100px]"></div>
      <Footer />
    </div>
  );
};

export default MainBody;
