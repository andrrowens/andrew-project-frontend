import React from 'react';

const ProjectCard = ({ id, title, phase, description, video, github, image1, image2, image3 }) => {

    return (
        <>
        <div className="project-box">
            <p>{id} </p>
            <p className="project-title"><u>Title:</u> {title}</p>
            <p className="project-phase"><u>Phase:</u> {phase}</p>
            <p className="project-description"><u>Description:</u> {description}</p>
            <p className="project-video"><u>Video:</u> {video} ft</p>
            <p className="project-github"><u>Github:</u> {github}</p> <br />
            <img className="projectsite-image1" src={image1} alt={""}></img>
            <img className="projectsite-image2" src={image2} alt={""}></img>
            <img className="projectsite-image3" src={image3} alt={""}></img>
        </div>
        </>
    )
 }

 export default ProjectCard 