import React from "react";
import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <section className="w-[90%] sm:w-full mx-auto flex flex-col items-center py-28">
      <h2 className="text-3xl sm:text-center sm:leading-[1.5] text-dark-blue font-[500]">
        Frequently Asked Questions
      </h2>
      <p
        className="max-w-[520px] sm:max-w-[92%] text-center 
        text-grayish-blue text-lg mt-3 font-[400]"
      >
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <Accordion />
      
       <button type='button'
              className='text-white bg-soft-blue py-3 px-6 block 
                rounded-[5px] font-[400] drop-shadow-lg text-center
                hover:bg-white hover:text-soft-blue border-4
                border-soft-blue hover:border-soft-blue transition-[0.8s]'>
              More info
        </button>
    </section>
  );
}
