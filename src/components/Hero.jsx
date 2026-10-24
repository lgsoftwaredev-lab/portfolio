import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { name, lastName, role, headline, quickFacts, contact } = portfolioData.personal;

  return (
    <section id="top" className="hero-section">
      <div className="container hero-main">
        {/* Giant Centered Title */}
        <h1 className="hero-title">
          {name}<br />
          {lastName}
        </h1>

        {/* Subtitle */}
        <span className="hero-subtitle">
          {role}
        </span>

        {/* Value Proposition */}
        <p className="hero-headline">
          Desarrollo sistemas backend <strong>de alta criticidad</strong> y productos con <strong>agentes de Inteligencia Artificial</strong> — desde la arquitectura distribuida hasta la ejecución en producción.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a 
            href={`mailto:${contact.email}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-brand-solid"
          >
            <span>Iniciar Contacto</span>
            <ArrowUpRight size={16} />
          </a>

          <a 
            href={contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* The Horizon Glow Curve & Quick Facts */}
        <div className="horizon-container">
          <div aria-hidden="true" className="horizon-glow-layer">
            <div className="hero-horizon">
              <div className="horizon-ambient-top"></div>
              <div className="horizon-ambient-bottom"></div>
              <div className="horizon-arc-line"></div>
            </div>
          </div>

          {/* 2 Quick Facts */}
          <dl className="quick-facts-grid">
            <div className="fact-item">
              <dt className="fact-label">{quickFacts.now.label}</dt>
              <dd className="fact-val">{quickFacts.now.value}</dd>
            </div>
            <div className="fact-item">
              <dt className="fact-label">{quickFacts.base.label}</dt>
              <dd className="fact-val">{quickFacts.base.value}</dd>
            </div>
          </dl>
        </div>

        {/* Scroll Indicator */}
        <a href="#experiencia" aria-label="Ver experiencia" className="hero-scroll-btn">
          <span>Scroll</span>
          <ChevronDown size={14} className="bounce-arrow" />
        </a>
      </div>
    </section>
  );
}
