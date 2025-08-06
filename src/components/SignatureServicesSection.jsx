import React from "react";
import services from "../Services";

const SignatureServicesSection = () => {
  return (
    <div>
      <div>
        <h2 className="p-5">Our Signature Services</h2>
        <div className="flex flex-col my-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="basis-[10vh] w-full bg-no-repeat bg-cover bg-center flex items-center p-5"
              style={{ backgroundImage: `url(${service.img.src})` }}
            >
              <h3 className="text-lg tracking-wider text-shadow-2xs">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignatureServicesSection;
