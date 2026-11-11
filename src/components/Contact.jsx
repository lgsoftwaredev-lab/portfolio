import React, { useState } from 'react';
import { ArrowUpRight, Briefcase, Building2, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { emailFreelance, emailLaboral, email } = portfolioData.personal.contact;
  const freelanceEmail = emailFreelance || "lgsoftwaredev@gmail.com";
  const laboralEmail = emailLaboral || email || "lucasfguimil00@gmail.com";

  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (emailText, key) => {
    navigator.clipboard.writeText(emailText);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((curr) => (curr === key ? null : curr));
    }, 2500);
  };

  const getGmailComposeUrl = (targetEmail, subject = '') => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}${subject ? `&su=${encodeURIComponent(subject)}` : ''}`;
  };

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
            Desafíos y propuestas
          </h3>

          {/* 2 Contact Cards */}
          <div className="contact-cards-grid">
            {/* Card 1: Freelance */}
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon-wrap freelance">
                  <Briefcase size={20} />
                </div>
              </div>
              <h4 className="contact-card-title">Contacto freelance</h4>
              <p className="contact-card-desc">
                Desarrollo a medida, MVPs, Consultoría Técnica.
              </p>

              <div className="contact-actions-wrap">
                <button 
                  type="button"
                  onClick={() => handleCopy(freelanceEmail, 'freelance')}
                  className={`contact-copy-btn ${copiedKey === 'freelance' ? 'copied' : ''}`}
                  title="Click para copiar email"
                  aria-label="Copiar email de proyectos freelance"
                >
                  <span className="contact-card-email">
                    {copiedKey === 'freelance' ? '¡Copiado al portapapeles!' : freelanceEmail}
                  </span>
                  {copiedKey === 'freelance' ? (
                    <Check size={15} style={{ color: 'var(--brand-light)', flexShrink: 0 }} />
                  ) : (
                    <Copy size={14} style={{ opacity: 0.7, flexShrink: 0 }} />
                  )}
                </button>

                <a 
                  href={getGmailComposeUrl(freelanceEmail, 'Consulta sobre proyecto freelance')}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-gmail-btn"
                  title="Abrir en Gmail Web"
                >
                  <span>Gmail</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Card 2: Propuestas Laborales */}
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon-wrap laboral">
                  <Building2 size={20} />
                </div>
              </div>
              <h4 className="contact-card-title">Contacto por propuestas laborales</h4>
              <p className="contact-card-desc">
                Siempre abierto a conectar y evaluar nuevos desafíos profesionales.
              </p>

              <div className="contact-actions-wrap">
                <button 
                  type="button"
                  onClick={() => handleCopy(laboralEmail, 'laboral')}
                  className={`contact-copy-btn ${copiedKey === 'laboral' ? 'copied' : ''}`}
                  title="Click para copiar email"
                  aria-label="Copiar email para propuestas laborales"
                >
                  <span className="contact-card-email">
                    {copiedKey === 'laboral' ? '¡Copiado al portapapeles!' : laboralEmail}
                  </span>
                  {copiedKey === 'laboral' ? (
                    <Check size={15} style={{ color: 'var(--brand-light)', flexShrink: 0 }} />
                  ) : (
                    <Copy size={14} style={{ opacity: 0.7, flexShrink: 0 }} />
                  )}
                </button>

                <a 
                  href={getGmailComposeUrl(laboralEmail, 'Contacto por propuesta laboral')}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-gmail-btn"
                  title="Abrir en Gmail Web"
                >
                  <span>Gmail</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
