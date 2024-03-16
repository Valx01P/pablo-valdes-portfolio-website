"use client";
import { useTheme } from "@/app/lib/store";

export default function Misc() {

  const { darkMode } = useTheme();

  const currentYear = new Date().getFullYear();

  return ( //if darkMode is true, add the dark class to the main element
    <main className={`${darkMode && "dark"} w-auto dark:bg-yt light-gradient text-black dark:text-white h-auto`}>
      <div className="dark:bg-yt light py-8 h-full flex flex-col flex-1 justify-center items-center max-[430px]:ml-[0px] ml-[70px] max-[430px]:pt-[70px]">
        <div>
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Miscellaneous Projects</h1>
        </div>
        <div>
          <h1 className="max-[420px]:text-lg text-black dark:text-white text-2xl">Video Preview</h1>
        </div>
        <div className="flex flex-auto py-2">
          <iframe className="yt-img" width="1120" height="630" src="https://www.youtube.com/embed/3qXkxAw5Sc4" title="Misc. Projects (4) - By Pablo Valdes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="text-wrap px-4 pt-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white font-bold text-2xl">Description</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">An assortment of my smaller projects, and while I do have many more, these are the few that I believe meet my minimum standards for a small project to show off. Two of them are websites, and the other two are C++ applications. All of these projects were relatively simple or lacked meaningful purpose in their creation; therefore, they didn&apos;t offer as much learning value as my main display projects, thus they are grouped in the miscellaneous section.</p>
        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white font-bold text-2xl">3D Chart Website</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">Made using Three.js, Javascript, React, and Vite. This website contains a 3d graph that a user can plot data points on, or create simple shapes like cubes and squares and specify their location in the 3d environment. Chart length can also be extended in all 3 dimensions and an orbital camera used to view the 3d scene can be reset to an initial starting position.</p>
        </div>
        <div className="text-wrap px-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white font-bold text-2xl">DemJeremiah Meme Website</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">This website was made as something humorous for one of my friends, designed using Figma and developed with basic CSS, HTML, Javascript, and EJS. The project itself not very notable, and the only real skill I was able to develop on this project was basic Figma website designing.</p>
        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white font-bold text-2xl">Library Management System C++ CLI Application</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">My final for my C++ class. One day I was enrolled in a C++ class, luckily I already knew C++, long story short, I skipped straight to the final and aced it. This is a simple command line project that lets you view and alter file data. It uses a menu display to let users choose their actions and implements a simple bubble sort algorithm to sort books by title.</p>
        </div>
        <div className="text-wrap px-4 pb-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white font-bold text-2xl">Student Management System C++ CLI Application</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">When I made this project, it was for the purpose of better understanding object oriented programming, and in reality, preparing for my C++ final. This command line project lets you create a classroom of students each with their own names and grades, which is all changeable and deletable, essentially I implemented full CRUD functionality to this simple application.</p>
        </div>

        <div className="flex max-[850px]:justify-center max-[850px]:items-center w-full px-4 pb-4 pt-8 flex-col items-start">

          <div className="flex max-[850px]:justify-center max-[850px]:items-center max-[850px]:flex-col w-full flex-row items-start gap-6">
            <div>
              <a href="https://github.com/Valx01P/3d-site" target="_blank" rel="noopener noreferrer" title='Go to the deployed live site'>
                <h1 className="max-[420px]:text-lg text-blue-500 underline text-xl grow">Source Code for 3D Website</h1>
              </a>
            </div>
            <div>
              <a href="https://github.com/Valx01P/demjeremiah-meme-site" target="_blank" rel="noopener noreferrer" title='View the Github Repository for this project'>
                <h1 className="max-[420px]:text-lg text-blue-500 underline text-xl grow">Source Code for DemJeremiah Website</h1>
              </a>
            </div>
          </div>


          <div className="flex max-[850px]:justify-center max-[850px]:items-center max-[850px]:flex-col w-full pb-4 pt-[1.5rem] flex-row items-start gap-6">
            <div>
              <a href="https://github.com/Valx01P/library-system-cpp" target="_blank" rel="noopener noreferrer" title='View the Github Repository for this project'>
                <h1 className="max-[420px]:text-lg text-blue-500 underline text-xl grow">Source Code for Library System</h1>
              </a>
            </div>
            <div>
              <a href="https://github.com/Valx01P/classroom-system" target="_blank" rel="noopener noreferrer" title='View the Github Repository for this project'>
                <h1 className="max-[420px]:text-lg text-blue-500 underline text-xl grow">Source Code for Student System</h1>
              </a>
            </div>
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