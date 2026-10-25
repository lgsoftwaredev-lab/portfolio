import React from 'react';
import { ArrowUpRight, ChevronDown, Briefcase, Cpu, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { fullName, role, contact } = portfolioData.personal;

  return (
    <section id="top" className="hero-section">
      <div className="container hero-content">
        {/* Role Pill Badge */}
        <div className="hero-role-pill">
          <span className="status-dot"></span>
          <span>{role}</span>
        </div>

        {/* Main Name (Single Line, Modern & Crisp) */}
        <h1 className="hero-name">
          {fullName}
        </h1>

        {/* Value Proposition */}
        <p className="hero-headline">
          Desarrollo sistemas backend <strong>de alta criticidad</strong> y productos <strong>integrados con agentes de Inteligencia Artificial</strong> — desde la arquitectura distribuida hasta la ejecución en producción.
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

        {/* Bento Quick Highlights Card (Replaces the horizon arc) */}
        <div className="hero-bento-card">
          <div className="bento-fact-col">
            <div className="bento-label-row">
              <Briefcase size={13} className="text-emerald" />
              <span className="bento-label">AHORA</span>
            </div>
            <div className="bento-value">Consultoría Global</div>
            <div className="bento-sub">Full Stack Developer</div>
          </div>

          <div className="bento-divider"></div>

          <div className="bento-fact-col">
            <div className="bento-label-row">
              <Cpu size={13} className="text-emerald" />
              <span className="bento-label">ENFOQUE</span>
            </div>
            <div className="bento-value">Sistemas Críticos & IA</div>
            <div className="bento-sub">Microservicios y Agentes</div>
          </div>

          <div className="bento-divider"></div>

          <div className="bento-fact-col">
            <div className="bento-label-row">
              <MapPin size={13} className="text-emerald" />
              <span className="bento-label">UBICACIÓN</span>
            </div>
            <div className="bento-value">Buenos Aires</div>
            <div className="bento-sub">Remoto o híbrido</div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <a href="#experiencia" aria-label="Ver experiencia" className="hero-scroll-link">
          <span>EXPLORAR EXPERIENCIA</span>
          <ChevronDown size={14} className="bounce-arrow" />
        </a>
      </div>
    </section>
  );
}
