import React, { useState } from "react";
import bizLogo from "../assets/icons/Luxe-and-Co Logo.png";
import { HiBars3BottomRight } from "react-icons/hi2";
import SideNav from "./SideNav";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  const [onScroll, setOnScroll] = useState(false);

  window.onscroll = (e) => {
    if (window.scrollY > 0) {
      setOnScroll(true);
    } else if (window.scrollY < 2) {
      setOnScroll(false);
    }
  };

  return (
    <>
      <div
        className={`flex p-5 items-center mx-auto py-[20px] fixed top-0 left-0 right-0 z-5 ${
          onScroll ? "bg-black/95" : "bg-transparent"
        }`}
      >
        <div className="flex w-full items-center justify-center max-w-lapDesk mx-auto">
          <div className="flex w-1/4 items-center gap-2">
            <img src={bizLogo} alt="Luxe&Co logo" width={40} />
            <p className="" id="biz-logo">
              <span className="text-[#FBE035]">Luxe</span>&Co.
            </p>
          </div>
          <div className="hidden w-3/4 justify-end lg:flex">
            <ul className="flex justify-between text-white w-1/4 tracking-wider font-extralight text-sm">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Hair</a>
              </li>
              <li>
                <a href="">Nail</a>
              </li>
              <li>
                <a href="">Massage</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-end items-center lg:hidden w-full">
            <HiBars3BottomRight
              color="#FBE035"
              size={35}
              onClick={() => toggleMenu()}
              className="cursor-pointer"
            />
          </div>
          <SideNav menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        </div>
      </div>
    </>
  );
};

export default Header;
