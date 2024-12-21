import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/LearnJava.webp';
import Left from '../../../assets/Showcase/LearnJavaTopLeft.webp';
import TopRight from '../../../assets/Showcase/LearnJavaTopRight.webp'
import ImpactBottom from '../../../assets/Showcase/LearnJavaBottom.webp'
import ProofImg from "../../../assets/Showcase/LearnJavaProof.webp";
import BottomImg from '../../../assets/Shapes/impact-bottom.webp';

const team = [
  '1 Software Developer (me)',
  '1 ChatGPT to build the course'
];


const LearnJava = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="LearnJava study platform" 
          descript='In Uni I had a subject called "Fundamentals of programming 3", which basically thought us how to program in Java, so I decided to create a study platform for my classmates.'
          team={team}
          img={HeroImg}
          website="https://andorkadominik.github.io/LearnJava/"
          />

        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">How did I have Impact?</h2>  
            <div className="points">
              <p>#1: Designed and developed the entire website independently</p>
              <p>#2: Processed an immense amount of data</p>
              <p>#3: Solved tricky challenges. E.g. Making the code colorful, saving track etc.</p>
            </div>

            <div className="images">
              <div className="left-top">
                <img draggable={false} src={Left} alt="" />
              </div>
              <div className="right-top">
                <img draggable={false} src={TopRight} alt="" />
              </div>
              <div className="center">
                <img draggable={false} src={ImpactBottom} alt="" />
              </div>
            </div>
          </div>
          <div className="bottomImg-container">
            <img src={BottomImg} className='bottomImg' alt="" />
          </div>      </div>

      <div className="result">
        <div className="container">
          <h2 className="projects-heading">Colorfull challange</h2>  
          
          <div className="numbers">
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>1</h2>
              <p className='explanation'>Thought of coloring it myself</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>2</h2>
              <p className='explanation'>Searched up a solution</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>3</h2>
              <p className='explanation'>Discovered <b>react-syntax-highlighter</b></p>
            </div>

            <div className="text-container">
              <p>The problem was simple yet significant: the default code styling did not provide the syntax highlighting that makes code easy to read and understand.</p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="" />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default LearnJava