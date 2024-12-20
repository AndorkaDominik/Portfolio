import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/AndorkaVill.png';
import Circles from '../../../assets/Shapes/circlesYellow.png';
import ImpactBottom from '../../../assets/Showcase/ImpactBottomAndorkaVILL.png'
import ImpactTopRight from '../../../assets/Showcase/ImpactTopRightAndorkaVILL.png'
import ProofImg from "../../../assets/Showcase/AndorkaVillEmailjs.png";
import BottomImg from '../../../assets/Shapes/impact-bottom.png';

const team = [
  '1 Software Developer',
  '1 Electrical Technician ',
  '1 Cooling and Ventilation System Installer',
];


const AndorkaVILL = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="Andorka-Vill kft. landing page" 
          descript="Tesco were struggling to maintain and build upon their existing cross platform app. We designed and built two native apps, focusing on usability, scaleability and accessibility."
          team={team}
          img={HeroImg}
          website="https://andorkavk.hu/"
          />


        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">How did I have Impact?</h2>  
            <div className="points">
              <p>#1: Designed and developed the entire website independently</p>
              <p>#2: Actively resolved technical challenges</p>
              <p>#3: Engaged extensively with clients to gather requirements and provide tailored solutions</p>
            </div>

            <div className="images">
              <div className="left-top">
                <img draggable={false} src={Circles} alt="" />
              </div>
              <div className="right-top">
                <img draggable={false} src={ImpactTopRight} alt="" />
              </div>
              <div className="center">
                <img draggable={false} src={ImpactBottom} alt="" />
              </div>
            </div>
          </div>
          <img src={BottomImg} className='bottomImg' alt="" />
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
      </div>

    </div>
  )
}

export default AndorkaVILL