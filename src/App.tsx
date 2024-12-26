import React from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import Footer from './components/layout/Footer';
import CustomCursor from './components/common/CustomCursor';

function App() {
  return (
    <div className="bg-black">
      <CustomCursor />
      <Navigation />
      
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="projects" className="min-h-screen">
        <Skills />
        <Work />
      </section>

      <section id="contact" className="min-h-screen">
        <Footer />
      </section>
    </div>
  );
}

export default App;