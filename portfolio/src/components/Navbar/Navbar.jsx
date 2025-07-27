
import React, { useState } from 'react';
import './Navbar.css';
import { useTheme } from '../../ThemeContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li>
            <button
              onClick={toggleTheme}
              style={{
                marginLeft: '1rem',
                background: 'none',
                border: '1px solid #6366f1',
                color: 'inherit',
                padding: '6px 14px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'background 0.2s, color 0.2s',
              }}
              aria-label="Toggle light/dark mode"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
