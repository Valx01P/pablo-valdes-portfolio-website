import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

type AboutProps = {
  darkMode: boolean;
}

const AboutSection = (props: AboutProps) => {
  const linkedinIconFileName = props.darkMode ? 'linkedin-light.svg' : 'linkedin-dark.svg';

  return (
    <section className='pb-12 light-2 dark:background-2 w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center align-middle px-4'>
        <div className='h-auto w-full flex flex-1 max-[850px]:justify-center'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>About</h1>
        </div>
        {/* About content */}
        <div className='flex flex-col h-auto w-full mt-16 mb-4 p-8 pb-12 light-card dark:background-card rounded-lg gap-6'>

          <div className='flex flex-1 flex-col h-auto gap-2'>
            <h2 className='text-3xl leading-10'>How it started</h2>
            <p className='text-xl leading-10'>Long ago, back when I was 17 years old in 11th grade, my good friend Jeremiah told me how he was gonna start coding, before hand 
              I had always thought of coding as something difficult and complex, but since he was doing it, I figured it wouldn&apos;t be that hard for 
              me to try. Naturally I got curious in making websites as I always thought it would be cool to create any kind of website I imagined if I learned how. 
              In the beginning, I struggled, nevertheless I continued, and as I progressed further I realized I ultimately wanted to do Fullstack development as I wanted to expand my breadth 
              of knowledge and I figured it would help me learn more anyways.
            </p>
          </div>

          <div className='flex flex-1 flew-row h-auto'>
            <div className='flex flex-1 flex-col gap-2'>
              <h2 className='text-3xl leading-10 border-t-2 border-blue-500 w-auto pt-2'>How it&apos;s going</h2>
              <p className='text-xl leading-10'>About two years later, after a long journey of learning, experimenting, struggling, and so much more, I improved my Fullstack development skills drastically. 
                Now as a 19 year old Fullstack Developer I&apos;ve become more confident in my skills to create websites and their functional logic, but most importantly, I&apos;ve become 
                confident in my skills to learn new concepts and tech, and more critically, how to problem solve and learn from mistakes effectively. Regarding my education, I&apos;m 
                currently a sophomore at Miami Dade College, nearly ready to transfer to Florida International University to continue my pursuit of a B.A. in Computer Science. 
                My academic achievements have also led me to the Cambridge Aice Diploma / Bright Futures scholarship that covers my College tuition, and these same achievements 
                have also gifted me a fellowship in MLT, a program for diverse talent that I am truly grateful to be a part of.
              </p>
            </div>
            <div className='flex flex-1 justify-center'>
              <Image src={`/lmao.jpg`} width={300} height={600} alt="chess icon" className='rounded-lg'/>
            </div>
          </div>

          <div className='flex flex-1 flex-col h-auto gap-2'>
            <h2 className='text-3xl border-t-2 border-blue-500 w-auto pt-2'>Still curious?</h2>
            <p className='text-xl'>I really appreciate your interest, for more about my academics, organizations, and much more, you can visit my Linkedin, thank you!</p>
            <button className='button className="light resume-btn-light dark:background dark:resume-btn-dark p-1 rounded-md max-sm:p-1 min-[350px]:hidden'>
              <Link href='https://linkedin.com/in/your-linkedin-profile' className='flex text-black min-[350px]:hidden'>
                <Image src={`/${linkedinIconFileName}`} width={22} height={22} alt="linkedin icon" className='hover:scale-125' />
              </Link>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection