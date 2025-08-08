import React from "react";
import services from "../Services";

const ServiceTemplate = () => {
  return (
    <div>
      {services.map((service, index) => (
        <div key={index}>
          <div>
            <img src={service.img.src} alt={service.img.alt} />
          </div>
          <div>
            <h2>{service.h2}</h2>
            <h3>{service.subt}</h3>
            <div>
              {service.services.map((item, idx) => (
                <div key={idx}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceTemplate;
