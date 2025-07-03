import React from 'react';
import './Skills.css';

const familiarTools = [
  { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
  { name: "Express", icon: "https://cdn-icons-png.flaticon.com/512/919/919831.png" },
  { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
  { name: "Oracle DB", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968345.png" },
  { name: "C++", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
  { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" }
];

const learningNow = [
  { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg" },
  { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Tech Stack</h2>
      <p className="skills-note">
        Here are some tools I’ve worked with, and others I’m currently exploring to deepen my knowledge.
      </p>

      <h3>Tools I’m Familiar With:</h3>
      <div className="skills-grid">
        {familiarTools.map((tool, idx) => (
          <div className="skill-card" key={idx}>
            <img src={tool.icon} alt={tool.name} className="skill-icon" />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>

      <h3>Currently Exploring</h3>
      <p className="skills-description">
        I'm learning Flutter to build cross-platform mobile apps, and using Python for working with data and exploring machine learning.
      </p>
      <div className="skills-grid">
        {learningNow.map((tool, idx) => (
          <div className="skill-card" key={idx}>
            <img src={tool.icon} alt={tool.name} className="skill-icon" />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
