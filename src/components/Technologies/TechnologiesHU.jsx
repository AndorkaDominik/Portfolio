import React from 'react'
import './Technologies.css'
import { desc } from 'framer-motion/client'
import typescriptIcon from '../../assets/Technologies/typescript.svg';
import reactIcon from '../../assets/Technologies/react.svg';
import nextjsIcon from '../../assets/Technologies/nextjs.svg';
import tailwindIcon from '../../assets/Technologies/tailwind.svg';
import gitIcon from '../../assets/Technologies/git.svg';
import java from '../../assets/Technologies/java.svg';

import figma from '../../assets/Technologies/figma.svg';
import supabaseIcon from '../../assets/Technologies/supabase.svg';
import nodejsIcon from '../../assets/Technologies/node-js.svg';
import mongodbIcon from '../../assets/Technologies/mongodb.svg';
import prismaIcon from '../../assets/Technologies/prisma.svg';
import postgresqlIcon from '../../assets/Technologies/postgresql.svg';

const TechnologiesData = [
    //{ name: 'Figma', icon: figma, iconBgColor: "rgba(10, 207, 131, .2)", description: 'Tervező eszköz' },
    { name: 'Typescript', icon: typescriptIcon, iconBgColor: "rgba(49, 120, 198, .2)", description: 'JavaScript, de jobb' },
    { name: 'React', icon: reactIcon, iconBgColor: "rgba(97, 218, 251, .2)", description: 'JavaScript könyvtár' },
    { name: 'NextJS', icon: nextjsIcon, iconBgColor: "rgba(219, 215, 215, 0.59)", description: 'React keretrendszer' },
    { name: 'Tailwind', icon: tailwindIcon, iconBgColor: "rgba(14, 165, 233, .2)", description: 'CSS keretrendszer' },
    { name: 'Git', icon: gitIcon, iconBgColor: "rgba(241, 80, 47, .2)", description: 'Verziókezelés' },
    { name: 'Java', icon: java, iconBgColor: "rgba(115, 161, 251, .2)", description: 'Kávé nyelv' },

    //{ name: 'Supabase', icon: '', iconBgColor: "rgba(62, 207, 142, .2)", description: 'Backend eszköz' },
    //{ name: 'NodeJS', icon: '', iconBgColor: "rgba(104, 159, 99, .3)", description: 'Backend' },
    //{ name: 'MongoDB', icon: '', iconBgColor: "rgba(89, 150, 54, .3)", description: 'NoSQL adatbázis' },
    //{ name: 'Prisma', icon: '', iconBgColor: "#", description: 'Prisma' },
    //{ name: 'PostgreSQL', icon: '', iconBgColor: "rgba(12, 52, 75, .2)", description: 'Relációs adatbázis rendszer' },
];

const Technologies = () => {
  return (
    <div className="technologies" id='technologies'>
        <h2 className='projects-heading'>Jelenlegi technológiák</h2>
        <p style={{paddingBottom: "1rem"}}>Számos modern technológiában vagyok jártas, amelyek lehetővé teszik számomra, így sokféle izgalmas és hasznos megoldást tudok létrehozni. Jelenleg ezekkel a technikákkal dolgozom leginkább.</p>
        <div className="technologies-list">
            {TechnologiesData.map((tech, index) => (
                <div className="technology" key={index}>
                    <div className="technology-icon" style={{ backgroundColor: tech.iconBgColor }}>
                        <img src={tech.icon} alt={tech.name} />
                    </div>
                    <div>
                        <h3>{tech.name}</h3>
                        {tech.description && <p>{tech.description}</p>}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Technologies