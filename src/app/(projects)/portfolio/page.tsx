"use client";
import { useTheme } from "@/app/lib/store";

export default function Portfolio() {

  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return ( //if darkMode is true, add the dark class to the main element
    <main className={`${darkMode && "dark"} w-auto dark:bg-yt light-gradient text-black dark:text-white h-auto`}>
      <div className="dark:bg-yt light py-8 h-full flex flex-col flex-1 justify-center items-center max-[430px]:ml-[0px] ml-[70px] max-[430px]:pt-[70px]">
        <div>
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Portfolio Project</h1>
        </div>
        <div>
          <h1 className="max-[420px]:text-lg text-black dark:text-white text-2xl">Video Preview</h1>
        </div>
        <div className="flex flex-auto py-2">
          <iframe className="yt-img" width="1120" height="630" src="https://www.youtube.com/embed/EKtf5D3udAs" title="Portfolio Website - Project 5 - By Pablo Valdes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          {/* <iframe className="yt-img" width="1120" height="630" src="https://www.youtube.com/embed/28yTOBtzJ_w" title="Moonlight Sonata in the SM64 Soundfont" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Description</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">My Full Stack Developer Portfolio, this website is deployed via Vercel onto my own domain, pablovaldes.com. The website has a light, dark, and swag theme, each made for best visual appeal, the site is also responsive on mobile devices. I&apos;ve also added a form with validation for users to send me email messages and a project details page for in depth details on any of my given project. I used Figma to create some assets such as the chess pieces in the hero section and box in the misc project card. For icons I went with various sources like from ironscout and fontawesome. For fonts I used googlefonts to get fonts like Merriweather and Roboto.</p>
        </div>
        <div className="text-wrap px-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Tech Used</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">I used Nextjs, Typescript, and TailwindCSS to make the majority of the site. I used Zustand since I wanted to share theme state globally so other page routes could access them. Using this theme state I was able to conditionally apply CSS classes to element blocks and create light, dark, and swag themes. For email sending I used Resend, so basically after configuring the DNS records on my website to use Resend I was able to make a POST api route so when the messages submitted from my form would be sent to me I&apos;d catch the POST requests and then using Resend and email templates I was able to process the form data so I could receive the messages via my email. And to make sure the data I got from the contact form was more or less not random gibberish I used Zod with React Hook Form for form validation. But even with these precautions I&apos;ve also rate limited the API route to send me emails, so a given user cannot send me more than 3 emails per 10 minutes based on their ip address. Furthermore I&apos;ve added a toast (a brief message) when a user submits the form, if the submission is successful then they will be given a success toast, if they have been rate limited or encounter an error then they will be given an unsuccessful toast with the reason why.</p>
        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Key take away</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">In this project of mine you currently find yourself in, it&apos;s one of my most thoughtful works yet and I truly hope you&apos;ve noticed. It&apos;s my portfolio website of course, but much more than that, it&apos;s a showcase of my design skills, up until now I haven&apos;t made many projects that focus on design or even responsiveness, I&apos;ve been focused on the logic side and learning new skills. In this focus, I realize now, what was lost. I hadn&apos;t been able to notice that the true beauty of a website isn&apos;t just it&apos;s logic, but the culmination of that hand and hand with an inspired and responsive design, and although it took me this long to realize this truth, this portfolio marks the day that I understood what true beauty is and this lesson is one I will take with me through all future projects.</p>
        </div>
        <div className="flex max-[850px]:justify-center max-[850px]:items-center w-full px-4 pb-4 pt-8 flex-row items-start gap-6">
          <div>
            <a href="/" title='Go to the deployed live site' >
              <h1 className="max-[420px]:text-xl text-blue-500 underline text-2xl grow">Live Site</h1>
            </a>
          </div>
          <div>
            <a href="https://github.com/Valx01P/pablo-valdes-portfolio-website" target="_blank" rel="noopener noreferrer" title='View the Github Repository for this project' >
              <h1 className="max-[420px]:text-xl text-blue-500 underline text-2xl grow">Source Code</h1>
            </a>
          </div>
        </div>
        <footer className="flex w-full h-[11dvh] justify-center items-center">
          <div className="flex flex-1 max-[850px]:justify-center max-[850px]:items-center justify-start max-[560px]:flex-col flex-row px-4 pt-4">
              <h2 className="flex w-auto max-[420px]:text-base roboto-black text-2xl text-black dark:text-white text-wrap">
                © {currentYear} Pablo Valdes.&nbsp;
              </h2>
              <h2 className="flex w-auto max-[420px]:text-base roboto-black text-2xl text-black dark:text-white text-wrap">
                All rights reserved.
              </h2>
          </div>
        </footer>
      </div>
    </main>
  );
}