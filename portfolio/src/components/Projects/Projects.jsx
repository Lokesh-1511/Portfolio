import React from 'react'

function Projects() {
  return (
    <div className="projects-grid">
      <ProjectCard 
        title="College Hub" 
        image="https://via.placeholder.com/150" 
        description="Multiplayer strategy game using React, Socket.io." 
        tech="React, Node.js, Socket.io" 
        githubLink="
    </div>
  )
}
function ProjectCard({ title, image, description, tech, githubLink }) {
  return (<section className="project-card">
        <h2 id="title">College Hub</h2>
        <img src=""/>
        <section className="card-content">
            <p>Multiplayer strategy game using React, Socket.io.</p>
            <p><strong>Tech:</strong> React, Node.js, Socket.io</p>
            <a href="https://github.com/..." target="_blank">GitHub</a>
        </section>
      </section>);
}
export default Projects;
