import React from "react";
import services from "../services";

const ServiceTemplate = () => {
  return (
    <div>
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center mb-10 w-full">
          <div className="h-[300px] w-full">
            <img
              src={service.img.src}
              alt={service.img.alt}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={`black-bg
            } p-8 w-80 mx-auto -mt-20 flex flex-col gap-3 relative`}
          >
            <h2>{service.h2}</h2>
            <h3 className="text-white font-bold text-lg">{service.subt}</h3>
            <div className="flex flex-col gap-3 pt-3">
              {service.services.map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-primary font-bold">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div
              className="w-full h-full absolute bottom-0 left-0 bg-repeat"
              style={{
                backgroundImage: 'url("src/assets/images/worn-dots-bg.png")',
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceTemplate;
