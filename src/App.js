import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronDown, ArrowRight } from 'lucide-react';
import profilePhoto from "./assets/profile.webp";
import './App.css';
import Work from './components/Work';
import About from './components/About';
import Playground from './components/Playground';
import Contact from './components/Contact';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { lang, setLang, t } = useLanguage();

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
          <a href="#work" className="active">{t.nav.work}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#playground">{t.nav.vibes}</a>
          <a href="#contact">{t.nav.contact}</a>
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
            <div className="hero-badge">{t.hero.badge}</div>
            <h1 className="hero-title">
              {t.hero.titleStart} <br />
              <span className="gradient-text">{t.hero.titleEmph}</span>
            </h1>
            <p className="hero-subtitle">
              {t.hero.subtitle}
            </p>

            <button className="glass-button">
              {t.hero.cta}
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

      <Work />
      <About />
      <Playground />
      <Contact />

      {/* Decorative ambient blobs if needed beyond body gradient */}
    </div>
  );
}

export default App;
