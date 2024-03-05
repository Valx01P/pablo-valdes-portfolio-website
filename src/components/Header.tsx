"use client";
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
  
  const Header = (props: HeaderProps) => {
  const githubIconFileName = props.darkMode ? 'github-light-2.svg' : 'github-dark-2.svg';
  const linkedinIconFileName = props.darkMode ? 'linkedin-light.svg' : 'linkedin-dark.svg';
  const toggleIconFileName = props.darkMode ? 'sun-2.svg' : 'moon.svg';

  return (
    <header className="h-[11dvh] light dark:background text-black dark:text-white w-full max-sm:px-3 flex justify-center">
      <nav className="container mx-auto flex items-center justify-between py-4">

        
        {/* Title */}
        <div className="flex items-center w-1/4 max-lg:w-1/2 max-[465px]:hidden gap-5 justify-start">
            <Link href="/" className='p-4'>
                <h1 className="roboto-black text-4xl text-black dark:text-white whitespace-nowrap max-sm:text-3xl">
                    Pablo Valdes
                </h1>
            </Link>
        </div>
        <div className="flex items-center min-[465px]:hidden max-[465px]:w-1/4 max-[300px]:w-1/5 gap-5 justify-center">
            <Link href="/" className='p-4'>
                <h1 className="items-center roboto-black text-4xl text-black dark:text-white whitespace-nowrap max-sm:text-3xl">
                    PV
                </h1>
            </Link>
        </div>
        
    
        {/* Page Navigation */}
        <div className="flex w-1/2 items-center justify-center gap-16 max-lg:hidden">
          <Link href="/" className='roboto-regular text-xl text-black text-transition-light dark:text-white dark:text-transition-dark'>
            Home
          </Link>
          <a href="#projects" className='roboto-regular text-xl text-black text-transition-light dark:text-white dark:text-transition-dark'>Projects</a>
          <a href="#about" className='roboto-regular text-xl text-black text-transition-light dark:text-white dark:text-transition-dark'>About</a>
          <a href="#contact" className='roboto-regular text-xl text-black text-transition-light dark:text-white dark:text-transition-dark'>Contact</a>
        </div>
        

        {/* Social Icons, Resume, Dark Mode Toggle */}
        <div className="flex items-center w-1/4 max-lg:w-1/2 max-[465px]:w-3/4 max-[300px]:w-4/5 justify-end gap-3">
          <Link href='https://github.com/Valx01P' className='flex text-black'>
            <Image src={`/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
          </Link>
          <Link href='https://linkedin.com/in/your-linkedin-profile' className='flex text-black'>
            <Image src={`/${linkedinIconFileName}`} width={32} height={32} alt="linkedin icon" className='hover:scale-125' />
          </Link>
          <button className="light resume-btn-light dark:background dark:resume-btn-dark p-2 rounded-lg max-sm:p-1.5">
            Resume
          </button>
          <button onClick={props.toggleDarkMode} className="light dark:background text-black dark:text-white p-2">
            <Image src={`/${toggleIconFileName}`} width={30} height={30} alt="dark mode" className='hover:scale-125' />
          </button>
        </div>
        

      </nav>
    </header>
  );
};

export default Header;