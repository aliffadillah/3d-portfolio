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
        text="Navigating my portfolio is like embarking on a visual journey, where each project is a chapter revealing the artistry of code and the story of my passion for creating meaningful digital experiences."
        link='/projects'
        btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox 
        text="As the pixels weave tales of innovation and creativity in my portfolio, a silent partnership beckons. Those who envision collaboration find their way to contact me, drawn by the promise of transforming shared ideas into a dynamic symphony of cooperation and success."
        link='/contact'
        btnText="Let's talk"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
