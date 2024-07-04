import React from 'react'

type ToolProps = {
    darkMode: boolean;
    swagMode: boolean;
  };

const ToolSection = (props: ToolProps) => {  
  return (
    <section id='tools' className='pt-12 light-2 dark:background-2 w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center align-middle px-4'>
        <div className='h-auto w-full flex flex-1 max-[850px]:justify-center'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold max-[420px]:text-4xl'>Tools</h1>
        </div>
        {/* Tool content */}
        <div className={`${props.swagMode && "swag-bg"} flex flex-col h-auto w-full mt-16 mb-4 p-8 pb-12 light-card dark:background-card rounded-lg gap-4`}>
          <h2 className='text-black dark:text-white px-4 py-4 text-3xl max-[420px]:text-xl'>Here are some of the tools I&apos;ve used in designing, creating, and deploying projects.</h2>
          <div className='flex max-[1040px]:flex-col max-[1040px]:gap-6 flex-row flex-wrap px-4 roboto-medium'>
            <div className='flex max-[1040px]:gap-2 flex-1 flex-col gap-4'>
              <h3 className='text-black dark:text-white text-3xl dark:border-gradient-bottom border-gradient-bottom-2 max-[420px]:text-xl max-[1040px]:flex w-min'>Backend</h3>
              <div className='flex max-[1040px]:gap-6 max-[1040px]:py-2 max-[1040px]:flex-row max-[1040px]:flex-wrap flex-col gap-4'>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Express.js</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>MongoDB</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Postman</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Node.js</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>EJS</p>
              </div>
            </div>
            <div className='flex max-[1040px]:gap-2 flex-1 flex-col gap-4'>
              <h3 className='text-black dark:text-white text-3xl dark:border-gradient-bottom border-gradient-bottom-2 max-[420px]:text-xl max-[1040px]:flex w-min'>Frontend</h3>
              <div className='flex max-[1040px]:gap-6 max-[1040px]:py-2 max-[1040px]:flex-row max-[1040px]:flex-wrap flex-col gap-4'>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Tailwind CSS</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Shadcn/UI</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Bootstrap</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Zustand</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>React.js</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Next.js</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>jQuery</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Redux</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>HTML</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>CSS</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Zod</p>
              </div>
            </div>
            <div className='flex max-[1040px]:gap-2 flex-1 flex-col gap-4'>
              <h3 className='text-black dark:text-white text-3xl dark:border-gradient-bottom border-gradient-bottom-2 max-[420px]:text-xl max-[1040px]:flex w-min'>Other</h3>
              <div className='flex max-[1040px]:gap-6 max-[1040px]:py-2 max-[1040px]:flex-row max-[1040px]:flex-wrap flex-col gap-4'>
              <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Python</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Typescript</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Javascript</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Git/Github</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>OnRender</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>VS Code</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Resend</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Vercel</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Clerk</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Unix</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>APIs</p>
              </div>
            </div>
            <div className='flex max-[1040px]:gap-2 flex-1 flex-col gap-4'>
              <h3 className='text-black dark:text-white text-3xl dark:border-gradient-bottom border-gradient-bottom-2 max-[420px]:text-xl max-[1040px]:flex w-min'>Design</h3>
              <div className='flex max-[1040px]:gap-6 max-[1040px]:py-2 max-[1040px]:flex-row max-[1040px]:flex-wrap flex-col gap-4'>
              <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Microsoft Whiteboard</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Browser Extensions</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Chrome Dev Tools</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Adobe Express</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Figma</p>
                <p className='text-black dark:text-white text-2xl max-[420px]:text-base'>Canva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolSection
// alt p elements; max-[1040px]:flex max-[1040px]:flex-wrap max-[1040px]:text-balance max-[1040px]:text-center max-[1040px]:border-2 max-[1040px]:rounded-full max-[1040px]:border-transparent max-[1040px]:py-1 px-3 max-[1040px]:background max-[1040px]:hover:scale-110