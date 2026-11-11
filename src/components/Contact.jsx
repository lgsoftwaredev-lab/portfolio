import React, { useState } from 'react';
import { ArrowUpRight, Briefcase, Building2, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function GmailIcon({ size = 15 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" 
      width={size} 
      height={size}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="M34.9 448h81.5V250.2L0 163v250.2C0 432.5 15.7 448 34.9 448" fill="#4285f4"/>
      <path d="M395.6 448h81.5c19.3 0 34.9-15.7 34.9-34.9V163l-116.4 87.3" fill="#34a853"/>
      <path d="M395.6 99v151.3L512 163v-46.5c0-43.2-49.3-67.8-83.8-41.9" fill="#fbbc04"/>
      <path d="M116.4 250.2V99L256 203.7 395.6 99v151.3L256 355" fill="#ea4335"/>
      <path d="M0 116.4V163l116.4 87.3V99L83.8 74.5C49.2 48.6 0 73.2 0 116.4" fill="#c5221f"/>
    </svg>
  );
}

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
                  <GmailIcon size={14} />
                  <span>Gmail</span>
                  <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
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
                  <GmailIcon size={14} />
                  <span>Gmail</span>
                  <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
