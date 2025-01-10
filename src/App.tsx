import React from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import Footer from './components/layout/Footer';
import CustomCursor from './components/common/CustomCursor';
import Skill from './components/Skills';
import Preview from './components/Preview';

function App() {
  return (
    <div className="bg-black">
      <CustomCursor />
      <Navigation />
      
      <section id="home" className="min-h-screen">
        <Hero />
        <Preview/>
      </section>

      <section id="about" className="min-h-screen">
        <About />
        <Skill />
      </section>

      <section id="projects" className="min-h-screen">
        <Work />
        <Skills />
      </section>

      <section id="contact" className="min-h-screen">
        <Footer />
      </section>
    </div>
  );
}

export default App;