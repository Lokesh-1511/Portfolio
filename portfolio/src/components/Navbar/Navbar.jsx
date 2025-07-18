import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div >
        <nav className="navbar">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
