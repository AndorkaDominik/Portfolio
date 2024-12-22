import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/LearnJava.webp';
import Left from '../../../assets/Showcase/LearnJavaTopLeft.webp';
import TopRight from '../../../assets/Showcase/LearnJavaTopRight.webp'
import ImpactBottom from '../../../assets/Showcase/LearnJavaBottom.webp'
import ProofImg from "../../../assets/Showcase/LearnJavaProof.webp";
import BottomImg from '../../../assets/Shapes/impact-bottom.webp';
import NextProject from '../../../components/NextProject/NextProject';

const team = [
  '1 Szoftverfejlesztő (én)',
  '1 ChatGPT a kurzus elkészítéséhez'
];


const LearnJavaHU = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="LearnJava tanulási felület" 
          descript='Az egyetemen volt egy tantárgyam, amelynek címe "Programozás alapjai 3", ahol gyakorlatilag magtanultunk Java-ban programozni, ezért úgy döntöttem, hogy létrehozok egy tanulási felületet az tanulótársaim számára.'
          team={team}
          img={HeroImg}
          website="https://andorkadominik.github.io/LearnJava/"
          />

        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">Hogyan volt hatásom?</h2>  
            <div className="points">
              <p>#1: Az egész weboldalt önállóan terveztem és fejlesztettem</p>
              <p>#2: Hatalmas mennyiségű adatot dolgoztam fel</p>
              <p>#3: Megoldottam nehéz kihívásokat, például a kód színezését, a nyomon követés mentését stb.</p>
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
                    <h2 className="projects-heading">Színes kihívás</h2>  
                    
          <div className="numbers">
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>1</h2>
              <p className='explanation'>Arra gondoltam, hogy magam színezem ki</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>2</h2>
              <p className='explanation'>Kerestem egy megoldást</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>3</h2>
              <p className='explanation'>Felfedeztem a <b>react-syntax-highlighter</b> könyvtárat</p>
            </div>
          
            <div className="text-container">
              <p>A probléma egyszerű, de jelentős volt: az alapértelmezett kódstílus nem biztosította azt a szintaxis kiemelést, amely megkönnyíti a kód olvasását és megértését.</p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="" />
            </div>
          </div>

        </div>
        <NextProject NextProjectLink={"EchoGPT"} />
      </div>
    </div>
  )
}

export default LearnJavaHU