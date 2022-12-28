import React from "react";
import FooterLogo from "../assets/images/logo-bookmark-footer.svg";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-blue p-10 flex lg:flex-col justify-between lg:justify-center items-center">
      <div className="w-[80%] 2xl:w-[90%] mx-auto flex lg:flex-col  justify-between lg:justify-center items-center">
        <div className="right flex grow lg:flex-col justify-between items-center">
          <span className="w-[184px]">
            <img src={FooterLogo} alt="" className="w-full object-contain align-middle"/>
          </span>
          <ul
            className="flex grow lg:flex-col space-x-8 lg:space-x-0 lg:justify-center items-center 
            lg:my-11
              uppercase text-md tracking-[2px] text-white
              p-0 transition-[0.8s] ml-11 lg:ml-0 sm:ml-0 mt-1 leading-1"
          >
            <li className="cursor-pointer font-[400] hover:text-soft-red">
              Features
            </li>
            <li className="cursor-pointer font-[400] hover:text-soft-red lg:my-5">
              Pricing
            </li>
            <li className="cursor-pointer font-[400] hover:text-soft-red">
              Contact
            </li>
          </ul>
        </div>
        <div className="left  flex  justify-center gap-10 last:mt-2">
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </footer>
  );
}
