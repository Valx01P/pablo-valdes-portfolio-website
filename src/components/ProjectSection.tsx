import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ProjectProps = {
  darkMode: boolean;
};

const ProjectSection = ( props: ProjectProps ) => {

  const githubIconFileName = props.darkMode ? 'github-light-2.svg' : 'github-dark-2.svg';
  const eyeIconFileName = props.darkMode ? 'eye-light.svg' : 'eye-dark.svg';

  return (
    <section className='background'>
      <div>
        <h2>Projects</h2>
      </div>
      <div>
        <div>
          <Image src={`/porfolio-site.png`} width={700} height={350} alt="chess icon" className=''/>
        </div>
        <div>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <div>
            <Link href="/" >Detailed Description</Link>
            <Link href="/" >
              <Image src={`/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
            </Link>
            <Link href="/" >
              <Image src={`/${eyeIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection

// <svg width="28" height="28" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px]">
// <path d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.004V6h11v11h-2V9.414Z"></path>
// </svg>
