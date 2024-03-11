import React from 'react'
import Link from 'next/link';

type FooterProps = {
  darkMode: boolean;
}

const Footer = (props: FooterProps) => {

   // Function to handle smooth scrolling to section IDs
   const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    };
  };

  return (
    <footer id='footer' className='className="h-[11dvh] light dark:background text-black dark:text-white w-full max-sm:px-3 flex justify-center'>
      <div className="relative layout-container mx-auto flex items-center py-4">
        <div className="flex w-full max-[850px]:justify-center max-[850px]:items-center justify-start max-[560px]:flex-col flex-row p-4">
            <h2 className="flex w-auto max-[420px]:text-base roboto-black text-2xl text-black dark:text-white text-wrap">
              © 2024 Pablo Valdes.&nbsp;
            </h2>
            <h2 className="flex w-auto max-[420px]:text-base roboto-black text-2xl text-black dark:text-white text-wrap">
              All rights reserved.
            </h2>
        </div>
        <div className='rounded-full bg-black absolute top-[-1.5rem] right-2 w-12 h-12 p-2.5 cursor-pointer hover:scale-125'>
          <a onClick={() => scrollToSection('header')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#ffffff" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer