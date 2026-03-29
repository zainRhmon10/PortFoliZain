// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import AboutMe from "./Component/AboutMe";
import { BackgroundDecorations } from "./Component/Background";
import { Certifications } from "./Component/Certification";
import { Contact } from "./Component/Contact";
import Home from "./Component/Home";
import Navbar from "./Component/NavBar";
import { Projects } from "./Component/Projects";
import { Skills } from "./Component/Skills";

function App() {
  return (
    <div className="size-full relative">
      <BackgroundDecorations />
      <div className="relative z-10">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

export default App;
