import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <>
      <p className='about name'>
        Hey there, I'm Adam. I'm an aspiring developer with a background in Biomedical Engineering.
      </p>
      <img src={require('../../Resources/Images/PersonalImage.JPG')} className='myself' alt='Adam Brown' />
      <p className='about name'>
        Thanks for visiting my page! Feel free to get to know me a little better or have a look a previous projects I've done. You can also contact me at any of the links below.
      </p>
    </>
  );
}