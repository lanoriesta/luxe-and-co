import React from "react";
import MainKeyVisual from "./MainKeyVisual";
import About from "./About";
import SignatureServicesSection from "./SignatureServicesSection";
import ServiceTemplate from "./ServiceTemplate";

const MainBody = () => {
  return (
    <div>
      <MainKeyVisual />
      <div className="bg-black h-[50px]"></div>
      <About />
      <div className="bg-black h-[50px]"></div>
      <SignatureServicesSection />
      <div className="bg-black h-[100px]"></div>

      <ServiceTemplate />
    </div>
  );
};

export default MainBody;
