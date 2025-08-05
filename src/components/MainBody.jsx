import React from "react";
import MainKeyVisual from "./MainKeyVisual";
import About from "./About";

const MainBody = () => {
  return (
    <div>
      <MainKeyVisual />
      <div className="bg-black h-[50px]"></div>
      <About />
      <div className="bg-black h-[50px]"></div>
    </div>
  );
};

export default MainBody;
