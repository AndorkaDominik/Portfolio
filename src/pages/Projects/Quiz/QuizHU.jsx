import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/Quiz.png';
import Left from '../../../assets/Showcase/QuizTopLeft.png';
import TopRight from '../../../assets/Showcase/QuizTopRight.png'
import ImpactBottom from '../../../assets/Showcase/QuizBottom.png'
import ProofImg from "../../../assets/Showcase/QuizProof.png";
import BottomImg from '../../../assets/Shapes/impact-bottom.png';

const team = [
  '1 Szoftverfejlesztő (én)',
  '1 ChatGPT az összes kérdés legenerálásához'
];


const QuizHU = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="Trívia Játék" 
          descript="Mindig is szenvedélyeim voltak a játékok, különösen azok, amelyek kihívást jelentenek az elmének és ösztönzik a tanulást. Az alkalmazás célja, hogy szórakoztató és interaktív legyen, lehetővé téve a felhasználók számára, hogy különböző témákban teszteljék tudásukat, miközben jól érzik magukat."
          team={team}
          img={HeroImg}
          website="https://andorkadominik.github.io/Quiz/"
          />

        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">Hogyan volt hatásom?</h2>  
            <div className="points">
              <p>#1: Az egész weboldalt önállóan terveztem és fejlesztettem</p>
              <p>#2: Komplex adatstruktúrát állítottam fel</p>
              <p>#3: Kitaláltam egy kihívást a játékban</p>
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
                    <h2 className="projects-heading">A játékoktól a kvízekig</h2>  
          
          <div className="numbers">
            <div className="number-container">
              <h2 className='number'>1</h2>
              <p className='explanation'>Minden a gyerekkori játékok iránti szeretetemből indult.</p>
            </div>
            <div className="number-container">
              <h2 className='number'>2</h2>
              <p className='explanation'>Szerettem volna egy módot találni arra, hogy a szórakozást a tanulással ötvözzem.</p>
            </div>
            <div className="number-container">
              <h2 className='number'>3</h2>
              <p className='explanation'>Ez a szenvedély vezetett a saját kvíz alkalmazásom megépítéséhez.</p>
            </div>
          
            <div className="text-container">
              <p>A barátokkal játszott korai trivia játékoktól kezdve az interaktív alkalmazások felfedezéséig, a játékok iránti szenvedélyem mindig is a kihívás és a felfedezés örömében gyökerezett. Szerettem volna ezt az izgalmat mások számára is elérhetővé tenni egy olyan alkalmazás létrehozásával, amely nemcsak szórakoztató, hanem oktató jellegű is. Az eredmény egy kvíz alkalmazás lett, amely a tanulást játékká varázsolja, testreszabható témákkal és funkciókkal, hogy mindenki számára érdekes maradjon.</p>
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

export default QuizHU