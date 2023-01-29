import React from 'react';
import { Document, Page } from 'react-pdf';

import cv from './cv.png'

const About = () => {
    return (
        <div className='project-container'>
            <img className='h-100' src={cv}/>
        </div>
    )
}

export default About;