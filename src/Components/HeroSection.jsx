import React from 'react';
import HeroImg from '../assets/images/illustration-hero.svg';

export default function HeroSection() {
  return (
    <section className='w-[80%] max-w-[1800px] 2xl:w-[90%] sm:w-[96%] mx-auto flex lg:flex-col-reverse justify-between items-center py-[100px] sm:px-0 sm:mt-10'>
      <div className="left sm:mt-20 sm:text-center sm:mx-auto lg:mt-[8em] lg:text-center ">
        <h1 className='text-6xl xl:text-[2.5rem] font-[500] text-dark-blue 
        sm:text-4xl xs:text-3xl leading-[1.4] sm:leading-2'>
          A Simple Bookmark <br /> Manager</h1>
        <p className='text-xl font-[400] text-grayish-blue max-w-[470px] sm:max-w-[86%] py-11 leading-[1.5] lg:mx-auto'>
          A clean and simple interface to organize your favourite websites.
          Open a new browser tab and see your sites load instantly.
          Try it for free.
        </p>
        <div className="buttons text-xl flex flex-row space-x-8 xl:space-x-6 sm:space-x-5 text-dark-blue sm:ml-2 lg:justify-center ">
          <button type='button'
            className='text-white bg-soft-blue py-3 px-6 sm:px-0 sm:w-[160px]
              rounded-[5px] font-[400] drop-shadow-lg text-center
              hover:bg-white hover:text-soft-blue border-4
              border-soft-blue hover:border-soft-blue transition-[0.8s] sm:text-lg'>
            Get it on Chrome
          </button>
          <button type='button'
            className='text-dark-blue bg-[#e5e5e5] py-3 px-6 sm:px-0 sm:w-[160px]
              rounded-[5px] font-[400] drop-shadow-xl text-center
              hover:bg-white hover:text-soft-blue border-4
              border-[#e5e5e5] hover:border-soft-blue transition-[0.8s] sm:text-lg
              '>
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="right relative sm:min-w-[92%] mx-auto 3xl:flex  3xl:justify-end ">
        <img src={HeroImg} alt="hero-img" className='sm:w-full sm:object-contain' />
        <div
          className="shape w-[880px] 3xl:w-[60vw] h-[400px] sm:w-[400px] sm:h-[200px] bg-soft-blue rounded-full 
          absolute bottom-[-12%] right-[-56%] 3xl:bottom-[-12%] 3xl:right-[-98%]
          3xl:translate-x-[1%] z-[-1] sm:bottom-[-15%] sm:right-[-47%] "
        />
      </div>
    </section>
  )
}
