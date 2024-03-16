"use client";
import { useTheme } from "@/app/lib/store";

export default function Theoretical_Stonk_Plays() {

  const { darkMode } = useTheme();

  const currentYear = new Date().getFullYear();

  return ( //if darkMode is true, add the dark class to the main element
    <main className={`${darkMode && "dark"} w-auto dark:bg-yt light-gradient text-black dark:text-white h-auto`}>
      <div className="dark:bg-yt light py-8 h-full flex flex-col flex-1 justify-center items-center max-[430px]:ml-[0px] ml-[70px] max-[430px]:pt-[70px]">
        <div>
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-balance text-center text-3xl">Theoretical Stonk Plays Project</h1>
        </div>
        <div>
          <h1 className="max-[420px]:text-lg text-black dark:text-white text-2xl">Video Preview</h1>
        </div>
        <div className="flex flex-auto py-2">
          <iframe className="yt-img" width="1120" height="630" src="https://www.youtube.com/embed/iTeLpY0IYnw" title="Theoretical Stonk Plays Website - Project 2 - By Pablo Valdes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Description</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">In this project, you can look at stock charts, search for different charts based on their ticker symbol, and switch between different chart displays. However, the main feature of this project is the ability to make theoretical stock plays, which simply put, allows you to mimic how an actual stock play would go based on actions like stock price changes or adjusting your position. Afterwards, once you finish a play, you can end it by selling the entire position to see your ending metrics, or you can go back in the play. Your position in this theoretical stock play is displayed on a chart for better visualization of how your play would perform, along with a table displaying all the changing data.</p>
        </div>
        <div className="text-wrap px-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Tech Used</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">For this project I made use of Nextjs, Typescript, and TailwindCSS, but the star of this project was Zustand. I used Zustand for the complex state management and defining how actions like changing the stock price, for example, would mutate other state variables. These state mutations were recorded in a step array which is how I implemented a back button and was able to create a table of data and chart display. As for the regular stock chart we are able to query stock charts from, I used a third party API to get the stock aggregate data to build those charts, more specifically, I used the polygon.io stock API and fetched the data from there using dynamic search urls based on the value of the search input which is by default SPY.</p>
        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Key take away</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">In this project I learned a tremendous amount about working with state and third party APIs which was the main goal of this project, but I learned a little more than just that, let me say it like this. This project has been something I always wanted to create because I knew from when I used to trade stocks that I would love a tool like this. Sure there is paper trading, but that&apos;s not at all close to what this is, paper trading is fundamentally different it just let&apos;s you pretend like you&apos;re actually trading stocks, this let&apos;s you create an actual plan with steps and gives you instantaneous values and changes that make it truly useful to someone not trying to calculate these complex changes to their position to make a theoretical stock play. But I digress, the key take away I gained from this project was not only a greater understanding of state logic and APIs, but a better idea on what coding is all about, to make something you truly believe is useful.</p>
        </div>
        <div className="flex max-[850px]:justify-center max-[850px]:items-center w-full px-4 pb-4 pt-8 flex-row items-start gap-6">
          <div>
            <a href="https://theoretical-stock-plays-site.vercel.app/" target="_blank" rel="noopener noreferrer" title='Go to the deployed live site' >
              <h1 className="max-[420px]:text-xl text-blue-500 underline text-2xl grow">Live Site</h1>
            </a>
          </div>
          <div>
            <a href="https://github.com/Valx01P/theoretical-stock-plays-site" target="_blank" rel="noopener noreferrer" title='View the Github Repository for this project' >
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