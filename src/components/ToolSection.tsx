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
          <h1 className='text-black dark:text-white text-section-title merriweather-bold max-[420px]:text-4xl'>My Skills</h1>
        </div>
        
        {/* Tool content */}
        <div className={`${props.swagMode && "swag-bg"} flex flex-col h-auto w-full mt-16 mb-4 p-8 pb-12 light-card dark:background-card rounded-lg gap-6`}>
          
          {/* Grid layout for desktop, column for mobile */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {/* Languages */}
            <div>
              <h2 className='text-black dark:text-white text-2xl roboto-medium mb-4 dark:border-gradient-bottom border-gradient-bottom-2 pb-1 w-min'>
                Languages
              </h2>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {['TypeScript', 'Python', 'JavaScript', 'Java', 'SQL', 'HTML', 'CSS', 'C++'].map((tool) => (
                  <span key={tool} className='text-black dark:text-white text-base md:text-xl px-3 py-1 border border-transparent background rounded-full hover:scale-110 transition-transform'>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Frameworks */}
            <div>
              <h2 className='text-black dark:text-white text-2xl roboto-medium mb-4 dark:border-gradient-bottom border-gradient-bottom-2 pb-1 w-min'>
                Frameworks
              </h2>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {['React', 'Next.js', 'Express', 'FastAPI', 'Java Spring Boot', 'Tailwind CSS'].map((tool) => (
                  <span key={tool} className='text-black dark:text-white text-base md:text-xl px-3 py-1 border border-transparent background rounded-full hover:scale-110 transition-transform'>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Backend Technologies */}
            <div>
              <h2 className='text-black dark:text-white text-2xl roboto-medium mb-4 dark:border-gradient-bottom border-gradient-bottom-2 pb-1 w-max'>
                Backend
              </h2>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {['Node.js', 'MongoDB', 'Postgres', 'Redis', 'Supabase'].map((tool) => (
                  <span key={tool} className='text-black dark:text-white text-base md:text-xl px-3 py-1 border border-transparent background rounded-full hover:scale-110 transition-transform'>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* DevOps & Cloud */}
            <div>
              <h2 className='text-black dark:text-white text-2xl roboto-medium mb-4 dark:border-gradient-bottom border-gradient-bottom-2 pb-1 w-max'>
                DevOps & Cloud
              </h2>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {['Git', 'GitHub', 'Docker', 'Nginx', 'AWS', 'S3', 'Vercel', 'Terraform', 'OnRender'].map((tool) => (
                  <span key={tool} className='text-black dark:text-white text-base md:text-xl px-3 py-1 border border-transparent background rounded-full hover:scale-110 transition-transform'>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tools & APIs */}
            <div>
              <h2 className='text-black dark:text-white text-2xl roboto-medium mb-4 dark:border-gradient-bottom border-gradient-bottom-2 pb-1 w-max'>
                Tools & APIs
              </h2>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {['VS Code', 'IntelliJ', 'Postman', 'Figma', 'Web APIs', 'Chrome Dev Tools', 'Resend', 'Clerk', 'GCP'].map((tool) => (
                  <span key={tool} className='text-black dark:text-white text-base md:text-xl px-3 py-1 border border-transparent background rounded-full hover:scale-110 transition-transform'>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Currently Exploring */}
            <div>
              <h2 className='text-black dark:text-white text-2xl roboto-medium mb-4 dark:border-gradient-bottom border-gradient-bottom-2 pb-1 w-max'>
                Currently Exploring
              </h2>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {['GraphQL', 'Kubernetes', 'AI/ML', 'WebSockets', 'WebRTC'].map((tool) => (
                  <span key={tool} className='text-black dark:text-white text-base md:text-xl px-3 py-1 border border-transparent background rounded-full hover:scale-110 transition-transform'>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolSection