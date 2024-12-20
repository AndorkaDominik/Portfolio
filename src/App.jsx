import React, { useEffect, useState } from 'react'

//pages
import Home from './pages/Home/Home.jsx';
import HomeHU from './pages/Home/HomeHU.jsx';

import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx';
import FooterHU from './components/Footer/FooterHU.jsx';
import AndorkaVILL from './pages/Projects/AndorkaVILL/AndorkaVILL.jsx';
import LearnJava from './pages/Projects/LearnJava/LearnJava.jsx';
import ConvertMe from './pages/Projects/ConvertMe/ConvertMe.jsx';
import Quiz from './pages/Projects/Quiz/Quiz.jsx';
import ReciMe from './pages/Projects/ReciMe/ReciMe.jsx';
import EchoGPT from './pages/Projects/EchoGPT/EchoGPT.jsx';

const CheckPath = () => {
  const location = useLocation();
  const [isHungarian, setIsHungarian] = useState(false);

  useEffect(() => {
    if (location.pathname === '/HU/') {
      setIsHungarian(true);
    } else {
      setIsHungarian(false);
    }
  }, [location]);

  return isHungarian;
};

function App() {

  return (
    <>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/HU/' element={<HomeHU />} />

          <Route path='/projects/AndorkaVILL/' element={<AndorkaVILL />} />
          <Route path='/projects/LearnJava/' element={<LearnJava />} />
          <Route path='/projects/ConvertMe/' element={<ConvertMe />} />
          <Route path='/projects/Quiz/' element={<Quiz />} />
          <Route path='/projects/ReciMe/' element={<ReciMe />} />
          <Route path='/projects/EchoGPT/' element={<EchoGPT />} />
      </Routes>
      {CheckPath() ? <FooterHU /> : <Footer />}
    </>
  )
}

export default App
