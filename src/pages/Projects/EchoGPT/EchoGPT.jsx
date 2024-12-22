import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/EchoGPT.webp';
import Left from '../../../assets/Showcase/EchoGPTTopLeft.webp';
import TopRight from '../../../assets/Showcase/EchoGPTTopRight.webp'
import ImpactBottom from '../../../assets/Showcase/EchoGPTBottom.webp'
import ProofImg from "../../../assets/Showcase/EchoGPTProof.webp";
import BottomImg from '../../../assets/Shapes/impact-bottom.webp';
import NextProject from '../../../components/NextProject/NextProject';

const team = [
  '1 Software Developer (me)',
  '1 ChatGPT API'
];


const EchoGPT = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="EchoGPT" 
          descript="Openai's API seemed like a great challange for me, so I thought why not to make an AI project with it."
          team={team}
          img={HeroImg}
          website="https://echo-gpt-iota.vercel.app/"
          />

        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">How did I have Impact?</h2>  
            <div className="points">
              <p>#1: Designed and developed the entire website independently</p>
              <p>#2: Figured out how to style if a code block comes as response</p>
              <p>#3: Implemented a solution for storing history,</p>
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
          <h2 className="projects-heading">The Story of EchoGPT</h2>  

          <div className="numbers">
            <div className="number-container">
              <h2 className='number'>1</h2>
              <p className='explanation'>I wanted to create a chatbot that felt more personal.</p>
            </div>
            <div className="number-container">
              <h2 className='number'>2</h2>
              <p className='explanation'>Explored OpenAI’s API</p>
            </div>
            <div className="number-container">
              <h2 className='number'>3</h2>
              <p className='explanation'>Built EchoGPT to create smarter, friendlier conversations.</p>
            </div>

            <div className="text-container">
              <p>EchoGPT started as a simple idea: make an AI assistant that doesn’t just answer questions but understands and adapts to users. By using OpenAI’s API, I was able to build a chatbot that feels more like a helpful companion, making every interaction smoother and more personal.</p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="EchoGPT in Action" />
            </div>
          </div>
        </div>
        <NextProject NextProjectLink={"ConvertMe"} />
      </div>
    </div>
  )
}

export default EchoGPT