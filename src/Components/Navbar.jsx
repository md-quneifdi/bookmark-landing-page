import React, { useState } from "react";
import Logo from "../assets/images/logo-bookmark.svg";
import FooterLogo from "../assets/images/logo-bookmark-footer.svg";
import MenuIcon from "../assets/images/icon-hamburger.svg";
import CloseIcon from "../assets/images/icon-close.svg";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav
      className={`max-w-[80%] lg:max-w-[100%] mx-auto md:mx-auto px-3 py-3
        flex flex-row sm:flex-col justify-between lg:justify-center items-center ${
          toggleMenu
            ? "lg:bg-dark-blue/60 lg:fixed w-full relative z-10 lg:h-screen"
            : ""
        }`}
    >
      <div className="logo w-[185px] h-[94px] lg:absolute top-[1.7rem] left-8 md:top-5 md:left-5 ">
        <img
          src={toggleMenu ? FooterLogo : Logo}
          className="w-full h-full object-contain"
          alt="logo"
        />
      </div>
      <span
        className="hidden lg:block w-6 h-6 cursor-pointer lg:absolute md:top-[3.2rem] md:right-5 top-[3.2rem] right-9"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <img
          src={toggleMenu ? CloseIcon : MenuIcon}
          alt="..."
          className="w-full h-full object-contain"
        />
      </span>
      <div
        className={`list flex lg:flex-col justify-between items-center  min-w-[36%] sm:min-w-[100%] sm:max-w-full xl:min-w-[60%]
           max-w-[700px] sm:mt-24 duration-500 ${
             toggleMenu ? "" : "lg:hidden"
           } `}
      >
        <ul
          className="flex grow space-x-8 lg:space-x-0 lg:gap-y-3 items-center lg:flex-col
              uppercase text-lg lg:text-2xl md:text-xl sm:text-lg tracking-[2px] text-dark-blue md:border-grayish-blue sm:text-center
              p-6 md:py-11 transition-[0.8s] lg:text-white"
        >
          <li className="cursor-pointer font-[400] hover:text-soft-red lg:border-b-[2px] md:pt-0 lg:pb-4 lg:w-[420px] sm:w-[220px] lg:border-[#eee] lg:text-center">
            <a href="#features" className="no-underline">Features</a>
          </li>
          <li className="cursor-pointer font-[400] hover:text-soft-red lg:border-b-[2px] lg:py-6 md:py-4 lg:w-[420px] sm:w-[220px] lg:border-[#eee] lg:text-center">
            <a href="#pricing" className="no-underline">Pricing</a>
          </li>
          <li className="cursor-pointer font-[400] hover:text-soft-red lg:border-b-[2px] lg:py-6 md:py-4 lg:w-[420px] sm:w-[220px] lg:border-[#eee] lg:text-center">
            <a href="#contact" className="no-underline">Contact</a>
          </li>
        </ul>
        <button
          type="button"
          className="w-[124px] lg:w-5/6  sm:w-[240px] h-[6vh] sm:h-[8vh] bg-soft-red lg:bg-dark-blue/60 text-white font-[500]
                   ml-3 sm:ml-0 pt-1 uppercase rounded-[4px] tracking-[2px] text-center
                   hover:bg-white hover:text-soft-red hover:border-4 lg:border-4 lg:border-white 
                   hover:lg:border-dark-blue hover:lg:text-dark-blue
                   transition duration-500 lg:my-9 md:my-5 md:mb-11 hover:text-xl 
                   "
        >
          login
        </button>
        <div className={`social-icons justify-center gap-10 last:mt-2 hidden lg:flex`}>
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </nav>
  );
}
