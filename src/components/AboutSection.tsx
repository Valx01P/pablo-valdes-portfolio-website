"use client";
import Image from 'next/image';
import { useLightbox } from '@/app/lib/lightbox'

type AboutProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  swagMode: boolean;
}

const AboutSection = (props: AboutProps) => {
  const { open } = useLightbox();
  const myselfFileName = 'linkedin-me.webp'; // props.darkMode ? 'linkedin-me-dark.webp' : 'linkedin-me.webp';

  return (
    <section id='about' className='pt-16 section-surface w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center px-4'>
        <div className='w-full flex max-[850px]:justify-center mb-8'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>About</h1>
        </div>

        <div className={`${props.swagMode && "swag-bg"} glass rounded-xl p-[clamp(1.1rem,2.6vw,2rem)] flex max-[900px]:flex-col gap-[clamp(1.25rem,3vw,2.5rem)] items-center`}>
          {/* Bio */}
          <div className='flex flex-col gap-4 flex-1 roboto-regular order-2 max-[900px]:order-1'>
            <p className='text-black dark:text-white text-[clamp(0.9rem,0.82rem+0.4vw,1.05rem)] leading-relaxed'>
              Hey there! I&apos;m Pablo Valdes, a Full-Stack Web Developer, with secondary interests in Cloud Computing, Robotics, and a strong interest in AI.
            </p>
            <p className='text-black dark:text-white text-[clamp(0.9rem,0.82rem+0.4vw,1.05rem)] leading-relaxed'>
              I&apos;m a rising Senior at <span className='text-[var(--accent-bright)] roboto-medium'><a href="https://www.fiu.edu/" target="_blank" rel="noopener noreferrer">Florida International University</a></span>, pursuing a BS in Computer Science. I love speaking with others and working with enthusiastic, hardworking, and creative people. In my free time I&apos;ve helped others in their career goals, assisted numerous local software projects and developer groups, and dabbled in Robotics, AI, and lots of Full-Stack Web, Mobile, and Cloud development efforts.
            </p>
            <div className='pt-1'>
              <h2 className='text-black dark:text-white text-sm roboto-bold tracking-wide'>Disclaimer:</h2>
              <p className='text-black/65 dark:text-white/60 text-[clamp(0.78rem,0.72rem+0.3vw,0.9rem)] leading-relaxed italic'>
                All opinions and comments expressed here are solely my own and do not represent or reflect the views, values, or policies of any organization(s) I&apos;m affiliated with.
              </p>
            </div>
            <p className='text-black/75 dark:text-white/70 text-[clamp(0.85rem,0.78rem+0.35vw,0.95rem)]'>
              For more about my work and background, visit my <span className='text-[var(--accent-bright)] roboto-medium'><a href="https://www.linkedin.com/in/pablovaldes01/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>. Thank you!
            </p>
          </div>

          {/* Photo */}
          <div className='shrink-0 order-1 max-[900px]:order-2 w-[clamp(180px,28vw,300px)]'>
            <Image
              src={`/images/${myselfFileName}`}
              width={1080}
              height={1080}
              alt="Pablo Valdes"
              title="Click to enlarge"
              className='rounded-xl cursor-zoom-in w-full h-auto border border-black/15 dark:border-white/10'
              onClick={() => open(`/images/${myselfFileName}`, 'Pablo Valdes')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
