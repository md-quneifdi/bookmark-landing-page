import React, { useState } from "react";
import { accordion } from "./Data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

 const toggleHandler = (index) => {
    if (selected === index) {
      return setSelected(null)
   }

   setSelected(index)
   
  }

  return (
    <div className="w-full  my-11 sm:mb-5 p-5 flex flex-col  items-center">
      {accordion.map((item, index) => (
        <div key={item.id}
        className="box w-[50%] xl:w-[85%] sm:w-[94%] mx-auto py-5 flex grow flex-col justify-between 
       border-t-2 border-grayish-blue last:border-b-2">
        
        <div className="heading flex justify-between w-full ">
          <h2 className="text-xl sm:text-[18px] font-[500] hover:text-soft-red transition-[0.7s] cursor-pointer">
            {item.question}
          </h2>
          <span
            className={`w-[30px] h-[20px] cursor-pointer mt-2  ${
              selected == index ? "translate-x-[-14px] rotate-[180deg] transition-[1s] " : ""
            } mr-5 sm:mr-0`}
            onClick={() => toggleHandler(index)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
              <path
                fill="none"
                stroke={selected == index ? 'hsl(0, 94%, 66%)' : '#5267DF'}
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </span>
        </div>
        <div
          className={`content  mx-auto py-4 animate-toggle cursor-pointer transition-[.4s] w-full
          ${selected === index ? "flex flex-col" : "hidden"} `}
        >
          <p className="max-w-[470px] text-grayish-blue text-lg mt-3 font-[400]">
            {item.answer}
          </p>
        </div>
      </div>
      ))}
    </div>
  );
}
