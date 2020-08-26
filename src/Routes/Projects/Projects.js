import React from 'react';
import ProjectObject from '../../Resources/ProjectObject';
import Project from '../../Components/Project/Project';
import { withRouter } from 'react-router-dom';

function Projects(props) {
  return (
    <>
      {ProjectObject.map((project, i) => {
        return (
          <Project project={project} key={project.title} last={i === ProjectObject.length - 1} />
        );
      })
      }
    </>
  );
}

export default withRouter(Projects);