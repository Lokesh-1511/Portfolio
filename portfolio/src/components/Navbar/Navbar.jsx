import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div >
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
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
