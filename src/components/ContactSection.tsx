import React from 'react'
import Image from 'next/image';

type ContactProps = {
  darkMode: boolean;
}

const ContactSection = (props: ContactProps) => {
  return (
    <section className='pb-16 light-2 dark:background-2 w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center align-middle px-4'>
        <div className='h-auto w-full flex flex-1 max-[850px]:justify-center'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>Contact</h1>
        </div>
        {/* Contact content */}
        <div className='flex flex-col h-auto w-full mt-16 mb-4 p-8 pb-12 light-card dark:background-card rounded-lg gap-4'>

          <div className='flex flex-1'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odio labore error quis sint porro, exercitationem unde. Id est praesentium odio maxime ea consectetur ab, debitis commodi voluptatem exercitationem qui!</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection