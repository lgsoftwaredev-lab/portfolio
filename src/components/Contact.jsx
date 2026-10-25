import React from 'react';
import { ArrowUpRight, Briefcase, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { emailFreelance, emailLaboral, email } = portfolioData.personal.contact;
  const freelanceEmail = emailFreelance || "lgsoftwaredev@gmail.com";
  const laboralEmail = emailLaboral || email || "lucasfguimil00@gmail.com";

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
              <a 
                href={`mailto:${freelanceEmail}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card-btn"
              >
                <span className="contact-card-email">{freelanceEmail}</span>
                <ArrowUpRight size={16} />
              </a>
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
              <a 
                href={`mailto:${laboralEmail}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card-btn"
              >
                <span className="contact-card-email">{laboralEmail}</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
