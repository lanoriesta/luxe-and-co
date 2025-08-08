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
              className="basis-[15vh] w-full bg-no-repeat bg-cover bg-center flex items-center p-5"
              style={{
                backgroundImage: `linear-gradient(270deg,rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 0.52) 40%, rgba(0, 0, 0, 1) 90%),url(${service.img.src})`,
              }}
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
