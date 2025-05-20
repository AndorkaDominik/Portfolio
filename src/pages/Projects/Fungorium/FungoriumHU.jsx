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
  'Caffeine Coderz csapat',
  '5 szoftverfejlesztő',
  '1000 csésze kávé'
];

// Animation
import semiCircle from '../../../assets/Shapes/semicircle.png';
import { useRotation } from '../../../context/RotationContext';

const FungoriumHU = () => {
  const { rotation } = useRotation(); 

  return (
    <div className='project-container'>
        <ProjectHeader 
          title="Fungorium játék" 
          descript="Ez egy egyetemi projekt volt egy 5 fős csapat számára. A fő cél egy játék létrehozása volt tisztán Java nyelven, az Agilis fejlesztés, a Folyamatos Integráció és a Folyamatos Kiadás elveinek alkalmazásával."
          team={team}
          img={HeroImg}
          game="https://github.com/CaffeineCoderz/Fungorium"
          />

        <div className="impact">
          <div className="container">
            <img src={semiCircle} className='semicircle' alt="félkör" id='topSemi' style={{ transform: `rotate(${rotation}deg)` }}  />
            <h2 className="projects-heading">Miben volt hatásom?</h2>  
            <div className="points">
              <p>#1: A játékot az alapoktól fejlesztettem</p>
              <p>#2: A grafikus felület nagy részét egyedül találtam ki és valósítottam meg</p>
              <p>#3: Aktívan megoldottam a technikai kihívásokat</p>
            </div>

            <div className="images">
              <div className="left-top">
                <img draggable={false} src={Circles} alt="" />
              </div>
              <div className="right-top">
                <img src={semiCircle} className='semicircle' alt="félkör" style={{ transform: `rotate(${rotation}deg)` }} />
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
          <h2 className="projects-heading">Milyen eredménye lett?</h2>  
          
          <div className="numbers">
            <div className="number-container">
              <h2 className='number' style={{ color: "#73c643"}}>182,25</h2>
              <p className='explanation'>saját munkaóra</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#73c643"}}>851</h2>
              <p className='explanation'>összes commit</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#73c643"}}>207</h2>
              <p className='explanation'>összes bemergelt pull request</p>
            </div>

            <div className="text-container">
              <p>A projekt végső szakaszában már nem tudtuk mindegyik pull requestet átnézni, ez volt az egyik csapattagom visszajelzése a munkámról:</p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="" />
            </div>
          </div>

        </div>
        <NextProject NextProjectLink={"AndorkaVILL"} />
      </div>

    </div>
  )
}

export default FungoriumHU