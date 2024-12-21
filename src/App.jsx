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

// HU
import AndorkaVILLHU from './pages/Projects/AndorkaVILL/AndorkaVILLHU.jsx';
import LearnJavaHU from './pages/Projects/LearnJava/LearnJavaHU.jsx';
import ConvertMeHU from './pages/Projects/ConvertMe/ConvertMeHU.jsx';
import ReciMeHU from './pages/Projects/ReciMe/ReciMeHU.jsx';
import QuizHU from './pages/Projects/Quiz/QuizHU.jsx';
import EchoGPTHU from './pages/Projects/EchoGPT/EchoGPTHU.jsx';

function App() {
  const [HU, setHU] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/HU/")) {
      setHU(true);
    } else {
      setHU(false);
    }
  }, [location]); 
  
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

          {/* HU */}
          <Route path='/HU/projects/AndorkaVILL/' element={<AndorkaVILLHU />} />
          <Route path='/HU/projects/LearnJava/' element={<LearnJavaHU />} />
          <Route path='/HU/projects/ConvertMe/' element={<ConvertMeHU />} />
          <Route path='/HU/projects/ReciMe/' element={<ReciMeHU />} />
          <Route path='/HU/projects/Quiz/' element={<QuizHU />} />
          <Route path='/HU/projects/EchoGPT/' element={<EchoGPTHU />} />
          <Route path='/HU/projects/ConvertMe/' element={<ConvertMeHU />} />

      </Routes>
      {HU ? <FooterHU /> : <Footer />}
    </>
  )
}

export default App
