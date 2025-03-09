import React, { createContext, useState, useEffect, useContext } from "react";

const RotationContext = createContext();

export const RotationProvider = ({ children }) => {
  const [rotation, setRotation] = useState(190);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newRotation = scrollTop * 0.04;
      setRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <RotationContext.Provider value={{ rotation }}>
      {children}
    </RotationContext.Provider>
  );
};

export const useRotation = () => useContext(RotationContext);
