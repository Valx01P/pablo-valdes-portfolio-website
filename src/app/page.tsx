"use client";
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ToolSection from "@/components/ToolSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
    

  return (
    <main className={`${darkMode && "dark"} light text-black dark:background dark:text-white h-auto`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <ProjectSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ToolSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </main>
  );
}
