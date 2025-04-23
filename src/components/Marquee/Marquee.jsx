import { motion } from 'framer-motion';

import typescript from '../../assets/Marquee/typescript.png';
import tailwindcss from '../../assets/Marquee/tailwindcss.png';
import java from '../../assets/Marquee/java.png';
import react from '../../assets/Marquee/react.png';
import csharp from '../../assets/Marquee/csharp.png';
import "./Marquee.css";

const logos = [
  { src: typescript, alt: "Acme Logo" },
  { src: tailwindcss, alt: "Quantum Logo" },
  { src: java, alt: "Echo Logo" },
  { src: react, alt: "Celestial Logo" },
  { src: csharp, alt: "Apex Logo" },
  { src: csharp, alt: "Apex Logo" },
];

const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-container">
        <motion.div
          className="marquee-track"
          animate={{ translateX: '-165%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="marquee-image"
              draggable={false}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;