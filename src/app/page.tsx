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
    <div className={`${darkMode && "dark"} light text-black dark:background dark:text-white h-[100dvh]`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection  />
    </div>
  );
}
