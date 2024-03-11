import React from 'react'

type FooterProps = {
  darkMode: boolean;
  swagMode: boolean;
  toggleSwagMode: () => void;
}

const Footer = (props: FooterProps) => {

  const currentYear = new Date().getFullYear();

   // Function to handle smooth scrolling to section IDs
   const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    };
  };

  return (
    <footer id='footer' className='h-[11dvh] light dark:background text-black dark:text-white w-full max-sm:px-3 flex justify-center'>
      <div className="relative layout-container mx-auto flex items-center py-4">
        <div className="flex w-full max-[850px]:justify-center max-[850px]:items-center justify-start max-[560px]:flex-col flex-row p-4">
            <h2 className="flex w-auto max-[420px]:text-base roboto-black text-2xl text-black dark:text-white text-wrap">
              © {currentYear} Pablo Valdes.&nbsp;
            </h2>
            <h2 className="flex w-auto max-[420px]:text-base roboto-black text-2xl text-black dark:text-white text-wrap">
              All rights reserved.
            </h2>
        </div>
        <div title='Swag mode switcher' className={`${!props.swagMode ? 'swag' : 'no-swag'} ${!props.swagMode ? 'swag-bg-btn' : 'no-swag-bg-btn'} rounded-full absolute top-[-1.5rem] max-[850px]:left-2 min-[850px]:right-20 w-12 h-12 p-2 cursor-pointer`}>
          <a onClick={props.toggleSwagMode}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill={!props.swagMode ? '#0ec6e6' : '#2b2b2b' }>
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </a>
        </div>
        <div title='Scroll back to the top' className='rounded-full pointer-bg absolute top-[-1.5rem] right-2 w-12 h-12 p-2.5 cursor-pointer'>
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