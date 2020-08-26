import React from 'react';
import Icon from '../Icon/Icon';

export default function Project(props) {
  const linebreak = !props.last ? <div className='linebreak'></div> : null;
  return (
    <>
      <section className='projects' id={`project`}>
        <h1>{props.project.title}</h1>
        <figure>
          <img className='projectimg' src={require(`../../Resources/Images/${props.project.image}`)} alt={props.project.imageAlt} />
          <figcaption>{props.project.imageCaption}</figcaption>
        </figure>
        <section className='icon-box'>
          {props.project.tech.map(item =>
            <Icon icon={item} key={`${props.project.name}-${item}`} />
          )}
        </section>
        <section className='buttonBox'>
          <button className='repolink button' id='bookmarkRepo' value={props.project.repo}>Project Repository</button>
          <button className='livelink button' id='bookmarkLive' value={props.project.live}>View Product</button>
        </section>
      </section>
      {linebreak}
    </>
  );
}