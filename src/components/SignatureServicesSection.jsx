import React from "react";
import services from "../services";

const SignatureServicesSection = () => {
  return (
    <>
      <div className=" max-w-lapDesk mx-auto">
        <h2 className="p-5">Our Signature Services</h2>
        <div className="flex flex-col w-full my-5 md:flex-row">
          {services.map((service) => (
            <div
              key={service.id}
              className="basis-[15vh] w-full md:basis-auto md:h-[200px] bg-no-repeat bg-cover bg-center flex items-center md:items-end p-5"
              style={{
                backgroundImage: `linear-gradient(270deg,rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 0.52) 40%, rgba(0, 0, 0, 1) 90%),url(${service.img.src})`,
              }}
            >
              <h3 className="text-white text-5xl font-light tracking-widest text-shadow-2xs">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SignatureServicesSection;
