"use client";
import { useTheme } from "@/app/lib/store";

export default function Portfolio() {

  const { darkMode, toggleDarkMode } = useTheme();

  return ( //if darkMode is true, add the dark class to the main element
    <main className={`${darkMode && "dark"} w-auto ml-[70px] light-2 text-black dark:background dark:text-white h-screen`}>
      <div className="dark:background-card h-full flex-1">
        <h1 className="text-black dark:text-white text-5xl">Portfolio</h1>
      </div>
    </main>
  );
}