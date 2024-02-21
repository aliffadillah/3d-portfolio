import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
      </Link>
    </div>
  );
}

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hello, I am <span className='font-semibold'>Alif</span>🦉
      <br /> 
      A Computer Science students based in Bogor.
    </h1>
  ),
  2: (
    <InfoBox 
        text="CompSci students, fueled by a passion for algorithms and problem-solving, embark on a journey where code becomes their language, and debugging is an art form."
        link='/about'
        btnText='Learn More'
    />
  ),
  3: (
    <InfoBox 
        text="Crafted with precision, my portfolio showcases a symphony of skills and experiences, painting a vivid narrative of my professional journey."
        link='/projects'
        btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox 
        text="Anticipating a connection soon, my portfolio serves as a visual invitation for those intrigued to reach out and embark on a collaborative journey."
        link='/contact'
        btnText="Let's talk"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
