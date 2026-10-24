import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Ambient Radial Lighting & Subtle Grid Pattern */}
      <div className="global-bg-radial" aria-hidden="true"></div>
      <div className="global-grid-pattern" aria-hidden="true"></div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
