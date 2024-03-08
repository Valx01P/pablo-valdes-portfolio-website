import React from 'react'
import Image from 'next/image';

type AboutProps = {
  darkMode: boolean;
}

const AboutSection = (props: AboutProps) => {
  return (
    <section className='bg-slate-200 h-dvh'>
      <div>
        <div>
          <h1></h1>
        </div>
        {/* About content */}
        <div>

          <div>
            <p></p>
          </div>
          <div>

            <div>
              <p></p>
            </div>
            <div>
              <Image src={`/lmao.jpg`} width={350} height={700} alt="chess icon"/>
            </div>
          </div>

          <div>
            <p></p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection