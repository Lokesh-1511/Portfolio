import React from 'react';
import content from '../../content.json';
import './Projects.css';
// // Import images
// import img1 from '../../assets/projects/1.png';
// import img2 from '../../assets/projects/2.png';
// import img3 from '../../assets/projects/3.png';
// import img4 from '../../assets/projects/4.png';

// // Map keys to image files
// const imageMap = {
//   1: img1,
//   2: img2,
//   3: img3,
//   4: img4
// };

function Projects() {
  return (
    <div id="projects"><div className="details"><h2 className="heading">Projects</h2>
    <p className="description">Below are some of the projects I’ve developed across web, mobile, and AI domains. Each one is functional with key features in place, and I continue to enhance and refine them as I grow in my learning journey.</p>
    </div>
    <div className="projects-grid">
      {Object.entries(content.projects).map(([key, project]) => (
        <ProjectCard 
          key={key}
          title={project.title}
          //image={imageMap[key]}
          description={project.description}
          tech={project.tech}
          githubLink={project.githubLink}
        />
      ))}
    </div>
    </div>
  );
}

function ProjectCard({ title, image, description, tech, githubLink }) {
  return (
    <section className="project-card">
      <h2 className="protitle">{title}</h2>
      {/* <img src={image} alt={`${title} preview`} /> */}
      <section className="card-content">
        <p>{description}</p>
        <p><strong>{tech}</strong></p>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </section>
    </section>
  );
}

export default Projects;
