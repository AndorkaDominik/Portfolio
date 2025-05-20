import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./ProjectHeader.css"
import Click from '../../assets/click.webp'

const Project = ({title, descript, team, img, website = null, game = null}) => {

  const [HU, setHU] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/HU/")) {
      setHU(true);
    } else {
      setHU(false);
    }
  }, [location]); 
  
  // console.log(location);

  let HULink = "/HU" + location.pathname;
  let ENGLink = location.pathname.replace("/HU", "");

  // console.log(HULink);
  // console.log(ENGLink);

  return (
    <div className='project'>
      <div className="nav">
        {HU ?
        <Link to={'/HU/'} className='takeME'>Vigyél a főoldalra</Link>
        :
        <Link to={'/'} className='takeME'>Take me home</Link>
      }
        {HU ? 
        <Link to={ENGLink} className='language'>ENG</Link>
        : 
        <Link to={HULink} className='language'>HU</Link>
        }

      </div>
        
      <h2 className="projects-heading">{title}</h2>  
      <div className="description">
        <p className='main-desc'>{descript}</p>
        <div className="team">
          {HU ? <p>A csapat:</p> : <p>The team:</p>}
          <ul>
            {team.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
        <img tabIndex={-1} draggable={false} src={img} alt={title + " showcase image"} className="showcaseImg"/>

        <a href={website ? website : game} className='website' target='_blank'>
          {website? (HU ? <h1>Weboldal</h1> : <h1>Website</h1>) : ""}
          {game? (HU? <h1>Játék</h1>: <h1>Game</h1>) : ""}
          <img src={Click} alt="" />
        </a>
    </div>
  )
}

export default Project