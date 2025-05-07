// src/components/Home.js
import React, { useEffect, useState, useRef } from 'react';
import './Home.css'

// import VariableProximity from '../../components/VariableProximity/VariableProximity';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';

import Name from "/name.webp";
import Hand from "../../assets/hand.webp";
import Arrow from "../../assets/arrowdown.webp";

import { useLocation } from "react-router-dom";

import Marquee from '../../components/Marquee/Marquee';
import Technologies from '../../components/Technologies/Technologies';

const projectsData = [
  {
    name: 'Andorka-VILL kft.',
    id: 'AndorkaVILL',
    link: '/projects/AndorkaVILL/',
    techStack: ['React', 'CSS', 'Vite'],
  },
  {
    name: 'LearnJava',
    id: 'LearnJava',
    link: '/projects/LearnJava/',
    techStack: ['React', 'CSS', 'Java'],
  },
  {
    name: 'EchoGPT',
    id: 'EchoGPT',
    link: '/projects/EchoGPT/',
    techStack: ['React', 'OpenAI API', 'Vite'],
  },
  {
    name: 'ConvertMe',
    id: 'ConvertMe',
    link: '/projects/ConvertMe/',
    techStack: ['React', 'CSS', 'Blob'],
  },
  {
    name: 'Quiz',
    id: 'Quiz',
    link: '/projects/Quiz/',
    techStack: ['React', 'CSS', 'Vite'],
  },
  {
    name: 'ReciMe',
    id: 'ReciMe',
    link: '/projects/ReciMe/',
    techStack: ['React', 'CSS', 'VITE'],
  },
];


const Home = () => {
  
  const containerRef = useRef(null);

  const titleRef = useRef(null);

  const handleScroll = () => {
    window.scrollBy({ top: 550, behavior: 'smooth' });
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      // behavior: 'initial', 
    });
  }

  function scrollToProjects() {
    const projectsSection = document.getElementById('technologies');
    if (!projectsSection) return;
  
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="home">
      <Link to={'/HU/'} className='language'>HU</Link>
      <div className="hero">
        <div className="name">
          <img src={Name} alt="" /> <img src={Hand} alt="" className='hand' />
        </div>
        <div className="intro" ref={containerRef} style={{position: 'relative'}}>
          <p>
            {Array.from("Junior Software Developer, focusing on design processes, shipping meaningful work, and making people’s lives better along the way.").map((char, index) => (
              <span key={index} className="char">{char}</span>
            ))}
          </p>
        </div>

        <div className="bottom" onClick={scrollToProjects}>
            <p>down here for the good stuff</p>
            <img src={Arrow} className='arrow' alt="" />
        </div>
      </div>

      <Technologies titleRef={titleRef} />

      
      <div className="projects" id='projects'>
        <h2 className='projects-heading' >Projects</h2>
        <p className='project-subheading'>A selection of personal and client-based projects showcasing my skills in web development, software development, and technical content creation.</p>
        <div className="techStack">
          {/* <Marquee /> */}
        </div>

        <div className="cards">
          {projectsData.map((project, index) => (
            <Link to={project.link} key={index} onClick={() => scrollToTop()} className='card-link'>
              <div className="card" id={project.id}></div>
              <p>{project.name}</p>
              <div className="tech-stack">
                <ul>
                  {project.techStack.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <p className='note'>I've also written about <Link to={"/Blog/Rendering"}>Rendering</Link>, <Link to={"/Blog/Colorful/"}>Colorful challange</Link>, and <Link to={"/Blog/Scripts/"}>Scripts</Link>. Feel free to have a read.</p> */}
    </div>
  );
};

export default Home;
