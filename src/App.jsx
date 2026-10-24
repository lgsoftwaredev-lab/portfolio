import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AgentSimulator from './components/AgentSimulator';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import { Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.contact.email);
    setCopied(true);
    setShowToast(true);

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.9 },
        colors: ['#10b981', '#34d399', '#ffffff']
      });
    } catch (err) {
      // ignore
    }

    setTimeout(() => {
      setCopied(false);
    }, 2500);

    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  return (
    <div className="app-container">
      {/* Background Ambient Glows & Grid */}
      <div className="ambient-bg">
        <div className="ambient-glow-1"></div>
        <div className="ambient-glow-2"></div>
        <div className="ambient-glow-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Navigation Bar */}
      <Navbar onCopyEmail={handleCopyEmail} copied={copied} />

      {/* Main Content Area */}
      <main className="main-content">
        <Hero onCopyEmail={handleCopyEmail} copied={copied} />
        <Stats />
        <Experience />
        <Projects />
        <AgentSimulator />
        <Skills />
        <Contact onCopyEmail={handleCopyEmail} copied={copied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notice">
          <Check size={18} style={{ color: 'var(--accent-emerald-light)' }} />
          <span>¡Email copiado al portapapeles! ({portfolioData.personal.contact.email})</span>
        </div>
      )}
    </div>
  );
}
