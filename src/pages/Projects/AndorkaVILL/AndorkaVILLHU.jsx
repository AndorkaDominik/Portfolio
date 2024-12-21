import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/AndorkaVill.png';
import Circles from '../../../assets/Shapes/circlesYellow.png';
import ImpactBottom from '../../../assets/Showcase/ImpactBottomAndorkaVILL.png'
import ImpactTopRight from '../../../assets/Showcase/ImpactTopRightAndorkaVILL.png'
import ProofImg from "../../../assets/Showcase/AndorkaVillEmailjs.png";
import BottomImg from '../../../assets/Shapes/impact-bottom.png';

const team = [
  '1 Szoftverfejlesztő',
  '1 Erősáramú elektrotechnikus',
  '1 Hűtő-, és Légtechnikai Rendszerszerelő',
];

const AndorkaVILLHU = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="Andorka-Vill kft. landing page" 
          descript="Az Andorka-Vill Kft. számára egy felhasználóbarát és reszponzív landing page-t fejlesztettem, amely a cég szolgáltatásait és szakértelmét mutatja be az elektromos ipar területén."
          team={team}
          img={HeroImg}
          website="https://andorkavk.hu/"
          />


        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">Hogyan volt hatásom?</h2>  
            <div className="points">
              <p>#1: Teljes mértékben én terveztem és fejlesztettem a weboldalt</p>
              <p>#2: Aktívan oldottam meg technikai kihívásokat</p>
              <p>#3: Kapcsolatban voltam az ügyfelekkel, hogy összegyűjtsem az igényeiket és személyre szabott megoldásokat biztosítsak számukra</p>
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
          <h2 className="projects-heading">Hogyan teljesített?</h2>  
          
          <div className="numbers">
            <div className="number-container">
              <h2 className='number'>1100%</h2>
              <p className='explanation'>5 csillagos visszajelzés feljebb ment</p>
            </div>
            <div className="number-container">
              <h2 className='number'>+5</h2>
              <p className='explanation'>Új ügyfelek naponta</p>
            </div>
            <div className="number-container">
              <h2 className='number'>+50</h2>
              <p className='explanation'>Új kattintók naponta</p>
            </div>

            <div className="text-container">
              <p>A grafikonon bemutatott adatok világosan egy siker történetét mutatnak a cég számára, mivel jelentős számú ügyfél nyújtott be árajánlatkérést a szolgáltatásaikra.</p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="" />
              <p>A grafikon <a href="https://www.emailjs.com/">emailjs</a>-ről van.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default AndorkaVILLHU