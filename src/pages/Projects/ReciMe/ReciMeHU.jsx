import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/ReciMe.png';
import Left from '../../../assets/Showcase/ReciMeTopLeft.png';
import TopRight from '../../../assets/Showcase/ReciMeTopRight.png'
import ImpactBottom from '../../../assets/Showcase/ReciMeBottom.png'
import ProofImg from "../../../assets/Showcase/ReciMeProof.jpg";
import BottomImg from '../../../assets/Shapes/impact-bottom.png';

const team = [
  '1 Szoftverfejlesztő (én)',
  '1 Barátnőm a receptekért',
];


const ReciMeHU = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="ReciMe" 
          descript='Egy felhasználóbarát recept alkalmazás, amely lehetővé teszi a receptek megosztását, inspirálva a csodálatos házi készítésű ételek iránti szeretetből.'
          team={team}
          img={HeroImg}
          website="https://andorkadominik.github.io/ReciMe/"
          />

        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">Hogyan volt hatásom?</h2>  
            <div className="points">
              <p>#1: Az egész weboldalt önállóan terveztem és fejlesztettem</p>
              <p>#2: Hatalmas mennyiségű adatot dolgoztam fel</p>
              <p>#3: Nem haltam éhen, miközben ezeket leírtam</p>
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
          <h2 className="projects-heading">Csodálatos ételei inspiráltak</h2>  
          
          <div className="numbers">
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>1</h2>
              <p className='explanation'>Az ő főzése mindig lenyűgöz.</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>2</h2>
              <p className='explanation'>Szerettem volna egy módot, hogy rendszerezzem a receptjeit.</p>
            </div>
            <div className="number-container">
              <h2 className='number' style={{ color: "#de7101"}}>3</h2>
              <p className='explanation'>Ekkor született meg a recept alkalmazás ötlete.</p>
            </div>
          
            <div className="text-container">
              <p>Minden étel, amit a barátnőm készít, egy mestermű—tele kreativitással, ízzel és szeretettel. Legyen szó egy gyors hétköznapi vacsoráról vagy egy bonyolult hétvégi finomságról, az ő ételei soha nem hagynak lenyűgözni. Szerettem volna létrehozni valamit, ami nemcsak bemutatja az ő hihetetlen főzőtudását, hanem megkönnyíti a receptjeinek megőrzését és megosztását is. Ezzel a receptalkalmazással tudtam megünnepelni tehetségét, és gondoskodni arról, hogy az ő finom alkotásai soha ne merüljenek feledésbe.</p>
            </div>

            <div className="proof">
              <img src={ProofImg} alt="Her Recipe in App" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ReciMeHU