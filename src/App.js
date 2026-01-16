import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronDown, ArrowRight } from 'lucide-react';
import profilePhoto from "./assets/profile.png";
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState('ENG');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>

      {/* Navigation */}
      <nav className="glass-nav">
        <div className="nav-brand">Nika.Design</div>

        <div className="nav-links">
          <a href="#work" className="active">Work</a>
          <a href="#about">About</a>
          <a href="#playground">Playground</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-controls">
          {/* Theme Toggle */}
          <div
            className="glass-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            role="button"
            tabIndex={0}
          >
            <div className={`toggle-pill ${isDarkMode ? 'moon-active' : 'sun-active'}`}>
              <div className="toggle-icon sun-icon">
                <Sun size={14} fill={!isDarkMode ? "gold" : "transparent"} color={!isDarkMode ? "gold" : "currentColor"} />
              </div>
              <div className="toggle-icon moon-icon">
                <Moon size={14} fill={isDarkMode ? "white" : "transparent"} />
              </div>
              <div className="toggle-slider"></div>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="glass-dropdown">
            <span className="current-lang">{lang}</span>
            <ChevronDown size={14} className="dropdown-arrow" />

            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => setLang('ENG')}>ENG</div>
              <div className="dropdown-item" onClick={() => setLang('KHM')}>KHM</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Hero */}
      <main className="hero-container">
        <div className="glass-hero-card">
          <div className="hero-content">
            <div className="hero-badge">Available for freelance</div>
            <h1 className="hero-title">
              Crafting Digital <br />
              <span className="gradient-text">Empathy</span>
            </h1>
            <p className="hero-subtitle">
              Hi, I'm Nika. A UX Designer creating weightless,
              intuitive interfaces that breathe.
            </p>

            <button className="glass-button">
              View Projects
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="hero-visual">
            <div className="visual-orb orb-1"></div>
            <div className="visual-orb orb-2"></div>
            <div className="profile-container">
              <img src={profilePhoto} alt="Nika Profile" className="profile-image" />
            </div>
          </div>
        </div>
      </main>

      {/* Decorative ambient blobs if needed beyond body gradient */}
    </div>
  );
}

export default App;
