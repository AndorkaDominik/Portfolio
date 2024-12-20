import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectHeader.css"
import Click from '../../assets/Click.png'

const Project = ({title, descript, team, img, website}) => {
  return (
    <div className='project'>
      <Link to={'/'} className='takeME'>Take me home</Link>  
      <h2 className="projects-heading">{title}</h2>  
      <div className="description">
        <p className='main-desc'>{descript}</p>
        <div className="team">
          <p>The team:</p>
          <ul>
            {team.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
        <img draggable={false} src={img} alt={title + " showcase image"} className="showcaseImg"/>

        <a href={website} className='website'>
          <h1>Website</h1>
          <img src={Click} alt="" />
        </a>
    </div>
  )
}

export default Project