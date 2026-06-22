import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-gray-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Terminal />
        <Contact />
      </main>
    </div>
  );
}

export default App;
