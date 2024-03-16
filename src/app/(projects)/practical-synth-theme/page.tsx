"use client";
import { useTheme } from "@/app/lib/store";

export default function Practical_Synth_Theme() {

  const { darkMode } = useTheme();

  const currentYear = new Date().getFullYear();

  return ( //if darkMode is true, add the dark class to the main element
    <main className={`${darkMode && "dark"} w-auto dark:bg-yt light-gradient text-black dark:text-white h-auto`}>
      <div className="dark:bg-yt light py-8 h-full flex flex-col flex-1 justify-center items-center max-[430px]:ml-[0px] ml-[70px] max-[430px]:pt-[70px]">
        <div>
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-balance text-center text-3xl">Practical Synth Theme Project</h1>
        </div>
        <div>
          <h1 className="max-[420px]:text-lg text-black dark:text-white text-2xl">Video Preview</h1>
        </div>
        <div className="flex flex-auto py-2">
          <iframe className="yt-img" width="1120" height="630" src="https://www.youtube.com/embed/hJPBJeP775c" title="Practical Synth Theme Extension - Project 3 - By Pablo Valdes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Description</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">In this project I create a Visual Studio Code Extension, this extension changes the the Visual Studio Code Theme to my specific one named Practical Synth Theme. I made this Theme because I couldn&apos;t find any Synthwave or Cyberpunk like themes that I liked, most just gave me eye strain, didn&spos;t captivate me, or just had too much contrast that I couldn&apos;t focus on actually coding with them, so I made one that satisfied all the criteria I wanted.</p>
        </div>
        <div className="text-wrap px-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Tech Used</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">This wasn&apos;t that logically impressive of a project, it was more of a designing like project, I used &apos;yo code&apos; to begin the development of my vscode theme extension. Afterwards once I restyled all the main vscode classes in the theme json I had then created an Azure developer account and uploaded my extension to the Visual Studio Marketplace where you can see it live right now and download it if you&apos;d like.</p>
        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Key take away</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">This project, my Visual Studio Code Extension, it was less of me just trying to do a project for the sake of improving my coding ability or learning something and more of me just creating something for it&apos;s actual application and use. So I didn&apos;t get too many meaningful takeaways from this project, other than just a sick theme and the strengthened belief that you can create anything you put your mind to.</p>
        </div>
        <div className="flex max-[850px]:justify-center max-[850px]:items-center w-full px-4 pb-4 pt-8 flex-row items-start gap-6">
          <div>
            <a href="https://marketplace.visualstudio.com/items?itemName=PabloValdes019.practical-synth" target="_blank" rel="noopener noreferrer" title='View live on Visual Studio Marketplace' >
              <h1 className="max-[420px]:text-xl text-blue-500 underline text-2xl grow">Marketplace Extension</h1>
            </a>
          </div>
          <div>
            <a href="https://github.com/Valx01P/practical-synth" target="_blank" rel="noopener noreferrer" title='View the Github Repository for this project' >
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