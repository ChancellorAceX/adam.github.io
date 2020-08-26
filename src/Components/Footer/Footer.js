import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header(props) {
  return (
    <>
      <h5>© Adam Brown 2020</h5>
      <p><i>adam.edward.brown@gmail.com</i></p>
      <section className='address'>
        <a href='mailto:adam.edward.brown@gmail.com' aria-label='email'><FontAwesomeIcon icon={faEnvelope} /></a>
        <section className='socialLinks'>
          <a href='https://www.linkedin.com/in/adam-brown-36b93565' aria-label='linkedin'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/ChancellorAceX/' aria-label='github'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </section>
    </>
  );
}