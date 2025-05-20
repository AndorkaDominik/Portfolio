import React, { useEffect, useState } from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/Fungorium.webp';
import Circles from '../../../assets/Showcase/FungoriumTopLeft.webp';
import ImpactTopRight from '../../../assets/Showcase/FungoriumTopRight.webp'
import ImpactBottom from '../../../assets/Showcase/FungoriumBottom.webp'
import ProofImg from "../../../assets/Showcase/FungoriumProof.webp";
import BottomImg from '../../../assets/Shapes/impact-bottom.webp';
import NextProject from '../../../components/NextProject/NextProject';


const team = [
  'Caffeine Coderz team',
  '5 Software Developers',
  '1000 cups of coffee'
];

// Animation
import semiCircle from '../../../assets/Shapes/semicircle.png';
import { useRotation } from '../../../context/RotationContext';

const Fungorium = () => {
  const { rotation } = useRotation(); 

  return (
    <div className='project-container'>
        <ProjectHeader 
          title="Fungorium game" 
          descript="This was a University project for a 5 people team. The main goal was to create a game in pure Java and use Agile development, Continuous Integration and Continuous Delivery."
          team={team}
          img={HeroImg}
          game="https://github.com/CaffeineCoderz/Fungorium"
          />


        <div className="impact">
          <div className="container">
            <img src={semiCircle} className='semicircle' alt="semicircle" id='topSemi' style={{ transform: `rotate(${rotation}deg)` }}  />
            <h2 className="projects-heading">How did I have impact?</h2>  
            <div className="points">
              <p>#1: Developed the game from scratch</p>
              <p>#2: Invented and implemented the majority of the GUI alone</p>
              <p>#3: Actively resolved technical challenges</p>
            </div>

            <div className="images">
              <div className="left-top">
                <img draggable={false} src={Circles} alt="" />
              </div>
              <div className="right-top">
                <img src={semiCircle} className='semicircle' alt="semicircle" style={{ transform: `rotate(${rotation}deg)` }} />
                <img draggable={false} src={ImpactTopRight} alt="" />
              </div>
              <div className="center">
                <img draggable={false} src={ImpactBottom} alt="" />
              </div>
            </div>
          </div>
          <div className="bottomImg-container">
            <img src={BottomImg} className='bottomImg' alt="" />
          </div>
      </div>

      <div className="result">
        <div className="container">
          <h2 className="projects-heading">How did it do?</h2>  
          
          <div className="numbers">
            <div className="number-container">
              <h2 className='number' style={{ color: "#73c643"}}>182,25</h2>
              <p className='explanation'>own hours of working</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#73c643"}}>851</h2>
              <p className='explanation'>overall commits</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#73c643"}}>207</h2>
              <p className='explanation'>overall merged pull request</p>
            </div>

            <div className="text-container">
              <p>After reaching final periods of the timeline we couldn't review all the pulls, this was the comment on my work from a team member of CaffeineCoderz. </p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="" />
              <p>"I believe Dominik did it right xDD <br /> I don't think anyone understands it as well as he does xD"</p>
            </div>
          </div>

        </div>
        <NextProject NextProjectLink={"AndorkaVILL"} />
      </div>J

    </div>
  )
}

export default Fungorium