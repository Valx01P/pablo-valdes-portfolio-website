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

  return (
    <header id='header' className="h-auto light dark:background text-black dark:text-white w-full max-sm:px-3 flex justify-center">
      <nav className="layout-container mx-auto flex items-center justify-between py-4">
        {/* Title */}
        <div className="flex items-center w-1/4 max-lg:w-1/2 max-[520px]:hidden gap-5 justify-start">
            <a onClick={() => scrollToSection('header')} className='p-4 cursor-pointer'>
                <h1 className="roboto-black text-4xl text-black dark:text-white whitespace-nowrap max-sm:text-3xl">
                    Pablo Valdes
                </h1>
            </a>
        </div>
        <div className="flex items-center min-[520px]:hidden max-[520px]:w-1/4 max-[300px]:w-1/5 gap-5 justify-center">
            <a onClick={() => scrollToSection('header')} className='p-4 cursor-pointer'>
                <h1 className="items-center roboto-black text-4xl text-black dark:text-white whitespace-nowrap max-sm:text-3xl max-[350px]:text-2xl">
                    PV
                </h1>
            </a>
        </div>
        
    
        {/* Page Navigation */}
        <div className="flex w-1/2 items-center justify-center gap-16 max-lg:hidden max-[1130px]:gap-12">
          <a onClick={() => scrollToSection('header')} className='roboto-regular text-xl text-black text-transition-light dark:text-white dark:text-transition-dark cursor-pointer'>
            Home
          </a>
          <a onClick={() => scrollToSection('projects')} className='roboto-regular text-xl text-black text-transition-light dark:text-white dark:text-transition-dark cursor-pointer'>Projects</a>
          <a onClick={() => scrollToSection('about')} className='roboto-regular text-xl text-black text-transition-light dark:text-white dark:text-transition-dark cursor-pointer'>About</a>
          <a onClick={() => scrollToSection('contact')} className='roboto-regular text-xl text-black text-transition-light dark:text-white dark:text-transition-dark cursor-pointer'>Contact</a>
        </div>
        

        {/* Social Icons, Resume, Dark Mode Toggle */}
        <div className="flex items-center w-1/4 max-lg:w-1/2 max-[520px]:w-3/4 max-[300px]:w-4/5 justify-end gap-3 max-[300px]:gap-1">
          <a href='https://github.com/Valx01P' target="_blank" rel="noopener noreferrer" className='flex text-black max-[350px]:hidden'>
            <Image src={`/${githubIconFileName}`} title='View my Github profile' width={30} height={30} alt="github icon" className='hover:scale-125' />
          </a>
          <a href='https://www.linkedin.com/in/pablo-valdes-98a91124a/' target="_blank" rel="noopener noreferrer" className='flex text-black max-[350px]:hidden'>
            <Image src={`/${linkedinIconFileName}`} title='View my LinkedIn profile' width={32} height={32} alt="linkedin icon" className='hover:scale-125' />
          </a>
          <a href="/Pablo_Valdes_Resume.pdf" title='Open resume in new tab' target="_blank" rel="noopener noreferrer">
            <button className="align-center bg-transparent resume-btn-light dark:resume-btn-dark p-2 rounded-lg max-sm:p-1.5 max-[350px]:hidden">
              Resume
            </button>
          </a>
          <button onClick={props.toggleDarkMode} title='Theme switcher' className="light dark:background text-black dark:text-white p-2 max-[350px]:hidden">
            <Image src={`/${toggleIconFileName}`} width={30} height={30} alt="theme switcher" className='hover:scale-125' />
          </button>

          {/* Mobile */}
          <a href='https://github.com/Valx01P' target="_blank" rel="noopener noreferrer" className='flex text-black min-[350px]:hidden'>
            <Image src={`/${githubIconFileName}`} width={20} height={20} alt="github icon" className='hover:scale-125' />
          </a>
          <a href='https://www.linkedin.com/in/pablo-valdes-98a91124a/' target="_blank" rel="noopener noreferrer" className='flex text-black min-[350px]:hidden'>
            <Image src={`/${linkedinIconFileName}`} width={22} height={22} alt="linkedin icon" className='hover:scale-125' />
          </a>
          <a href="/Pablo_Valdes_Resume.pdf" title='Open resume in new tab' target="_blank" rel="noopener noreferrer">
            <button className="light resume-btn-light dark:background dark:resume-btn-dark p-1 rounded-md max-sm:p-1 min-[350px]:hidden">
              Resume
            </button>
          </a>
          <button onClick={props.toggleDarkMode} className="light dark:background text-black dark:text-white p-1 min-[350px]:hidden">
            <Image src={`/${toggleIconFileName}`} width={22} height={22} alt="theme switcher" className='hover:scale-125' />
          </button>
          {/* Mobile End */}
        </div>
      </nav>
    </header>
  );
};

export default Header;