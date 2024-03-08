import React from 'react'

type ToolProps = {
    darkMode: boolean;
  };

const ToolSection = (props: ToolProps) => {
  return (
    <section className='pb-16 light-2 dark:background-2 w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center align-middle px-4'>
        <div className='h-auto w-full flex flex-1 max-[850px]:justify-center'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>Tools</h1>
        </div>
        {/* Tool content */}
        <div className='flex flex-col h-auto w-full mt-16 mb-4 p-8 pb-12 light-card dark:background-card rounded-lg gap-4'>
          <h2 className='px-4 py-4 text-3xl max-[300px]:text-2xl'>Here are some of the tools I&apos;ve used in designing, creating, and deploying projects.</h2>
          <div className='flex max-[1040px]:flex-col max-[1040px]:gap-6 flex-row flex-wrap px-4 roboto-medium'>
            <div className='flex max-[1040px]:gap-2 flex-1 flex-col gap-4'>
              <h3 className='text-black dark:text-white text-3xl min-[1040px]:border-b-2 min-[1040px]:dark:border-blue-500 min-[1040px]:border-black max-[300px]:text-xl max-[1040px]:flex w-min max-[1040px]:border-2 max-[1040px]:rounded-sm max-[1040px]:border-black dark:max-[1040px]:border-white max-[1040px]:py-1 max-[1040px]:px-3 max-[1040px]:transparent'>Backend</h3>
              <div className='flex max-[1040px]:gap-6 max-[1040px]:py-2 max-[1040px]:flex-row max-[1040px]:flex-wrap flex-col gap-4'>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Node.js</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Express.js</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>MongoDB</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>EJS</p>
              </div>
            </div>
            <div className='flex max-[1040px]:gap-2 flex-1 flex-col gap-4'>
              <h3 className='text-black dark:text-white text-3xl min-[1040px]:border-b-2 min-[1040px]:dark:border-blue-500 min-[1040px]:border-black max-[300px]:text-xl max-[1040px]:flex w-min max-[1040px]:border-2 max-[1040px]:rounded-sm max-[1040px]:border-black dark:max-[1040px]:border-white max-[1040px]:py-1 max-[1040px]:px-3 max-[1040px]:transparent'>Frontend</h3>
              <div className='flex max-[1040px]:gap-6 max-[1040px]:py-2 max-[1040px]:flex-row max-[1040px]:flex-wrap flex-col gap-4'>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>React.js</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Next.js</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>HTML</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>CSS</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Bootstrap</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Tailwind CSS</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Shadcn/UI</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Redux</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Zustand</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Zod</p>
              </div>
            </div>
            <div className='flex max-[1040px]:gap-2 flex-1 flex-col gap-4'>
              <h3 className='text-black dark:text-white text-3xl min-[1040px]:border-b-2 min-[1040px]:dark:border-blue-500 min-[1040px]:border-black max-[300px]:text-xl max-[1040px]:flex w-min max-[1040px]:border-2 max-[1040px]:rounded-sm max-[1040px]:border-black dark:max-[1040px]:border-white max-[1040px]:py-1 max-[1040px]:px-3 max-[1040px]:transparent'>Other</h3>
              <div className='flex max-[1040px]:gap-6 max-[1040px]:py-2 max-[1040px]:flex-row max-[1040px]:flex-wrap flex-col gap-4'>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Typescript</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Javascript</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>VS Code</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Git/Github</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>UploadThing</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>OnRender</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Vercel</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Clerk</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Unix</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>APIs</p>
              </div>
            </div>
            <div className='flex max-[1040px]:gap-2 flex-1 flex-col gap-4'>
              <h3 className='text-black dark:text-white text-3xl min-[1040px]:border-b-2 min-[1040px]:dark:border-blue-500 min-[1040px]:border-black max-[300px]:text-xl max-[1040px]:flex w-min max-[1040px]:border-2 max-[1040px]:rounded-sm max-[1040px]:border-black dark:max-[1040px]:border-white max-[1040px]:py-1 max-[1040px]:px-3 max-[1040px]:transparent'>Design</h3>
              <div className='flex max-[1040px]:gap-6 max-[1040px]:py-2 max-[1040px]:flex-row max-[1040px]:flex-wrap flex-col gap-4'>
              <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Microsoft Whiteboard</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Browser Extensions</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Chrome Dev Tools</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Adobe Express</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Figma</p>
                <p className='text-black dark:text-white text-2xl max-[300px]:text-xl'>Canva</p>
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