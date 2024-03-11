"use client";
import React from 'react'
import { useTheme } from "@/app/lib/store";
import Image from 'next/image';


const DetailsSidebar = () => {

  const { darkMode, toggleDarkMode } = useTheme();
  const toggleIconFileName = darkMode ? 'sun-2.svg' : 'moon.svg';

  return (
    <nav className={`${darkMode && "dark"} h-screen w-[70px] light dark:background text-black dark:text-white fixed`}>
      <div className='flex flex-col gap-8 light dark:background h-full flex-1 items-center pt-20'>

        <div className='flex flex-col gap-6 items-center'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 576 512">
              <path fill={`${!darkMode ? '#000' : '#ffffff'}`} d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
            </svg>
          </div>
          <div>
            <button onClick={toggleDarkMode} title='Theme switcher' className="light dark:background text-black dark:text-white p-2">
              <Image src={`/${toggleIconFileName}`} width={30} height={30} alt="dark mode" className='hover:scale-125' />
            </button>
          </div>
        </div>

        <div>
          <h1 className='text-3xl roboto-bold text-black dark:text-white'>5</h1>
        </div>

        <div>
          <h1 className='text-3xl roboto-bold text-black dark:text-white'>4</h1>
        </div>
        
        <div>
          <h1 className='text-3xl roboto-bold text-black dark:text-white'>3</h1>
        </div>
        
        <div>
          <h1 className='text-3xl roboto-bold text-black dark:text-white'>2</h1>
        </div>
        
        <div>
          <h1 className='text-3xl roboto-bold text-black dark:text-white'>1</h1>
        </div>
      
      </div>
    </nav>
  )
}

export default DetailsSidebar