import React, { useState, useEffect } from "react";
import "./assets/css/style.css";
import BackgroundVideo from "./components/BackgroundVideo";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import ResumePage from "./components/ResumePage";
import Skills from "./components/Skills";
import Progress from "./components/Progress";
import ProjectsSection from "./components/Projects";
import BlogPage from "./components/BlogPage";
import Contact from "./components/Contact";

import backgroundVideoViolet from "./assets/images/background.mp4";
import backgroundVideoBlue from "./assets/images/background-blue.mp4";
import backgroundVideoGreen from "./assets/images/background-green.mp4";
import backgroundVideoOrange from "./assets/images/background-orange.mp4";
import backgroundVideoPink from "./assets/images/background-pink.mp4";
import backgroundVideoCyan from "./assets/images/background-cyan.mp4";

function App() {
  const [currentTheme, setCurrentTheme] = useState("violet");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activePage, setActivePage] = useState("about");

  const themeVideos = {
    violet: backgroundVideoViolet,
    blue: backgroundVideoBlue,
    green: backgroundVideoGreen,
    orange: backgroundVideoOrange,
    pink: backgroundVideoPink,
    cyan: backgroundVideoCyan,
  };

  const themeColors = {
    violet: '#9854f6',
    blue: '#4a9eff',
    green: '#44d62c',
    orange: '#ff8a29',
    pink: '#ff5e9d',
    cyan: '#00d4ff',
  };

  const toggleTheme = () => {
    const themes = Object.keys(themeVideos);
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    setIsTransitioning(true);
    setCurrentTheme(nextTheme);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Match video fade duration
  };

  useEffect(() => {
    // 1. Update CSS Variable for Accent Color
    const color = themeColors[currentTheme];
    document.documentElement.style.setProperty('--orange-yellow-crayola', color);
    
    // 2. Update Text Gradient
    // We create a gradient that goes from the theme color to a slightly adjusted version (or same for simplicity)
    document.documentElement.style.setProperty('--text-gradient-yellow', `linear-gradient(to right, ${color}, ${color})`);

    // 3. Update Data Attribute for Theme-Specific Overrides (if any exist in CSS)
    document.documentElement.setAttribute('data-theme', currentTheme);

  }, [currentTheme]);

  const currentVideo = themeVideos[currentTheme];

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <BackgroundVideo videoSrc={currentVideo} isTransitioning={isTransitioning} />

      <main style={{ position: "relative", zIndex: 0 }}>
        <Sidebar />

        <div className="main-content">
          <Navbar 
            currentTheme={currentTheme} 
            onThemeToggle={toggleTheme} 
            activePage={activePage} 
            setActivePage={setActivePage} 
          />

          <AboutPage currentTheme={currentTheme} isActive={activePage === "about"} />

          <ResumePage isActive={activePage === "resume"} />

          <article className={`skills ${activePage === "skills" ? "active" : ""}`} data-page="skills">
            <Skills />
          </article>

          <article className={`progress ${activePage === "progress" ? "active" : ""}`} data-page="progress">
            <header>
              <h2 className="h2 article-title">Progress</h2>
            </header>
            <Progress currentTheme={currentTheme} />
          </article>

          <article className={`portfolio ${activePage === "portfolio" ? "active" : ""}`} data-page="portfolio">
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <ProjectsSection currentTheme={currentTheme} />
          </article>
 

          <BlogPage isActive={activePage === "blog"} />
          <Contact isActive={activePage === "contact"} />
        </div>
      </main>
    </div>
  );
}

export default App;
