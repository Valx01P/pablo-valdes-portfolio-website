"use client";
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
    

  return (
    <div className={`${darkMode && "dark"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="bg-yellow-100 dark:background flex min-h-screen flex-col items-center justify-between p-24">
        <div className="">
          <h1 className="text-4xl font-bold text-center">Welcome to my portfolio</h1>
          <p className="text-center">This is a simple example of how to implement dark mode in a Next.js app</p>

        </div>
      </main>
    </div>
  );
}
