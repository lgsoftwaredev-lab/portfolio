import React, { useState, useEffect } from 'react';
import { Mail, Check, ExternalLink, Menu, X, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onCopyEmail, copied }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['inicio', 'experiencia', 'proyectos', 'simulador', 'skills', 'contacto'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#inicio" className="logo-badge" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-icon-dot"></span>
          <span>lucas.güimil()</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li>
            <a 
              href="#experiencia" 
              className={`nav-link ${activeSection === 'experiencia' ? 'active' : ''}`}
            >
              Experiencia
            </a>
          </li>
          <li>
            <a 
              href="#proyectos" 
              className={`nav-link ${activeSection === 'proyectos' ? 'active' : ''}`}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#simulador" 
              className={`nav-link ${activeSection === 'simulador' ? 'active' : ''}`}
            >
              Live Demo
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#contacto" 
              className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`}
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="nav-actions">
          <a 
            href={portfolioData.personal.contact.linkedin}
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-cta-btn"
            title="Ver perfil de LinkedIn"
          >
            <span>LinkedIn</span>
            <ExternalLink size={12} />
          </a>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(14, 14, 18, 0.98)',
          borderBottom: '1px solid var(--border-medium)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <a 
            href="#experiencia" 
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Experiencia
          </a>
          <a 
            href="#proyectos" 
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Proyectos
          </a>
          <a 
            href="#simulador" 
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Live Demo (Simulador IA)
          </a>
          <a 
            href="#skills" 
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#contacto" 
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
