import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import OutsideExp from './components/OutsideExperience';

import './App.css';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects></Projects>
      <OutsideExp></OutsideExp>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

