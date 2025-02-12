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

const Home = () => {
  
  const containerRef = useRef(null);

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
      const projectsSection = document.getElementById('projects');
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

      <div className="projects" id='projects'>
        <h2 className='projects-heading' >Projects</h2>

        <div className="cards">
          <Link to={'/projects/AndorkaVILL/'} onClick={() => scrollToTop()}>
            <div className="card" id='AndorkaVILL'></div>
            <p>Andorka-VILL kft.</p>
          </Link>
          <Link to={'/projects/LearnJava/'} onClick={() => scrollToTop()}>
            <div className="card" id='LearnJava'></div>
            <p>LearnJava</p>
          </Link>
          <Link to={'/projects/EchoGPT/'} onClick={() => scrollToTop()}>
            <div className="card" id='EchoGPT'></div>
            <p>EchoGPT</p>
          </Link>
          <Link to={'/projects/ConvertMe/'} onClick={() => scrollToTop()}>
            <div className="card" id='ConvertMe'></div>
            <p>ConvertMe</p>
          </Link>
          <Link to={'/projects/Quiz/'} onClick={() => scrollToTop()}>
            <div className="card" id='Quiz'></div>
            <p>Quiz</p>
          </Link>
          <Link to={'/projects/ReciMe/'} onClick={() => scrollToTop()}>
            <div className="card" id='ReciMe'></div>
            <p>ReciMe</p>
          </Link>
        </div>
      </div>

      {/* <p className='note'>I've also written about <Link to={"/Blog/Rendering"}>Rendering</Link>, <Link to={"/Blog/Colorful/"}>Colorful challange</Link>, and <Link to={"/Blog/Scripts/"}>Scripts</Link>. Feel free to have a read.</p> */}
    </div>
  );
};

export default Home;
