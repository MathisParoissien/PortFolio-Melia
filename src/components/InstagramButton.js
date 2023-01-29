import React from 'react';
import {BsInstagram} from 'react-icons/bs'
import '../css/Text.css';


function InstagramButton() {
  return (
    <a target="_blank" href="https://www.instagram.com/meliaa_tsln/?hl=fr">
      <BsInstagram className='icons'/>
    </a>
  );
}

export default InstagramButton;