"use client";
import { useTheme } from "./lib/store";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ToolSection from "@/components/ToolSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {

  const { darkMode, toggleDarkMode, swagMode, toggleSwagMode } = useTheme();

  return ( //if darkMode is true, add the dark class to the main element
    <main className={`${darkMode && "dark"} light dark:background text-black dark:text-white h-auto`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} swagMode={swagMode} />
      <HeroSection darkMode={darkMode} swagMode={swagMode} />
      <ProjectSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} swagMode={swagMode} />
      <ToolSection darkMode={darkMode} swagMode={swagMode} />
      <AboutSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} swagMode={swagMode} />
      <ContactSection darkMode={darkMode} swagMode={swagMode} />
      <Footer darkMode={darkMode} swagMode={swagMode} toggleSwagMode={toggleSwagMode} />
    </main>
  );
}
