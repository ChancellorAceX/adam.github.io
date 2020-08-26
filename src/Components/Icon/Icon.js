import React from 'react';
import JQuery from '../../Resources/Images/jQuery.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';




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
        <img className='jquery-img' src={JQuery} alt='jQuery icon' />
      );
    default:
      return 'No icon found';
  }
}