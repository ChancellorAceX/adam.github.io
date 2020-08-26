import React from 'react';
import JQuery from '../../Resources/Images/jQuery.png';
import ExpressJs from '../../Resources/Images/ExpressJs.png';
import PostgreSQL from '../../Resources/Images/PostgreSQL.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, } from '@fortawesome/free-brands-svg-icons';




export default function Icon(props) {
  switch (props.icon) {
    case 'html5':
      return (
        <FontAwesomeIcon icon={faHtml5} />
      );
    case 'css3':
      return (
        <FontAwesomeIcon icon={faCss3Alt} />
      );
    case 'javascript':
      return (
        <FontAwesomeIcon icon={faJs} />
      );
    case 'jquery':
      return (
        <img className='jquery-img' src={JQuery} alt='JQuery icon' />
      );
    case 'react':
      return (
        <FontAwesomeIcon icon={faReact} spin />
      );
    case 'node.js':
      return (
        <FontAwesomeIcon icon={faNodeJs} />
      );
    case 'expressjs':
      return (
        <img className='express-img' src={ExpressJs} alt='ExpressJs icon' />
      );
    case 'postgresql':
      return (
        <img className='postgresql-img' src={PostgreSQL} alt='PostgreSQL icon' />
      );
    default:
      return 'No icon found';
  }
}