import React from "react";
import MainKeyVisual from "./MainKeyVisual";
import About from "./About";
import SignatureServicesSection from "./SignatureServicesSection";

const MainBody = () => {
  return (
    <div>
      <MainKeyVisual />
      <div className="bg-black h-[50px]"></div>
      <About />
      <div className="bg-black h-[50px]"></div>
      <SignatureServicesSection />
    </div>
  );
};

export default MainBody;
