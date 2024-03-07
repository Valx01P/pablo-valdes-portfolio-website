import React from 'react'
import Image from 'next/image'

type HeroProps = {
  darkMode: boolean;
};

const HeroSection = (props: HeroProps) => {
  // const piecesLeftFileName = props.darkMode ? 'white-pieces-left.svg' : 'black-pieces-left.svg';
  // const piecesRightFileName = props.darkMode ? 'white-king.svg' : 'black-king.svg'; w-280 h-350
  const piecesRightFileName = props.darkMode ? 'white-pieces-hero.svg' : 'black-pieces-hero.svg';


  return (
    <section className="h-[89dvh] max-[850px]:h-auto w-full light dark:background text-black dark:text-white flex justify-center items-center">
      {/* bg-gradient-to-b from-[#111111] via-[#7149c6a9] to-[#111111] backdrop-blur-3xl */}

      <div className="layout-container flex flex-row max-[850px]:flex-col justify-between max-[850px]:justify-center items-center gap-y-8">
        <div className='flex flex-col items-start max-[850px]:items-center max-[850px]:pt-8 gap-y-4 px-4 max-[1416px]:pt-12'>
        <p className='roboto-medium text-small max-[1416px]:text-small-2 max-[600px]:mob-text-small text-black dark:text-white'>Hey there, I&apos;m</p>
        <h1 className="text-heading max-[600px]:mob-text-heading max-[600px]:text-center font-bold text-black dark:text-white merriweather-bold">Pablo Valdes</h1>
        <p className='roboto-medium text-subheading max-[600px]:mob-text-subheading max-[600px]:text-center text-black dark:text-white'>Motivated Full Stack Developer, <br/>
        <span className='roboto-medium text-lesser-subheading max-[600px]:mob-text-lesser-subheading max-[600px]:text-center text-black dark:text-white'>Nature Enjoyer, <span className='text-nowrap text-black dark:text-white'>& Bad Chess Player 😅</span><br/></span></p>
        <p className='mb-28 max-[850px]:mb-2 roboto-medium-italic text-quote max-[600px]:mob-text-quote max-[600px]:text-center text-black dark:text-white'>“Never stop dreaming,<br/> never stop believing,<br/> never give up,<br/> never stop trying,<br/> and never stop learning.” <br/>– Roy Bennett</p>
        </div>
        <div className='px-4 max-[850px]:mb-6'>
          <Image src={`/${piecesRightFileName}`} width={700} height={350} alt="chess icon" className='' />  
        </div>
      </div>
    </section>
  )
}

export default HeroSection