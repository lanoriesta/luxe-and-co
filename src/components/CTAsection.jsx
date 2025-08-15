import React from "react";

const CTAsection = () => {
  return (
    <div className="flex flex-col justify-center p-5 gap-y-5">
      <div>
        <h2 className="text-white">Ready for Your Luxe Experience</h2>
      </div>
      <div className="flex flex-col gap-y-5">
        <button className="primary-btn">Book Now</button>
        <button className="secondary-btn">Talk to a Stylist</button>
      </div>
    </div>
  );
};

export default CTAsection;
