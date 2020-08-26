import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  return (
    <ul className='navbar'>
      <li className='name' id='name' key='name'>
        <Link to='/'>
          <p className='header-button'>Adam Brown</p>
        </Link>
      </li>
      <li className='nav' id='about' key='about'>
        <Link to='/about'>
          <p className='header-button'>About Me</p>
        </Link>
      </li>
      <li className='nav' id='projects' key='projects'>
        <Link to='/projects'>
          <p className='header-button'>Projects</p>
        </Link>
      </li>
    </ul>
  );
}