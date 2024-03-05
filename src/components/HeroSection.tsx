import React from 'react'
import Image from 'next/image'

type HeroProps = {
  darkMode: boolean;
};

const HeroSection = (props: HeroProps) => {
  const piecesLeftFileName = props.darkMode ? 'white-pieces-left-5.svg' : 'black-pieces-left-4.svg';
  const piecesRightFileName = props.darkMode ? 'white-pieces-right-3.svg' : 'black-pieces-right-2.svg';

  return (
    <main className="h-[10dvh] bg-gradient-to-b from-[#111111] via-[#7149c6a9] to-[#111111] backdrop-blur-3xl">

      <div className="light dark:background text-black dark:text-white flex min-h-screen flex-col items-center justify-between p-24 h-[90dvh]">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white">Welcome to my portfolio</h1>
        <Image src={`/${piecesLeftFileName}`} width={200} height={300} alt="github icon" className='hover:scale-125' />
        <Image src={`/${piecesRightFileName}`} width={200} height={300} alt="github icon" className='hover:scale-125' />        
      </div>
    </main>
  )
}

export default HeroSection