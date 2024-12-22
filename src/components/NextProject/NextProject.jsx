import React, { useEffect, useState } from 'react'
import "./NextProject.css"
import { Link, useLocation } from 'react-router-dom'
import Arrow from "../../assets/arrowdown.webp"

const NextProject = ({NextProjectLink}) => {
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
    
    function scrollToTop() {
        window.scrollTo({
        top: 0,
        // behavior: 'initial', 
        });
    }
    return (
        <div className='nextProject'>
            {HU ?
                <Link to={'/HU/projects/' + NextProjectLink + "/"} onClick={scrollToTop}>Következő projekt:<span>{NextProjectLink}</span> <img src={Arrow} alt="" /></Link>
                :
                <Link to={'/projects/' + NextProjectLink + "/"} onClick={scrollToTop}>Next project:<span>{NextProjectLink}</span> <img src={Arrow} alt="" /></Link>
            }
        </div>
    )
}

export default NextProject