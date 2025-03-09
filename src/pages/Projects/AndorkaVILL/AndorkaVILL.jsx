import React, { useEffect, useState } from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/AndorkaVill.webp';
import Circles from '../../../assets/Shapes/circlesYellow.webp';
import ImpactBottom from '../../../assets/Showcase/ImpactBottomAndorkaVILL.webp'
import ImpactTopRight from '../../../assets/Showcase/ImpactTopRightAndorkaVILL.webp'
import ProofImg from "../../../assets/Showcase/AndorkaVillEmailjs.webp";
import BottomImg from '../../../assets/Shapes/impact-bottom.webp';
import NextProject from '../../../components/NextProject/NextProject';


const team = [
  '1 Software Developer',
  '1 Electrical Technician ',
  '1 Cooling and Ventilation System Installer',
];

// Animation
import semiCircle from '../../../assets/Shapes/semicircle.png';
import { useRotation } from '../../../context/RotationContext';

const AndorkaVILL = () => {
  const { rotation } = useRotation(); 

  return (
    <div className='project-container'>
        <ProjectHeader 
          title="Andorka-Vill kft. landing page" 
          descript="For Andorka-Vill Kft., I developed a user-friendly and responsive landing page aimed at presenting the company's services and expertise in the electrical industry."
          team={team}
          img={HeroImg}
          website="https://andorkavk.hu/"
          />


        <div className="impact">
          <div className="container">
            <img src={semiCircle} className='semicircle' alt="semicircle" id='topSemi' style={{ transform: `rotate(${rotation}deg)` }}  />
            <h2 className="projects-heading">How did I have impact?</h2>  
            <div className="points">
              <p>#1: Designed and developed the entire website independently</p>
              <p>#2: Engaged extensively with clients to gather requirements and provide tailored solutions</p>
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
              <h2 className='number'>1100%</h2>
              <p className='explanation'>5 star reviews went up by</p>
            </div>
            <div className="number-container">
              <h2 className='number'>+5</h2>
              <p className='explanation'>New customers per day</p>
            </div>
            <div className="number-container">
              <h2 className='number'>+50</h2>
              <p className='explanation'>New leads generated daily</p>
            </div>

            <div className="text-container">
              <p>The data presented in the chart clearly indicates a success story for the company, as a significant number of clients have submitted requests for quotations for its services.</p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="" />
              <p>Chart is from <a href="https://www.emailjs.com/">emailjs</a></p>
            </div>
          </div>

        </div>
        <NextProject NextProjectLink={"LearnJava"} />
      </div>

    </div>
  )
}

export default AndorkaVILL