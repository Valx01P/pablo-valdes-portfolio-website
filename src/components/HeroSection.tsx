import React from 'react'
import Image from 'next/image'

type HeroProps = {
  darkMode: boolean;
  swagMode: boolean;
};

const HeroSection = (props: HeroProps) => {
  const piecesRightFileName = props.darkMode ? 'white-pieces-hero.svg' : 'black-pieces-hero.svg';

  return (
    <section id='hero' className="h-auto pt-[clamp(1rem,4vw,4rem)] pb-[clamp(2rem,5vw,4rem)] w-full bg-transparent text-black dark:text-white flex justify-center items-center overflow-x-clip">
      <div className="layout-container flex flex-row max-[850px]:flex-col justify-between max-[850px]:justify-center items-center gap-x-6 gap-y-8 px-4">
        <div className='flex flex-col items-start w-1/2 max-[850px]:w-full max-[850px]:items-stretch max-[850px]:text-center max-[850px]:pt-8 gap-y-4 min-w-0'>
          <p className='roboto-medium text-small text-black dark:text-white'>Hey there, I&apos;m</p>
          <h1 className={`${props.swagMode && "text-gradient"} text-heading max-[600px]:text-center font-bold text-black dark:text-white merriweather-bold`}>Pablo Valdes</h1>
          <p className='roboto-medium text-subheading max-[600px]:text-center text-black dark:text-white'>Motivated Full Stack Developer, <br/>
          <span className='roboto-medium text-lesser-subheading max-[600px]:text-center text-black dark:text-white'>Nature Enjoyer, <span className='text-nowrap text-black dark:text-white'>&amp; Bad Chess Player {!props.swagMode ? <span>😅</span> : <span>😎</span>}</span><br/></span></p>
          <p className='mb-20 max-[850px]:mb-2 roboto-medium-italic text-quote max-[600px]:text-center text-black dark:text-white'>“Never stop dreaming,<br/> never stop believing,<br/> never give up,<br/> never stop trying,<br/> and never stop learning.”<br/>– Roy Bennett</p>
        </div>
        <div className='w-1/2 max-[850px]:w-full max-[850px]:mb-6 flex justify-center'>
          <Image src={`/svg/${piecesRightFileName}`} width={700} height={350} alt="chess pieces" className='w-full h-auto max-w-[640px]' priority />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
