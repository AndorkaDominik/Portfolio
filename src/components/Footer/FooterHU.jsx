// src/components/Footer/Footer.js
import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';


const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
    }

  const [HU, setHU] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/HU/")) {
      setHU(true);
    } else {
      setHU(false);
    }
  }, [location]); 
  
  console.log(location);

  let HULink = "/HU" + location.pathname;
  let ENGLink = location.pathname.replace("/HU", "");

  console.log("HULink: " + HULink);
  console.log("ENGLink: " + ENGLink);
 

  return (
    <footer className="footer">
      <div className="container">
        <div className="socials">
          <p>Keress meg bátran:</p>

          <div className="links">
            <a href="https://www.linkedin.com/in/dominik-andorka/">➔ LinkedIn</a>
            <a href="https://github.com/AndorkaDominik">➔ Github</a>
            <a href="https://www.facebook.com/profile.php?id=100009884675673">➔ Facebook</a>
            <a href="mailto:dominik.andorka@gmail.com">➔ Email</a>
          </div>
        </div>

        <div className="unmentioned">
          <p>Emlegetett készségek:</p> 
          <div className="skills"> 
            <p>Étel lángra lobbantása: <span>Középszint</span></p> 
            <p>Cappuccino helytelen írása: <span>Mester</span></p> 
            <p>Egész csomag Doritos eltüntetés: <span>Mester</span></p> 
            <p>Béna tánc: <span>Minden nap fejlődöm</span></p> </div>
        </div>


        <div className="lang">
          <p className='built'>Készült <span>szeretettel</span> őrülettel a szabadidőmben</p>
          <div className="select-lang">
            {HU ? 
              <Link to={ENGLink}>ENG</Link>
              : 
              <Link to={HULink}>HU</Link>
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
