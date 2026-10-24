import React, { useState } from 'react';
import { Mail, Check, ArrowRight, ExternalLink, Terminal, Sparkles, Shield, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onCopyEmail, copied }) {
  const [activeTab, setActiveTab] = useState('status');

  return (
    <section id="inicio" className="hero-section">

      {/* Main Headline */}
      <h1 className="hero-title">
        <span className="gradient-text">{portfolioData.personal.name}</span>
      </h1>

      <p className="hero-tagline">
        Software Developer especializado en <span className="highlight-accent">Backend</span>, <span className="highlight-accent">Sistemas Críticos</span> y <span className="highlight-accent">Agentes de IA</span>.
      </p>

      <p className="hero-description">
        {portfolioData.personal.bio[0]} {portfolioData.personal.bio[1]}
      </p>

      {/* CTA Buttons */}
      <div className="hero-buttons">
        <a href="#contacto" className="btn-primary">
          <span>Iniciar Contacto</span>
          <ArrowRight size={16} />
        </a>

        <button 
          onClick={onCopyEmail} 
          className="btn-secondary"
          title="Copiar email al portapapeles"
        >
          {copied ? (
            <>
              <Check size={16} style={{ color: 'var(--accent-emerald-light)' }} />
              <span>Email Copiado</span>
            </>
          ) : (
            <>
              <Mail size={16} />
              <span>{portfolioData.personal.contact.email}</span>
            </>
          )}
        </button>

        <a 
          href={portfolioData.personal.contact.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-secondary"
        >
          <span>LinkedIn</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Interactive Developer Terminal Widget */}
      <div className="hero-terminal">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="terminal-dot dot-red"></span>
            <span className="terminal-dot dot-yellow"></span>
            <span className="terminal-dot dot-green"></span>
          </div>
          <span>zsh — lucas@production-node: ~/portfolio</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ color: 'var(--accent-emerald-light)' }}>● Live node</span>
          </div>
        </div>

        <div className="terminal-content">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cmd">lucas.getCurrentFocus()</span>
          </div>
          <div className="terminal-output">
            → <strong style={{ color: '#fff' }}>Agentes de IA:</strong> Orquestación de flujos autónomos con Tool Calling, LangChain y LLMs.
            <br />
            → <strong style={{ color: '#fff' }}>Microservicios Críticos:</strong> Ecosistemas transaccionales de Banca & FinTech (Fondos FCI) en NestJS, Kafka y Redis.
          </div>

          <div className="terminal-line" style={{ marginTop: '4px' }}>
            <span className="terminal-prompt">$</span>
            <span className="terminal-cmd">lucas.getCoreStack()</span>
          </div>
          <div className="terminal-output" style={{ color: 'var(--accent-cyan-light)' }}>
            ["Node.js", "NestJS", "TypeScript", "Python", "Apache Kafka", "Redis", "Oracle DB", "OpenShift", "Docker"]
            <span className="terminal-cursor"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
