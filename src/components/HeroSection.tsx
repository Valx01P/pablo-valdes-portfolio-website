import React from 'react'
import Image from 'next/image'

type HeroProps = {
  darkMode: boolean;
  swagMode: boolean;
};

const HeroSection = (props: HeroProps) => {
  // const piecesLeftFileName = props.darkMode ? 'white-pieces-left.svg' : 'black-pieces-left.svg';
  // const piecesRightFileName = props.darkMode ? 'white-king.svg' : 'black-king.svg'; w-280 h-350
  const piecesRightFileName = props.darkMode ? 'white-pieces-hero.svg' : 'black-pieces-hero.svg';


  return (
    <section id='hero' className="h-auto max-[1500px]:pt-0 pt-16 pb-16 w-full light dark:background text-black dark:text-white flex justify-center items-center ">
      {/* bg-gradient-to-b from-[#111111] via-[#7149c6a9] to-[#111111] backdrop-blur-3xl */}

      <div className="layout-container flex flex-row max-[850px]:flex-col justify-between max-[850px]:justify-center items-center gap-y-8">
        <div className='flex flex-col items-start max-[850px]:items-center max-[850px]:pt-8 gap-y-4 px-4 max-[1416px]:pt-12'>
        <p className='max-[420px]:text-3xl roboto-medium text-small max-[1416px]:text-small-2 max-[600px]:mob-text-small text-black dark:text-white'>Hey there, I&apos;m</p>
        <h1 className={`${props.swagMode && "text-gradient"} max-[420px]:text-5xl text-heading max-[600px]:mob-text-heading max-[600px]:text-center font-bold text-black dark:text-white merriweather-bold`}>Pablo Valdes</h1>
        <p className='max-[420px]:text-2xl roboto-medium text-subheading max-[600px]:mob-text-subheading max-[600px]:text-center text-black dark:text-white'>Motivated Full Stack Developer, <br/>
        <span className='max-[420px]:text-2xl roboto-medium text-lesser-subheading max-[600px]:mob-text-lesser-subheading max-[600px]:text-center text-black dark:text-white'>Nature Enjoyer, <span className='max-[420px]:text-2xl text-nowrap text-black dark:text-white'>& Bad Chess Player {!props.swagMode ? <span>😅</span> : <span>😎</span>}</span><br/></span></p>
        <p className='max-[420px]:text-xl mb-28 max-[850px]:mb-2 roboto-medium-italic text-quote max-[600px]:mob-text-quote max-[600px]:text-center text-black dark:text-white'>“Never stop dreaming,<br/> never stop believing,<br/> never give up,<br/> never stop trying,<br/> and never stop learning.” <br/>– Roy Bennett</p>
        </div>
        <div className='px-4 max-[850px]:mb-6'>
          <Image src={`/${piecesRightFileName}`} width={700} height={350} alt="chess icon" />  
        </div>
      </div>
    </section>
  )
}

export default HeroSection