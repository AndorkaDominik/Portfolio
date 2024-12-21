import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/EchoGPT4.png';
import Left from '../../../assets/Showcase/EchoGPTTopLeft.png';
import TopRight from '../../../assets/Showcase/EchoGPTTopRight.png'
import ImpactBottom from '../../../assets/Showcase/EchoGPTBottom.png'
import ProofImg from "../../../assets/Showcase/EchoGPTProof.jpg";
import BottomImg from '../../../assets/Shapes/impact-bottom.png';

const team = [
  '1 Szoftverfejlesztő (én)',
  '1 ChatGPT API'
];


const EchoGPTHU = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="EchoGPT" 
          descript="Az OpenAI API nagyszerű kihívásnak tűnt számomra, ezért úgy gondoltam, miért ne készítenék egy AI projektet vele."
          team={team}
          img={HeroImg}
          website="https://echo-gpt-iota.vercel.app/"
          />

        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">Hogyan volt hatásom?</h2>  
            <div className="points">
              <p>#1: Az egész weboldalt önállóan terveztem és fejlesztettem</p>
              <p>#2: Kitaláltam, hogyan kell stílust adni, ha egy kódrészlet válaszként érkezik az AI-tól</p>
              <p>#3: Megvalósítottam egy megoldást a előzmények tárolására</p>
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
          <img src={BottomImg} className='bottomImg' alt="" />
      </div>

      <div className="result">
        <div className="container">
          <h2 className="projects-heading">Az EchoGPT története</h2>  
          
          <div className="numbers">
            <div className="number-container">
              <h2 className='number'>1</h2>
              <p className='explanation'>Szerettem volna egy személyesebb chatbotot létrehozni.</p>
            </div>
            <div className="number-container">
              <h2 className='number'>2</h2>
              <p className='explanation'>Felfedeztem az OpenAI API-ját</p>
            </div>
            <div className="number-container">
              <h2 className='number'>3</h2>
              <p className='explanation'>Megépítettem az EchoGPT-t, hogy okosabb, barátságosabb beszélgetéseket hozzak létre.</p>
            </div>
          
            <div className="text-container">
              <p>Az EchoGPT egy egyszerű ötletként indult: hogy készítsek egy AI asszisztenst, amely nem csak válaszol a kérdésekre, hanem megérti és alkalmazkodik a felhasználókhoz. Az OpenAI API használatával sikerült egy olyan chatbotot építenem, amely inkább egy segítőkész társra hasonlít, így minden interakció gördülékenyebb és személyesebb lett.</p>
            </div>
            <div className="proof">
              <img src={ProofImg} alt="EchoGPT in Action" />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default EchoGPTHU