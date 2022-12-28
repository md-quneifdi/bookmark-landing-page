import React, { useState } from "react";
import TabOne from "../assets/images/illustration-features-tab-1.svg";
import TabTwo from "../assets/images/illustration-features-tab-2.svg";
import TabThree from "../assets/images/illustration-features-tab-3.svg";
import { features, ulItems } from "./Data";

export default function Tabs() {
    const [selected, setSelected] = useState(0);

 const selectHandler = (index) => {
    if (selected === index) {
      return setSelected(0)
   }

   setSelected(index)
   
  }

  return (
    <>
      <div className="feature-box w-[70%] sm:w-[86%] mx-auto py-6 sm:pt-6 sm:pb-2">
        <ul className="flex flex-row md:flex-col w-full grow text-2xl font-[400] ">
          {ulItems.map((item,index) => (
            <li key={item.id}
              onClick={() => selectHandler(index)}
              className={`border-b-2 border-[#e1e1e1]  flex-1 text-center pt-3 pb-5 sm:pt-4 sm:pb-6
            cursor-pointer text-dark-blue hover:text-soft-red transition-[0.7s] relative
            after:content-[""] after:absolute after:w-full after:h-[5px] after:bg-soft-red
            after:left-0 after:bottom-[-1.1%] after:z-0 ${
              selected === index ? "" : "after:hidden"
            }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {/* the part of tabs */}
      <div className="tabs-wrapper flex flex-row w-full">
        {features.map((item,index) => (
          <div key={item.id}
            className={`w-[70%] 2xl:w-[90%] xl:w-[98%] mx-auto xl:gap-10
            flex flex-row lg:flex-col justify-between items-center sm:text-center
            py-[100px] transition-[0.5s] ${selected === index ? "" : "hidden"}`}
          >
            <div className="left relative sm:w-[94%] sm:mx-auto">
              <img src={item.img} alt="hero-img" />
              <div
                className="shape w-[750px] 3xl:w-[60vw] 2xl:w-[62em] xl:w-[57em] lg:w-[52em] sm:w-[32em] sm:h-[200px] h-[350px] bg-soft-blue rounded-full 
              absolute bottom-[-30%] left-[-100%] 2xl:bottom-[-23%] 2xl:left-[-60%]  3xl:translate-x-[-40%]
              lg:bottom-[-23%] lg:left-[-65%] sm:bottom-[-23%] xl:bottom-[-23%] xl:left-[-70%] sm:left-[-50%] 
              z-[-1] translate-x-[12%] 2xl:translate-x-[-16%] "
              />
            </div>
            <div className="right sm:mt-[8em] lg:mt-[9em] ">
              <h1 className="text-4xl sm:text-3xl font-[500] text-dark-blue lg:text-center">
                {item.title}
              </h1>
              <p className="text-xl font-[400] text-grayish-blue max-w-[470px] sm:max-w-[90%] lg:mx-auto
               py-11 leading-[1.5] lg:text-center">
                {item.paragraph}
              </p>
              <div className="buttons text-xl flex flex-row sm:justify-center space-x-8 sm:w-full  text-dark-blue ">
                <button
                  type="button"
                  className="text-white bg-soft-blue py-3 px-6 block lg:mx-auto
                  rounded-[5px] font-[400] drop-shadow-lg text-center
                  hover:bg-white hover:text-soft-blue border-4
                  border-soft-blue hover:border-soft-blue transition-[0.8s]"
                >
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
