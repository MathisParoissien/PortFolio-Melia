import React from 'react';
import { AiFillMail } from 'react-icons/ai'
import '../css/Text.css';


function ContactButton() {
  return (
    <a href="mailto:meliatosolini13380@gmail.com">
      <AiFillMail className='icons'/>
    </a>
  );
}

export default ContactButton;