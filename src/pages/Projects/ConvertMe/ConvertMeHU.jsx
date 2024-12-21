import React from 'react'

import ProjectHeader from '../../../components/ProjectHeader/ProjectHeader'
import HeroImg from '../../../assets/Showcase/ConvertMe.png';
import Left from '../../../assets/Showcase/ConvertMeTopLeft.png';
import TopRight from '../../../assets/Showcase/ConvertMeTopRight.png'
import ImpactBottom from '../../../assets/Showcase/ConvertMeBottom.png'
import ProofImg from "../../../assets/Showcase/ConvertMeProof.jpg";
import BottomImg from '../../../assets/Shapes/impact-bottom.png';

const team = [
  '1 szoftverfejlesztő (én)',
  '1 Blob URL generátor'
];


const ConvertMeHU = () => {
  return (
    <div className='project-container'>
        <ProjectHeader 
          title="ConvertMe" 
          descript="Kifejlesztettem egy alkalmazást, amely leegyszerűsíti az AVI videofájlok MKV formátumba történő konvertálásának folyamatát, megoldva ezzel az édesapám TV-jével kapcsolatos kompatibilitási problémát. Az alkalmazás egyszerűsíti a konvertálási folyamatot, lehetővé téve számára, hogy gyorsan és könnyedén konvertálja a fájlokat néhány kattintással."
          team={team}
          img={HeroImg}
          website="https://convertme-wine.vercel.app/"
          />

        <div className="impact">
          <div className="container">
            <h2 className="projects-heading">Hogyan volt hatásom?</h2>  
            <div className="points">
              <p>#1: Meguntam, hogy bármelyik weboldalra várjak a konvertálás miatt</p>
              <p>#2: Kutattam, hogyan lehet fájlokat konvertálni React segítségével</p>
              <p>#3: Az egész weboldalt önállóan terveztem és fejlesztettem</p>
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
            <p style={{color: "#fff"}}><b>Érdekesség</b>: Valójában itt is kellett használnom, mert el kellett távolítanom az egyik kép hátterét, de az eszköz, amely átlátszóvá teszi a hátteret, nem fogadja el a <i>webp</i> formátumot, így a weboldalon kellett konvertálnom a képet <i>png</i> formátumba</p>
          </div>
          <img src={BottomImg} className='bottomImg' alt="" />
      </div>

      <div className="result">
        <div className="container">
          <h2 className="projects-heading">A ConvertMe története</h2>  
          
          <div className="numbers">
            <div className="number-container">
              <h2 className='number'>1</h2>
              <p className='explanation'>Apukám TV-je nem támogatta a videó formátumot</p>
            </div>
            <div className="number-container">
              <h2 className='number'>2</h2>
              <p className='explanation'>Megpróbáltam manuálisan konvertálni a fájlokat, de túl időigényes volt</p>
            </div>
            <div className="number-container">
              <h2 className='number'>3</h2>
              <p className='explanation'>Ezután megépítettem a ConvertMe-t – egy gyors, egyszerű módot a videó formátumok konvertálására néhány kattintással</p>
            </div>
          
            <div className="text-container">
              <p>Tehát az igazság az, hogy nem a legújabb a TV, de szükségünk volt egy megoldásra, és ez tényleg megoldotta, és érdekes egy kihívás volt.</p>
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

export default ConvertMeHU