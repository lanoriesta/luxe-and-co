import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between p-5 gap-y-5">
      <div className="flex flex-col gap-y-3">
        <h3 className="text-[25px] text-white">Contact Information</h3>
        <div>
          <p>
            email:{" "}
            <a className="text-primary" href="mailto:">
              info@luxeandco.com
            </a>
          </p>
          <p>
            phone:{" "}
            <a className="text-primary" href="tel:+">
              (809) 532-0099
            </a>
          </p>
        </div>
        <div className="flex justify-begin gap-4 w-full">
          <img width={30} src="src/assets/icons/facebook.svg" alt="Facebook" />
          <img
            width={30}
            src="src/assets/icons/Instagram_dark.svg"
            alt="Instagram"
          />
          <img
            width={30}
            src="src/assets/icons/X (formerly Twitter)_dark.svg"
            alt="Instagram"
          />
          <img width={30} src="src/assets/icons/tiktok.svg" alt="Instagram" />
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239726.61886291433!2d-74.14431237496414!3d40.69728463488814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sph!4v1755610751276!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col gap-y-5">
        <button className="primary-btn">Services</button>
        <p className="opacity-75">Luxe & Co. @ 2025 All rights reserved.</p>
        <p className="opacity-75">
          <span className="text-primary">Terms of Use</span> |{" "}
          <span className="text-primary">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
