// src/components/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css'
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';

import Name from "/name.webp";
import Hand from "../../assets/hand.webp";
import Arrow from "../../assets/arrowdown.webp";

import { useLocation } from "react-router-dom";

import TechnologiesHU from '../../components/Technologies/TechnologiesHU';

function MyDocument() {
  const location = useLocation();
        
  if (location.pathname.includes("/HU/")) {
        console.log("true");
    } else {
        console.log("false");
    }

  return null;
}

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

  MyDocument();

  const handleScroll = () => {
    window.scrollBy({ top: 550, behavior: 'smooth' });
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }

  function scrollToProjects() {
      const projectsSection = document.getElementById('technologies');
      if (!projectsSection) return;
    
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  
  return (
    <div className="home">
      <Link to={'/'} className='language'>ENG</Link>
      <div className="hero">
        <div className="name">
          <img src={Name} alt="" /> <img src={Hand} alt="" className='hand' />
        </div>
        <div className="intro">
          <p>
            {Array.from("Junior szoftverfejlesztő vagyok, aki a tervezési folyamatokra, jelentős munkák megvalósítására és az emberek életének jobbá tételére összpontosít.").map((char, index) => (
                <span key={index} className="char">{char}</span>
              ))}
          </p>
        </div>

        <div className="bottom" onClick={scrollToProjects}>
            <p>nézd meg ezeket is</p>
            <img src={Arrow} className='arrow' alt="" />
        </div>
      </div>

      <TechnologiesHU />

      <div className="projects" id='projects'>
        <h2 className='projects-heading' >Projektek</h2>

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

      {/* <p className='note'>Írtam már az akadálymentességről, saját történetmesélő workshop lebonyolításáról és arról, hogyan segíthetné az Amazon Echo az Alzheimer-kóros betegeket. Nyugodtan olvass bele!</p> */}
    </div>
  );
};

export default Home;
