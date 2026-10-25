import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['inicio', 'experiencia', 'proyectos', 'habilidades', 'contacto'];
      const scrollPos = window.scrollY + 180;

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
      <div className="container navbar-inner">
        {/* Brand: lucas.güimil() */}
        <a href="#top" className="nav-brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-dot"></span>
          <span className="brand-text">lucas.güimil()</span>
        </a>

        {/* Center Nav Links */}
        <ul className="nav-menu">
          <li>
            <a 
              href="#experiencia" 
              className={`nav-item-link ${activeSection === 'experiencia' ? 'active' : ''}`}
            >
              Experiencia
            </a>
          </li>
          <li>
            <a 
              href="#proyectos" 
              className={`nav-item-link ${activeSection === 'proyectos' ? 'active' : ''}`}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#habilidades" 
              className={`nav-item-link ${activeSection === 'habilidades' ? 'active' : ''}`}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a 
              href="#contacto" 
              className={`nav-item-link ${activeSection === 'contacto' ? 'active' : ''}`}
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Right CTA: LinkedIn */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a 
            href={portfolioData.personal.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-action-btn"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={14} />
          </a>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(9, 9, 11, 0.96)',
          borderBottom: '1px solid var(--border-medium)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <a href="#experiencia" className="nav-item-link" onClick={() => setMobileOpen(false)}>Experiencia</a>
          <a href="#proyectos" className="nav-item-link" onClick={() => setMobileOpen(false)}>Proyectos</a>
          <a href="#habilidades" className="nav-item-link" onClick={() => setMobileOpen(false)}>Habilidades</a>
          <a href="#contacto" className="nav-item-link" onClick={() => setMobileOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  );
}
