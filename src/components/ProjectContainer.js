import React from 'react'
import ProjectCard from './ProjectCard';


const ProjectContainer = ( { projects, setProjects }) => {

  const mappedProjects = projects.map(project => (
    <ProjectCard {...project} key={project.id} setProjects={setProjects} />))

  return (
    <div>
      <h1 className="project-header">My Projects</h1>
        <div>
          {mappedProjects}
        </div>
    </div>
  )
}

export default ProjectContainer 
