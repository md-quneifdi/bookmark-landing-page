import React from "react";
import JoinForm from "./JoinForm";

export default function JoinSection() {
  return (
    <section id="contact"
      className="w-full flex flex-col justify-center items-center bg-soft-blue py-20">
      <div className="join w-[75%] lg:w-[80%] md:w-full flex flex-col justify-center items-center ">
        <small className="uppercase text-lg sm:text-[16px] tracking-[5px] font-[400] py-5 text-white">
          35,000+ already joined
        </small>
        <h1 className="text-[3em] sm:text-[1.6rem] sm:w-full sm:px-[15px] font-[500] text-center 
        pt-4 sm:pt-1 pb-10 text-white">
          Stay up-to-date with what <br className="sm:hidden"/> we’re doing
        </h1>
      </div>
        <JoinForm />
    </section>
  );
}
