import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/Quiz.png';
import Left from '../../../assets/Showcase/QuizTopLeft.png';
import TopRight from '../../../assets/Showcase/QuizTopRight.png'
import ImpactBottom from '../../../assets/Showcase/QuizBottom.png'
import ProofImg from "../../../assets/Showcase/QuizProof.png";
import BottomImg from '../../../assets/Shapes/impact-bottom.png';

const team = [
  '1 Software Developer (me)',
  '1 ChatGPT to generate all questions'
];


const Quiz = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="Quiz Game" 
          descript="I've always had a passion for games, particularly ones that challenge the mind and encourage learning. The app is designed to be engaging, interactive, allowing users to test their knowledge on a wide range of topics while having fun. "
          team={team}
          img={HeroImg}
          website="https://andorkadominik.github.io/Quiz/"
          />

        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">How did I have Impact?</h2>  
            <div className="points">
              <p>#1: Designed and developed the entire website independently</p>
              <p>#2: Set up a complex structure for the data</p>
              <p>#3: Came up with a challange in the game</p>
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
          <h2 className="projects-heading">From Games to Quizzes</h2>  

          <div className="numbers">
            <div className="number-container">
              <h2 className='number'>1</h2>
              <p className='explanation'>It all began with my love for games as a child.</p>
            </div>
            <div className="number-container">
              <h2 className='number'>2</h2>
              <p className='explanation'>I wanted to create a way to blend fun with learning.</p>
            </div>
            <div className="number-container">
              <h2 className='number'>3</h2>
              <p className='explanation'>That passion led to building my own quiz app.</p>
            </div>

            <div className="text-container">
              <p>From the early days of playing trivia games with friends to exploring interactive apps, my passion for games has always been rooted in the joy of challenge and discovery. I wanted to bring that same excitement to others by creating an app that was not only entertaining but also educational. The result was a quiz app designed to make learning feel like a game, with customizable topics and features to keep it engaging for everyone.</p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="Quiz App in Action" />
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Quiz