import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ProjectProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  swagMode: boolean;
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
    <section id='projects' className='pt-16 light-2 dark:background-2 w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center align-middle items-start px-4'>
        <div className='h-auto w-full flex flex-1 max-[850px]:justify-center'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold max-[420px]:text-4xl'>Projects</h1>
        </div>
        {/* Project 1 */}
        <div className={`${props.swagMode && "swag-bg-card"} max-[1420px]:flex-col h-auto w-full flex flex-row mt-16 mb-4 p-8 light-card dark:background-card rounded-lg`}>
          <div className='max-[1420px]:w-auto flex max-[1420px]:justify-center w-1/2 items-center'>
            <Image src={`/${portfolioSiteFileName}`} width={700} height={350} alt="chess icon" onClick={props.toggleDarkMode} className='cursor-pointer border-2 border-black shadow-lg shadow-black dark:shadow-white'/>
          </div>
          <div className='max-[1420px]:w-full flex max-[1420px]:items-center max-[1420px]:pt-8 flex-col items-start gap-4 roboto-medium w-1/2 px-4'>
            <h1 className='max-[420px]:text-xl max-[450px]:text-center text-black dark:text-white text-4xl'>My Portfolio</h1>
            <p className='max-[420px]:text-base max-[1420px]:w-auto flex max-[1420px]:text-balance max-[1420px]:text-center text-black dark:text-white text-2xl w-4/5'>The culmination of my skills & growing confidence as a Full Stack Web Developer.</p>
            <div className='max-[420px]:text-sm flex flex-row flex-wrap justify-center gap-3 text-xl'>
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
                Zustand
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Resend
              </div>
            </div>
            <div className='max-[420px]:text-sm flex max-[420px]:flex-col max-[420px]:items-center flex-row text-xl gap-4'>
              <Link href="/portfolio" title='Open details page for this project' className='btn-transition-light dark:btn-transition-dark border-2 rounded-sm bg-transparent py-1 pl-3.5 pr-4 hover:scale-110 text-black dark:text-white border-black dark:border-white relative'>Details
              {arrow}
              </Link>
              <div className='max-[420px]:text-sm flex flex-row text-xl gap-4 items-center'>
              <Link href="/" title='View the Github Repository for this project' >
                <Image src={`/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              <Link href="/" title='Go to the deployed live site'>
                <Image src={`/${eyeIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className={`${props.swagMode && "swag-bg-card"} flex max-[1420px]:flex-col-reverse max-[1420px]:justify-center h-auto w-full flex-row my-4 p-8 light-card dark:background-card rounded-lg`}>
          <div className='max-[1420px]:w-full flex max-[1420px]:items-center max-[1420px]:pt-8 flex-col items-start gap-4 roboto-medium w-1/2 px-4'>
            <h1 className='max-[420px]:text-xl text-black dark:text-white text-4xl'>iServer</h1>
            <p className='max-[420px]:text-base max-[1420px]:w-auto flex max-[1420px]:text-balance max-[1420px]:text-center text-black dark:text-white text-2xl w-4/5'>An image uploading website with third party auth, design inspired by imgbb.com. Made to statically serve image urls for websites.</p>
            <div className='max-[420px]:text-sm flex flex-row flex-wrap justify-center gap-3 text-xl'>
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
            <div className='max-[420px]:text-sm flex max-[420px]:flex-col max-[420px]:items-center flex-row text-xl gap-4'>
              <Link href="/iserver" title='Open details page for this project' className='btn-transition-light dark:btn-transition-dark border-2 rounded-sm bg-transparent py-1 pl-3.5 pr-4 hover:scale-110 text-black dark:text-white border-black dark:border-white relative'>Details
              {arrow}
              </Link>
              <div className='max-[420px]:text-sm flex flex-row text-xl gap-4 items-center'>
              <Link href="/" title='View the Github Repository for this project' >
                <Image src={`/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              <Link href="/" title='Go to the deployed live site'>
                <Image src={`/${eyeIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              </div>
            </div>
          </div>
          <div className='max-[1420px]:w-auto flex max-[1420px]:justify-center w-1/2 items-center'>
            <Image src={`/i-server-site.png`} width={750} height={350} alt="chess icon" className='border-2 border-black shadow-lg shadow-black dark:shadow-white'/>
          </div>
        </div>
        {/* Project 3 */}
        <div className={`${props.swagMode && "swag-bg-card"} max-[1420px]:flex-col h-auto w-full flex flex-row my-4 p-8 light-card dark:background-card rounded-lg`}>
          <div className='max-[1420px]:w-auto flex max-[1420px]:justify-center w-1/2 items-center'>
            <Image src={`/practical-synth-extension.png`} width={700} height={350} alt="chess icon" className='border-2 border-black shadow-lg shadow-black dark:shadow-white'/>
          </div>
          <div className='max-[1420px]:w-full flex max-[1420px]:items-center max-[1420px]:pt-8 flex-col items-start gap-4 roboto-medium w-1/2 px-4'>
            <h1 className='max-[420px]:text-xl max-[450px]:text-center flex flex-wrap text-balance text-center justify-center text-black dark:text-white text-4xl'>Practical Synth Theme</h1>
            <p className='max-[420px]:text-base max-[1420px]:w-auto max-[1420px]:text-balance max-[1420px]:text-center text-black dark:text-white text-2xl w-4/5'>My solution to a visually pleasing SynthWave Theme for Visual Studio Code. I could never find one I liked, so I made my own for everyday use.</p>
            <div className='max-[420px]:text-sm flex flex-row flex-wrap justify-center gap-3 text-xl'>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                CSS
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                JSON
              </div>
            </div>
            <div className='max-[420px]:text-sm flex max-[420px]:flex-col max-[420px]:items-center flex-row text-xl gap-4'>
              <Link href="/practical-synth-theme" title='Open details page for this project' className='btn-transition-light dark:btn-transition-dark border-2 rounded-sm bg-transparent py-1 pl-3.5 pr-4 hover:scale-110 text-black dark:text-white border-black dark:border-white relative'>Details
              {arrow}
              </Link>
              <div className='max-[420px]:text-sm flex flex-row text-xl gap-4 items-center'>
              <Link href="/" title='View the Github Repository for this project' >
                <Image src={`/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              <Link href="/" title='View live on Visual Studio Marketplace'>
                <Image src={`/${eyeIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className={`${props.swagMode && "swag-bg-card"} flex max-[1420px]:flex-col-reverse max-[1420px]:justify-center h-auto w-full flex-row my-4 p-8 light-card dark:background-card rounded-lg`}>
          <div className='max-[1420px]:w-full flex max-[1420px]:items-center max-[1420px]:pt-8 flex-col items-start gap-4 roboto-medium w-1/2 px-4'>
            <h1 className='max-[420px]:text-xl max-[450px]:text-center flex flex-wrap text-balance text-center justify-center text-black dark:text-white text-4xl'>Theoretical Stonk Plays</h1>
            <p className='max-[420px]:text-base max-[1420px]:w-auto flex max-[1420px]:text-balance max-[1420px]:text-center text-black dark:text-white text-2xl w-4/5'>My favorite project, uses a third party API to get stock aggregate data for charts. Allows user to form theoretical stock plays based on state actions.</p>
            <div className='max-[420px]:text-sm flex flex-row flex-wrap justify-center gap-3 text-xl'>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Next.js
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Tailwind.css
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Typescript
              </div>
              <div className='flex flex-wrap text-balance text-center border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Polygon.io API
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Zustand
              </div>
            </div>
            <div className='max-[420px]:text-sm flex max-[420px]:flex-col max-[420px]:items-center flex-row text-xl gap-4'>
              <Link href="/theoretical-stonks-plays" title='Open details page for this project' className='btn-transition-light dark:btn-transition-dark border-2 rounded-sm bg-transparent py-1 pl-3.5 pr-4 hover:scale-110 text-black dark:text-white border-black dark:border-white relative'>Details
              {arrow}
              </Link>
              <div className='max-[420px]:text-sm flex flex-row text-xl gap-4 items-center'>
              <Link href="/" title='View the Github Repository for this project' >
                <Image src={`/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              <Link href="/" title='Go to the deployed live site'>
                <Image src={`/${eyeIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              </div>
            </div>
          </div>
          <div className='max-[1420px]:w-auto flex max-[1420px]:justify-center w-1/2 items-center'>
            <Image src={`/t-stonk-plays-site.png`} width={750} height={350} alt="chess icon" className='border-2 border-black shadow-lg shadow-black dark:shadow-white'/>
          </div>
        </div>
        {/* Project 5 */}
        <div className={`${props.swagMode && "swag-bg-card"} max-[1420px]:flex-col h-auto w-full flex flex-row my-4 p-8 light-card dark:background-card rounded-lg`}>
          <div className='max-[1420px]:w-auto flex max-[1420px]:justify-center w-1/2 items-center'>
            <Image src={`/g-planner-site.png`} width={700} height={350} alt="chess icon" className='border-2 border-black shadow-lg shadow-black dark:shadow-white'/>
          </div>
          <div className='max-[1420px]:w-full flex max-[1420px]:items-center max-[1420px]:pt-8 flex-col items-start gap-4 roboto-medium w-1/2 px-4'>
            <h1 className='max-[420px]:text-xl max-[450px]:text-center flex flex-wrap text-balance text-center justify-center text-black dark:text-white text-4xl'>General Planner</h1>
            <p className='max-[420px]:text-base max-[1420px]:w-auto max-[1420px]:text-balance max-[1420px]:text-center text-black dark:text-white text-2xl w-4/5'>Authentication routes and permissions, a dedicated Frontend and Backend API. My first Full Stack project and a priceless learning experience.</p>
            <div className='max-[420px]:text-sm flex flex-row flex-wrap max-[1120px]:justify-center justify-start gap-3 text-xl'>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                React
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Redux
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                MongoDB
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Node
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Express
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Javascript
              </div>
            </div>
            <div className='max-[420px]:text-sm flex max-[420px]:flex-col max-[420px]:items-center flex-row text-xl gap-4'>
              <Link href="/general-planner" title='Open details page for this project' className='btn-transition-light dark:btn-transition-dark border-2 rounded-sm bg-transparent py-1 pl-3.5 pr-4 hover:scale-110 text-black dark:text-white border-black dark:border-white relative'>Details
              {arrow}
              </Link>
              <div className='max-[420px]:text-sm flex flex-row text-xl gap-4 items-center'>
              <Link href="/" title='View the Github Repository for this project' >
                <Image src={`/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              <Link href="/" title='Go to the deployed live site'>
                <Image src={`/${eyeIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
              </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Misc. Projects */}
        <div className={`${props.swagMode && "swag-bg-card"} flex max-[1420px]:flex-col-reverse max-[1420px]:justify-center h-auto w-full flex-row my-4 p-8 light-card dark:background-card rounded-lg`}>
          <div className='max-[1420px]:w-full flex max-[1420px]:items-center max-[1420px]:pt-8 flex-col items-start gap-4 roboto-medium w-1/2 px-4'>
            <h1 className='max-[420px]:text-xl max-[450px]:text-center flex flex-wrap text-balance text-center justify-center text-black dark:text-white text-4xl'>Misc. Projects</h1>
            <p className='max-[420px]:text-base max-[1420px]:w-auto flex max-[1420px]:text-balance max-[1420px]:text-center text-black dark:text-white text-2xl w-4/5'>An assortment of miscellaneous projects not given much attention here as they were for simple practice, experimentation, or basic learning from when I started my journey coding.</p>
            <div className='max-[420px]:text-sm flex flex-row flex-wrap justify-center gap-3 text-xl'>
              <div className='flex flex-wrap text-balance text-center border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                Web Development
              </div>
              <div className='border-2 rounded-full border-transparent py-1 px-3 background text-white hover:scale-110'>
                C++
              </div>
            </div>
            <div className='max-[420px]:text-sm flex max-[420px]:flex-col max-[420px]:items-center flex-row text-xl gap-4'>
              <Link href="/" title='Open details page for these lesser projects' className='btn-transition-light dark:btn-transition-dark border-2 rounded-sm bg-transparent py-1 pl-3.5 pr-4 hover:scale-110 text-black dark:text-white border-black dark:border-white relative'>Details
              {arrow}
              </Link>
            </div>
          </div>
          <div className='max-[1420px]:w-auto flex max-[1420px]:justify-center w-1/2 items-center'>
            <Image src={`/misc-box.svg`} width={550} height={350} alt="chess icon" className='border-2 border-black shadow-lg shadow-black dark:shadow-white'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection


