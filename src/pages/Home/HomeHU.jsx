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

function MyDocument() {
  const location = useLocation();
        
  if (location.pathname.includes("/HU/")) {
        console.log("true");
    } else {
        console.log("false");
    }

  return null;
}

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
        const projectsSection = document.getElementById('projects');
        if (!projectsSection) return;

        const targetPosition = projectsSection.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition;
        const duration = 2000; // Duration in milliseconds
        let start = null;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const easing = customEase(progress / duration);
            window.scrollTo(0, startPosition + distance * easing);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        });

        function customEase(t) {
            if (t < 0.55) {
                return 2 * t * t;
            } else if (t < 0.7) {
                return 1.5 * t;
            } else {
                return -1 + (4 - 2 * t) * t;
            }
        }
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

      <div className="projects" id='projects'>
        <h2 className='projects-heading' >Projektek</h2>

        <div className="cards">
          <Link to={'/HU/projects/AndorkaVILL/'} onClick={() => scrollToTop()}>
            <div className="card" id='AndorkaVILL'></div>
            <p>Andorka-VILL kft.</p>
          </Link>
          <Link to={'/HU/projects/LearnJava/'} onClick={() => scrollToTop()}>
            <div className="card" id='LearnJava'></div>
            <p>LearnJava</p>
          </Link>
          <Link to={'/HU/projects/EchoGPT/'} onClick={() => scrollToTop()}>
            <div className="card" id='EchoGPT'></div>
            <p>EchoGPT</p>
          </Link>
          <Link to={'/HU/projects/ConvertMe/'} onClick={() => scrollToTop()}>
            <div className="card" id='ConvertMe'></div>
            <p>ConvertMe</p>
          </Link>
          <Link to={'/HU/projects/Quiz/'} onClick={() => scrollToTop()}>
            <div className="card" id='Quiz'></div>
            <p>Quiz</p>
          </Link>
          <Link to={'/HU/projects/ReciMe/'} onClick={() => scrollToTop()}>
            <div className="card" id='ReciMe'></div>
            <p>ReciMe</p>
          </Link>
        </div>
      </div>

      {/* <p className='note'>Írtam már az akadálymentességről, saját történetmesélő workshop lebonyolításáról és arról, hogyan segíthetné az Amazon Echo az Alzheimer-kóros betegeket. Nyugodtan olvass bele!</p> */}
    </div>
  );
};

export default Home;
