"use client";
import { useTheme } from "@/app/lib/store";

export default function IServer() {

  const { darkMode, toggleDarkMode } = useTheme();

  return ( //if darkMode is true, add the dark class to the main element
    <main className={`${darkMode && "dark"} light text-black dark:background dark:text-white h-auto`}>
      <h1 className="text-black dark:background dark:text-white w-full h-auto">yo iserver</h1>
    </main>
  );
}