import React from 'react';
import Tabs from './Tabs';


export default function Features() {
  return (
    <section id='features'
      className='w-[80%] 2xl:w-[90%] xl:w-[94%] sm:w-full mx-auto flex flex-col items-center py-11'>
      <h2 className='text-3xl text-dark-blue font-[500]'>Features</h2>
      <p
        className='max-w-[470px] sm:max-w-[86%] sm:mx-auto text-center 
        text-grayish-blue text-lg mt-3 font-[400]'>
        Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
      </p>
      <Tabs />
    </section>
  )
}
