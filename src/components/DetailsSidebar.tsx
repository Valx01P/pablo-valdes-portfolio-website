"use client";
import React from 'react'
import { useTheme } from "@/app/lib/store";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/app/lib/data';

const DetailsSidebar = () => {
  const pathname = usePathname();

  const { darkMode, toggleDarkMode } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleIconFileName = darkMode ? 'sun-2.svg' : 'moon.svg';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Shared project nav list, driven from the central data file.
  const NavLinks = () => (
    <nav className='flex flex-col gap-0.5 w-full'>
      {projects.map((p) => {
        const active = pathname === p.slug;
        return (
          <Link
            key={p.slug}
            href={p.slug}
            onClick={() => setMobileMenuOpen(false)}
            className={`group flex items-center gap-2.5 rounded-lg pl-3 pr-3 py-2.5 transition-colors ${active ? 'bg-black/[0.06] dark:bg-white/[0.07]' : 'hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'}`}
          >
            <span className={`h-5 w-[3px] rounded-full transition-colors ${active ? 'bg-[var(--accent-bright)]' : 'bg-transparent group-hover:bg-black/20 dark:group-hover:bg-white/25'}`} />
            <span className={`roboto-medium text-sm leading-tight ${active ? 'text-[var(--accent-bright)]' : 'text-black/80 dark:text-white/80'}`}>{p.title}</span>
            <span className='ml-auto roboto-medium text-[0.65rem] text-black/35 dark:text-white/35'>{p.year}</span>
          </Link>
        );
      })}
    </nav>
  );

  const mobileIcon = !isMobileMenuOpen ? (
    <svg xmlns="http://www.w3.org/2000/svg" className='hover:scale-125' width={22} height={22} viewBox="0 0 448 512">
      <path fill={`${!darkMode ? '#000' : '#ffffff'}`} d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className='hover:scale-125' width={22} height={22} viewBox="0 0 384 512">
      <path fill={`${!darkMode ? '#000' : '#ffffff'}`} d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
    </svg>
  );

  const homeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className='hover:scale-125' width={24} height={24} viewBox="0 0 576 512">
      <path fill={`${!darkMode ? '#000' : '#ffffff'}`} d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
    </svg>
  );

  return (
    <>
    {/* Desktop Nav */}
    <nav className={`${darkMode && "dark"} h-screen w-[70px] ${darkMode ? 'bg-[#0e0e10]/55 border-white/10' : 'bg-[#f5efe6]/60 border-black/10'} backdrop-blur-md border-r text-black dark:text-white fixed max-[430px]:hidden z-30`}>
      <div className='flex flex-col gap-8 h-full flex-1 items-center pt-20'>

        <div className='flex flex-col gap-6 items-center'>
          <div>
            <Link href="/">{homeIcon}</Link>
          </div>
          <div>
            <button onClick={toggleDarkMode} title='Theme switcher' className="bg-inherit text-black dark:text-white p-2">
              <Image src={`/svg/${toggleIconFileName}`} width={22} height={22} alt="dark mode" className='hover:scale-125 opacity-80 hover:opacity-100' />
            </button>
          </div>
          <div>
            <button onClick={toggleMobileMenu} className="bg-inherit text-black dark:text-white p-2">
              {mobileIcon}
            </button>
          </div>
        </div>

      </div>
    </nav>

    {/* Mobile Nav */}
    <nav className={`${darkMode && "dark"} h-[70px] w-full bg-transparent text-black dark:text-white fixed min-[431px]:hidden p-1 z-30`}>
      <div className='flex flex-row gap-8 glass h-full flex-1 items-center rounded-full px-4'>

        <div className='flex flex-row gap-6 justify-between flex-1 px-1'>
          <div className='flex flex-row gap-6 items-center'>
            <div>
              <Link href="/">{homeIcon}</Link>
            </div>
            <div>
              <button onClick={toggleDarkMode} title='Theme switcher' className="bg-inherit text-black dark:text-white p-2">
                <Image src={`/svg/${toggleIconFileName}`} width={22} height={22} alt="dark mode" className='hover:scale-125 opacity-80 hover:opacity-100' />
              </button>
            </div>
          </div>

          <div>
            <button onClick={toggleMobileMenu} className="bg-inherit text-black dark:text-white p-2">
              {mobileIcon}
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Menu drawer — a left side panel that slides in. Rendered OUTSIDE the
        blurred navs so its fixed positioning is relative to the viewport, and
        always mounted so the slide transition animates both ways. */}
    <div className={`${darkMode && "dark"} fixed inset-0 z-50 ${isMobileMenuOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isMobileMenuOpen}>
      {/* transparent click-catcher (no dimming) — click outside the panel to close */}
      <div onClick={toggleMobileMenu} className="absolute inset-0 bg-transparent" />
      {/* sliding panel */}
      <div
        className={`absolute top-0 left-0 h-full w-[300px] max-w-[82vw] flex flex-col bg-[#f6efe4]/97 dark:bg-[#0c0c10]/97 backdrop-blur-xl border-r border-black/10 dark:border-white/15 shadow-2xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='flex items-center justify-between px-4 py-4 border-b border-black/10 dark:border-white/10'>
          <h2 className='text-[0.7rem] uppercase tracking-[0.22em] roboto-bold text-black/50 dark:text-white/50'>Projects</h2>
          <button onClick={toggleMobileMenu} aria-label='Close menu' className='bg-inherit text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'>
            {mobileIcon}
          </button>
        </div>
        <div className='p-3 overflow-y-auto'>
          <NavLinks />
        </div>
      </div>
    </div>

    </>
  )
}

export default DetailsSidebar
