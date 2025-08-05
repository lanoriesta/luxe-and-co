import React, { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";

const SideNav = ({ menuToggle, setMenuToggle }) => {
  //Stop scrlling when menu is open
  useEffect(() => {
    if (menuToggle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuToggle]);
  return (
    <div
      className={`fixed top-0 bottom-0 z-10 bg-black/80 backdrop-blur-sm h-screen w-full flex justify-end transition-all duration-200 ease-in-out ${
        menuToggle ? "right-0" : "-right-full"
      }`}
    >
      <div
        className={` flex flex-col gap-y-5 w-1/2 h-full bg-black p-5 z-20 transition-all delay-200 duration-200 ease-in-out ${
          menuToggle ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex flex-none w-full justify-end">
          <HiXMark
            color="#FBE035"
            size={35}
            onClick={() => setMenuToggle(false)}
            className="cursor-pointer"
          />
        </div>
        <ul className="flex flex-col flex-grow items-start justify-start text-white tracking-wider font-extralight text-sm gap-y-5">
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
        <div className="flex flex-none items-center gap-3">
          <img src="src\assets\icons\facebook.svg" alt="facebook" width="20" />
          <img
            src="src\assets\icons\Instagram_dark.svg"
            alt="facebook"
            width="20"
          />
          <img
            src="src\assets\icons\X (formerly Twitter)_dark.svg"
            alt="facebook"
            width="20"
          />
          <img src="src\assets\icons\tiktok.svg" alt="facebook" width="20" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
