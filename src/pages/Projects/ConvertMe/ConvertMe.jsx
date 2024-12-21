import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/ConvertMe.webp';
import Left from '../../../assets/Showcase/ConvertMeTopLeft.webp';
import TopRight from '../../../assets/Showcase/ConvertMeTopRight.webp'
import ImpactBottom from '../../../assets/Showcase/ConvertMeBottom.webp'
import ProofImg from "../../../assets/Showcase/ConvertMeProof.webp";
import BottomImg from '../../../assets/Shapes/impact-bottom.webp';

const team = [
  '1 Software Developer (me)',
  '1 Blob URL generator'
];


const ConvertMe = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="ConvertMe" 
          descript="I developed an application to streamline the process of converting AVI video files to MKV format, addressing the compatibility issue with my dad's TV. The app simplifies the conversion process, allowing him to quickly and easily convert files with just a few clicks."
          team={team}
          img={HeroImg}
          website="https://convertme-wine.vercel.app/"
          />

        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">How did I have Impact?</h2>  
            <div className="points">
              <p>#1: Also, I got tired of waiting for any website to make the conversion</p>
              <p>#2: Researched how to convert files with react</p>
              <p>#3: Designed and developed the entire website independently</p>
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
            <p style={{color: "#fff"}}><b>Funfact</b>: I had to use it here actually, cos I had to remove a background of an asset, but the tool which makes the background transparent won't accept <i>webp</i> format, so I had to convert the img on the website to <i>png</i></p>            

          </div>
          <div className="bottomImg-container">
            <img src={BottomImg} className='bottomImg' alt="" />
          </div>      </div>

      <div className="result">
        <div className="container">
          <h2 className="projects-heading">The ConvertMe Journey</h2>  

          <div className="numbers">
            <div className="number-container">
              <h2 className='number'>1</h2>
              <p className='explanation'>Dad’s TV didn’t support the video format.</p>
            </div>
            <div className="number-container">
              <h2 className='number'>2</h2>
              <p className='explanation'>I tried converting the files manually but it was too time-consuming.</p>
            </div>
            <div className="number-container">
              <h2 className='number'>3</h2>
              <p className='explanation'>Then I built ConvertMe – a quick, easy way to convert video formats with just a few clicks.</p>
            </div>

            <div className="text-container">
              <p>So the fact is, it is not the newest TV, but we needed a solution and it actually solves it, and it was a good challange.</p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="ConvertMe App in Action" />
              </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default ConvertMe