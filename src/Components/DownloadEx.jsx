import React from 'react';
import { downloadEx } from './Data';

export default function DownloadEx() {
  return (
    <section id='pricing'
      className='w-[90%] sm:w-full mx-auto flex flex-col items-center py-11'>
        <h2 className='text-3xl text-dark-blue font-[500]'>Download the extension</h2>
        <p
          className='max-w-[520px] text-center 
          text-grayish-blue text-lg mt-3 font-[400]'>
          We’ve got more browsers in the pipeline. Please do let us know if you’ve 
          got a favourite you’d like us to prioritize.
      </p>
      <div className="flex flex-row justify-evenly lg:gap-10 flex-nowrap 2xl:flex-wrap md:flex-col
       w-[70%] 2xl:w-[80%] mx-auto py-11">

        {downloadEx.map(item => (
          <div key={item.id} className="box-1 w-[300px] shadow-xl bg-white h-[420px]  even:mt-10 last:mt-20
            xl:even:mt-10 xl:last:mt-10 xl:mt-10 flex flex-col items-center rounded-lg lg:mx-auto">
            <img src={item.browserImg} alt="ChromeIcon" className='w-[42%] pt-12 pb-3 ' />
            <h2 className='text-[1.5rem] pt-3 pb-2 font-[500]'>{item.title}</h2>
            <p className='text-md font-[400] text-grayish-blue'>{item.paragraph}</p>
            <img src={item.dotsImg} alt="dots image" className='w-full py-7 ' />
            <button type='button'
              className='text-white text-lg bg-soft-blue py-2.5 px-6 
                rounded-[5px] font-[400] drop-shadow-lg text-center
                hover:bg-white hover:text-soft-blue border-4
                border-soft-blue hover:border-soft-blue transition-[0.8s]'>
              {item.btn}
            </button>
        </div>
       ))}

      </div>
    </section>
  )
}
