import React from "react";

const MainKeyVisual = () => {
  return (
    <div className="mkv-section w-full h-screen flex items-center">
      <div className="p-5 md:p-10 max-w-lapDesk mx-auto grow">
        <div className="flex flex-col gap-5 md:gap-10 w-full">
          <h1 className="text-shadow-lg/30 md:text-[65px]">
            Where Beauty <span className="text-white">Begins</span>
          </h1>
          <p className="text-shadow-lg/30 md:text-2xl">
            Experience luxury hair, skin & self-care with our expert team.
          </p>
          <div className="grid lg:grid-cols-2 gap-2 md:w-1/2">
            <button className="primary-btn">Book Your Appointment</button>
            <button className="secondary-btn">Explore Our Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainKeyVisual;
