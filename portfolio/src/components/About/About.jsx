import React from 'react'
import content from '../../content.json'
import './About.css'
function About() {
  return (
    <div id="about" className="about-container">
      <h2 id="title">{content.about.title}</h2>
      <p className="about">{content.about.description}</p>

    </div>
  )
}

export default About;
