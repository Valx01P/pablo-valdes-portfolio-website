"use client";
import React from 'react'
import { useTheme } from "@/app/lib/store";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const DetailsSidebar = () => {

  const { darkMode, toggleDarkMode } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleIconFileName = darkMode ? 'sun-2.svg' : 'moon.svg';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileIcon = !isMobileMenuOpen ? (
    <svg xmlns="http://www.w3.org/2000/svg" className='hover:scale-125' width={30} height={30} viewBox="0 0 448 512">
      <path fill={`${!darkMode ? '#000' : '#ffffff'}`} d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className='hover:scale-125' width={32} height={32} viewBox="0 0 384 512">
      <path fill={`${!darkMode ? '#000' : '#ffffff'}`} d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
    </svg>
  );

  return (
    <>
    {/* Desktop Nav */}
    <nav className={`${darkMode && "dark"} h-screen w-[70px] light-2 dark:bg-yt text-black dark:text-white fixed max-[430px]:hidden`}>
      <div className='flex flex-col gap-8 light-2-gradient dark:dark-gradient h-full flex-1 items-center pt-20'>

        <div className='flex flex-col gap-6 items-center'>
          <div>
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className='hover:scale-125' width={32} height={32} viewBox="0 0 576 512">
                <path fill={`${!darkMode ? '#000' : '#ffffff'}`} d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
              </svg>
            </Link>
          </div>
          <div>
            <button onClick={toggleDarkMode} title='Theme switcher' className="bg-inherit text-black dark:text-white p-2">
              <Image src={`/${toggleIconFileName}`} width={30} height={30} alt="dark mode" className='hover:scale-125' />
            </button>
          </div>
          <div>
            <button onClick={toggleMobileMenu} className="bg-inherit text-black dark:text-white p-2">
              {mobileIcon}
            </button>
          </div>
        </div>
          
        {/* Desktop  Menu */}
        <div className={`${!isMobileMenuOpen && "hidden"} fixed h-full top-0 left-[70px] w-full`}>
          <div className='fixed h-full top-0 w-1/2 max-[900px]:w-2/3 light-3-gradient dark:dark-gradient-2'>
            <div className='flex flex-col gap-4 items-center justify-center w-full h-full pb-8'>
              <div>
                <h1 className='text-3xl roboto-bold text-black dark:text-white pb-8 px-6 text-center text-wrap'>Project Navigation Menu</h1>
              </div>
                          
              <div>
                <Link href="/theoretical-stonk-plays">
                  <h1 className='text-2xl roboto-bold text-black dark:text-white grow'>Theoretical Stonk Plays</h1>
                </Link>
              </div>

              <div>
                <Link href="/practical-synth-theme">
                  <h1 className='text-2xl roboto-bold text-black dark:text-white grow'>Practical Synth Theme</h1>
                </Link>
              </div>
              
              <div>
                <Link href="/general-planner">
                  <h1 className='text-2xl roboto-bold text-black dark:text-white grow'>General Planner</h1>
                </Link>
              </div>

              <div>
                <Link href="/portfolio">
                  <h1 className='text-2xl roboto-bold text-black dark:text-white grow'>Portfolio</h1>
                </Link>
              </div>

              <div>
                <Link href="/iserver">
                  <h1 className='text-2xl roboto-bold text-black dark:text-white grow'>iServer</h1>
                </Link>
              </div>
            </div>
          </div>
          <div className='backdrop-blur-sm fixed w-1/2 max-[900px]:w-1/3 h-full top-0 right-[-70px]' onClick={toggleMobileMenu}></div>
        </div>

      </div>
    </nav>

    {/* Mobile Nav */}
    <nav className={`${darkMode && "dark"} h-[70px] w-full bg-transparent text-black dark:text-white fixed min-[430px]:hidden p-1`}>
      <div className='flex flex-row gap-8 light-2-gradient dark:dark-gradient h-full flex-1 items-center rounded-full border-2px border-black px-4'>

        <div className='flex flex-row gap-6 justify-between flex-1 px-1'>
          <div className='flex flex-row gap-6 items-center'>
            <div>
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className='hover:scale-125' width={32} height={32} viewBox="0 0 576 512">
                <path fill={`${!darkMode ? '#000' : '#ffffff'}`} d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
              </svg>
            </Link>
            </div>
            <div>
              <button onClick={toggleDarkMode} title='Theme switcher' className="bg-inherit text-black dark:text-white p-2">
                <Image src={`/${toggleIconFileName}`} width={28} height={28} alt="dark mode" className='hover:scale-125' />
              </button>
            </div>
          </div>

          <div>
            <button onClick={toggleMobileMenu} className="bg-inherit text-black dark:text-white p-2">
              {mobileIcon}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${!isMobileMenuOpen && "hidden"} fixed h-svh top-0 left-0 w-full light-2-gradient dark:dark-gradient`}>
          <button onClick={toggleMobileMenu} className="bg-inherit text-black dark:text-white p-2 absolute top-2 right-2">
            {mobileIcon}
          </button>

          <div className='flex flex-col gap-4 items-center justify-center w-full h-full'>
            <div>
              <h1 className='text-3xl roboto-bold text-black dark:text-white pb-8 px-6 text-center text-wrap'>Project Navigation Menu</h1>
            </div>
                        
            <div>
              <Link href="/theoretical-stonk-plays">
                <h1 className='text-2xl roboto-bold text-black dark:text-white grow'>Theoretical Stonk Plays</h1>
              </Link>
            </div>

            <div>
              <Link href="/practical-synth-theme">
                <h1 className='text-2xl roboto-bold text-black dark:text-white grow'>Practical Synth Theme</h1>
              </Link>
            </div>
            
            <div>
              <Link href="/general-planner">
                <h1 className='text-2xl roboto-bold text-black dark:text-white grow'>General Planner</h1>
              </Link>
            </div>

            <div>
              <Link href="/portfolio">
                <h1 className='text-2xl roboto-bold text-black dark:text-white grow'>Portfolio</h1>
              </Link>
            </div>

            <div>
              <Link href="/iserver">
                <h1 className='text-2xl roboto-bold text-black dark:text-white grow'>iServer</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    </>
  )
}

export default DetailsSidebar