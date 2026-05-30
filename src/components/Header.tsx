"use client";
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  swagMode: boolean;
};
  
  const Header = (props: HeaderProps) => {
  const githubIconFileName = props.darkMode ? 'github-light-2.svg' : 'github-dark-2.svg';
  const linkedinIconFileName = props.darkMode ? 'linkedin-light.svg' : 'linkedin-dark.svg';
  const toggleIconFileName = props.darkMode ? 'sun-2.svg' : 'moon.svg';

  // Function to handle smooth scrolling to section IDs
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    };
  };

  // The sticky header is always pinned in view, so scroll the window to reach the top.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id='header' className="sticky top-0 z-40 h-auto w-full max-sm:px-3 flex justify-center backdrop-blur-md bg-[#f5efe6]/75 dark:bg-[#0e0e10]/60 border-b border-black/10 dark:border-white/10 text-black dark:text-white">
      <nav className="layout-container mx-auto flex items-center justify-between py-2.5 px-4">
        {/* Title */}
        <div className="flex items-center w-1/4 max-lg:w-1/2 max-[520px]:hidden gap-5 justify-start">
            <a onClick={scrollToTop} className='py-2 cursor-pointer'>
                <h1 className="roboto-black text-xl text-black dark:text-white whitespace-nowrap tracking-tight">
                    Pablo Valdes
                </h1>
            </a>
        </div>
        <div className="flex items-center min-[520px]:hidden max-[520px]:w-1/4 max-[300px]:w-1/5 gap-5 justify-center">
            <a onClick={scrollToTop} className='py-2 cursor-pointer'>
                <h1 className="items-center roboto-black text-xl text-black dark:text-white whitespace-nowrap tracking-tight">
                    PV
                </h1>
            </a>
        </div>
        
    
        {/* Page Navigation */}
        <div className="flex w-1/2 items-center justify-center gap-[clamp(0.75rem,2vw,2.75rem)] max-lg:hidden">
          <a onClick={scrollToTop} className='roboto-medium text-sm text-black text-transition-light dark:text-white dark:text-transition-dark cursor-pointer'>
            Home
          </a>
          <a onClick={() => scrollToSection('experience')} className='roboto-medium text-sm text-black text-transition-light dark:text-white dark:text-transition-dark cursor-pointer'>Experience</a>
          <a onClick={() => scrollToSection('projects')} className='roboto-medium text-sm text-black text-transition-light dark:text-white dark:text-transition-dark cursor-pointer'>Projects</a>
          <a onClick={() => scrollToSection('about')} className='roboto-medium text-sm text-black text-transition-light dark:text-white dark:text-transition-dark cursor-pointer'>About</a>
          <a onClick={() => scrollToSection('contact')} className='roboto-medium text-sm text-black text-transition-light dark:text-white dark:text-transition-dark cursor-pointer'>Contact</a>
        </div>
        

        {/* Social Icons, Resume, Dark Mode Toggle */}
        <div className="flex items-center w-1/4 max-lg:w-1/2 max-[520px]:w-3/4 max-[300px]:w-4/5 justify-end gap-3 max-[300px]:gap-1">
          <a href='https://github.com/Valx01P' target="_blank" rel="noopener noreferrer" className='flex text-black max-[350px]:hidden'>
            <Image src={`/svg/${githubIconFileName}`} title='View my Github profile' width={22} height={22} alt="github icon" className='hover:scale-125' />
          </a>
          <a href='https://www.linkedin.com/in/pablovaldes01/' target="_blank" rel="noopener noreferrer" className='flex text-black max-[350px]:hidden'>
            <Image src={`/svg/${linkedinIconFileName}`} title='View my LinkedIn profile' width={24} height={24} alt="linkedin icon" className='hover:scale-125' />
          </a>
          <a href="/pdf/Pablo_Valdes_Resume.pdf" title='Open resume in new tab' target="_blank" rel="noopener noreferrer">
            <button className="align-center bg-transparent resume-btn-light dark:resume-btn-dark text-sm py-1 px-3 rounded-md max-[350px]:hidden">
              Resume
            </button>
          </a>
          <button onClick={props.toggleDarkMode} title='Theme switcher' className="bg-transparent text-black dark:text-white p-1.5 max-[350px]:hidden">
            <Image src={`/svg/${toggleIconFileName}`} width={22} height={22} alt="theme switcher" className='hover:scale-125 opacity-80 hover:opacity-100' />
          </button>

          {/* Mobile */}
          <a href='https://github.com/Valx01P' target="_blank" rel="noopener noreferrer" className='flex text-black min-[350px]:hidden'>
            <Image src={`/svg/${githubIconFileName}`} width={20} height={20} alt="github icon" className='hover:scale-125' />
          </a>
          <a href='https://www.linkedin.com/in/pablovaldes01/' target="_blank" rel="noopener noreferrer" className='flex text-black min-[350px]:hidden'>
            <Image src={`/svg/${linkedinIconFileName}`} width={22} height={22} alt="linkedin icon" className='hover:scale-125' />
          </a>
          <a href="/pdf/Pablo_Valdes_Resume.pdf" title='Open resume in new tab' target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent resume-btn-light dark:resume-btn-dark text-xs py-1 px-2 rounded-md min-[350px]:hidden">
              Resume
            </button>
          </a>
          <button onClick={props.toggleDarkMode} className="bg-transparent text-black dark:text-white p-1 min-[350px]:hidden">
            <Image src={`/svg/${toggleIconFileName}`} width={20} height={20} alt="theme switcher" className='hover:scale-125 opacity-80' />
          </button>
          {/* Mobile End */}
        </div>
      </nav>
    </header>
  );
};

export default Header;