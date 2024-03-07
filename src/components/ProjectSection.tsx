import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ProjectProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ProjectSection = ( props: ProjectProps ) => {

  const githubIconFileName = props.darkMode ? 'github-light-2.svg' : 'github-dark-2.svg';
  const eyeIconFileName = props.darkMode ? 'eye-light.svg' : 'eye-dark.svg';
  const portfolioSiteFileName = props.darkMode ? 'portfolio-site-2.png' : 'portfolio-site.png';
  const arrow = props.darkMode ? (
    <svg className="absolute top-0 right-0 w-[16px] h-[16px]" width="28" height="28" fill={`#fff`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.004V6h11v11h-2V9.414Z"></path>
    </svg>
  ) : (
    <svg className="absolute top-0 right-0 w-[16px] h-[16px]" width="28" height="28" fill={`#000`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.004V6h11v11h-2V9.414Z"></path>
    </svg>
  );

  return (
    <section className='py-16 light-2 dark:background-2 w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center align-middle items-start px-4'>
        <div className='h-auto w-full flex flex-1 max-[850px]:justify-center'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>Projects</h1>
        </div>
        {/* Project 1 */}
        <div className='max-[1420px]:flex-col h-auto w-full flex flex-row mt-16 mb-4 p-8 light-card dark:background-card rounded-lg'>
          <div className='max-[1420px]:w-auto flex max-[1420px]:justify-center w-1/2 items-center'>
            <Image src={`/${portfolioSiteFileName}`} width={700} height={350} alt="chess icon" onClick={props.toggleDarkMode} className='cursor-pointer border-2 border-black shadow-lg shadow-black dark:shadow-white'/>
          </div>
          <div className='max-[1420px]:w-full flex max-[1420px]:items-center max-[1420px]:pt-8 flex-col items-start gap-4 roboto-medium w-1/2 px-12'>
            <h1 className='text-black dark:text-white text-4xl'>My Portfolio</h1>
            <p className='max-[1420px]:w-auto flex max-[1420px]:text-balance max-[1420px]:text-center text-black dark:text-white text-2xl w-1/2'>A culmination of my skills & growing confidence as a Full Stack Web Developer.</p>
            <div className='flex flex-row flex-wrap gap-3 text-xl'>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Next.js
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Tailwind.css
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Typescript
              </div>
            </div>
            <div className='flex flex-row text-xl gap-4'>
              <Link href="/" className='btn-transition-light dark:btn-transition-dark border-2 rounded-sm bg-transparent py-1 pl-3.5 pr-4 hover:scale-110 text-black dark:text-white border-black dark:border-white relative'>Details
              {arrow}
              </Link>
              <Link href="/" >
                <Image src={`/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              <Link href="/" >
                <Image src={`/${eyeIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className='flex max-[1420px]:flex-col-reverse max-[1420px]:justify-center h-auto w-full flex-row my-4 p-8 light-card dark:background-card rounded-lg'>
          <div className='max-[1420px]:w-full flex max-[1420px]:items-center max-[1420px]:pt-8 flex-col items-start gap-4 roboto-medium w-1/2 px-4'>
            <h1 className='text-black dark:text-white text-4xl'>iServer</h1>
            <p className='max-[1420px]:w-auto flex max-[1420px]:text-balance max-[1420px]:text-center text-black dark:text-white text-2xl w-4/5'>An image uploading website with third party auth, design inspired by imgbb.com. Made to statically serve image urls for websites.</p>
            <div className='flex flex-row flex-wrap gap-3 text-xl'>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Next.js
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Tailwind.css
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Typescript
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                MongoDB
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Clerk
              </div>
            </div>
            <div className='flex flex-row items-center text-xl gap-4'>
              <Link href="/" className='btn-transition-light dark:btn-transition-dark border-2 rounded-sm bg-transparent py-1 pl-3.5 pr-4 hover:scale-110 text-black dark:text-white border-black dark:border-white relative'>Details
              {arrow}
              </Link>
              <Link href="/" >
                <Image src={`/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              <Link href="/" >
                <Image src={`/${eyeIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
            </div>
          </div>
          <div className='max-[1420px]:w-auto flex max-[1420px]:justify-center w-1/2 items-center'>
            <Image src={`/i-server-site.png`} width={750} height={350} alt="chess icon" className='border-2 border-black shadow-lg shadow-black dark:shadow-white'/>
          </div>
        </div>
        {/* Project 3 */}
      </div>
    </section>
  )
}

export default ProjectSection


