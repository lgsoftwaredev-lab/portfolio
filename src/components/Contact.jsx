import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, linkedin, github } = portfolioData.personal.contact;

  return (
    <section id="contacto" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-idx-header">
          <div className="section-idx-line">
            <span className="idx-number">04</span>
            <span className="idx-rule"></span>
          </div>
          <h2 className="section-main-title">Contacto</h2>
        </div>

        <div className="contact-section-inner">
          <h3 className="contact-big-title">
            ¿Hablamos de tu próximo desafío?
          </h3>
          <p className="contact-text">
            Estoy disponible para roles de ingeniería backend de alta criticidad, ecosistemas transaccionales y productos impulsados por agentes de Inteligencia Artificial.
          </p>

          <a 
            href={`mailto:${email}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-direct-btn"
          >
            <span>{email}</span>
            <ArrowUpRight size={17} />
          </a>

          <div className="contact-social-row">
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={13} />
            </a>
            <span style={{ color: 'var(--border-strong)' }}>·</span>
            <span style={{ color: 'var(--fg-subtle)', fontSize: '0.85rem' }}>
              {portfolioData.personal.quickFacts.base.value}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
