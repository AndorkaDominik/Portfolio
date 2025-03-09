import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/ReciMe.webp';
import Left from '../../../assets/Showcase/ReciMeTopLeft.webp';
import TopRight from '../../../assets/Showcase/ReciMeTopRight.webp'
import ImpactBottom from '../../../assets/Showcase/ReciMeBottom.webp'
import ProofImg from "../../../assets/Showcase/ReciMeProof.webp";
import BottomImg from '../../../assets/Shapes/impact-bottom.webp';
import NextProject from '../../../components/NextProject/NextProject';

const team = [
  '1 Software Developer (me)',
  '1 My Girlfriend for the recipes',
];

// Animation
import semiCircle from '../../../assets/Shapes/semicircle.png';
import { useRotation } from '../../../context/RotationContext';

const ReciMe = () => {
  const { rotation } = useRotation();

  return (
    <div className='project-container'>
        <ProjectHeader 
          title="ReciMe" 
          descript='A user-friendly recipe app to share recipes, inspired by the love of amazing home-cooked meals.'
          team={team}
          img={HeroImg}
          website="https://andorkadominik.github.io/ReciMe/"
          />

        <div className="impact">
          <div className="container">
            <img src={semiCircle} className='semicircle' alt="semicircle" id='topSemi' style={{ transform: `rotate(${rotation}deg)` }}  />
            <h2 className="projects-heading">How did I have Impact?</h2>  
            <div className="points">
              <p>#1: Designed and developed the entire website independently</p>
              <p>#2: Processed an immense amount of data</p>
              <p>#3: Not starve to death while wrote down theeseee</p>
            </div>

            <div className="images">
              <div className="left-top">
                <img draggable={false} src={Left} alt="" />
              </div>
              <div className="right-top">
                <img src={semiCircle} className='semicircle' alt="semicircle" style={{ transform: `rotate(${rotation}deg)` }} />
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
          <h2 className="projects-heading">Inspired by Her Amazing Cooking</h2>  

          <div className="numbers">
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>1</h2>
              <p className='explanation'>Her cooking always leaves me amazed.</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>2</h2>
              <p className='explanation'>I wanted a way to keep her recipes organized.</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>3</h2>
              <p className='explanation'>That’s when the idea for the recipe app was born.</p>
            </div>

            <div className="text-container">
              <p>Every meal my girlfriend prepares is a masterpiece—filled with creativity, flavor, and love. Whether it's a quick weeknight dinner or an elaborate weekend treat, her dishes never fail to impress me. I wanted to create something that not only showcased her incredible cooking skills but also made it easy to preserve and share her recipes. This recipe app became my way of celebrating her talent and ensuring her delicious creations are never forgotten.</p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="Her Recipe in App" />
            </div>
          </div>
        </div>
        <NextProject NextProjectLink={"AndorkaVILL"} />
      </div>
    </div>
  )
}

export default ReciMe