import React from "react";

const MainKeyVisual = () => {
  return (
    <div className="mkv-section h-screen flex items-center justify-start">
      <div className="p-5 lg:max-w-[1200px] md:max-w-[950px] sm:max-w-[750px] max-w-[500px] mx-auto">
        <div className="flex flex-col gap-5">
          <h1 className="text-shadow-lg/30">
            Where Beauty <span className="text-white">Begins</span>
          </h1>
          <p className="text-shadow-lg/30">
            Experience luxury hair, skin & self-care with our expert team.
          </p>
          <div className="flex flex-col w-3/4 sm:grid grid-cols-2 gap-2">
            <button className="primary-btn">Book Your Appointment</button>
            <button className="secondary-btn">Explore Our Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainKeyVisual;
