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
      <Hero />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;