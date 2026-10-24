import React, { useState } from 'react';
import { Mail, Send, Check, ExternalLink, MessageSquare, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onCopyEmail, copied }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#06b6d4', '#ffffff']
      });
    } catch (err) {
      // ignore
    }

    // Open mailto with prefilled content
    const subject = encodeURIComponent(`Contacto desde Portfolio — ${formData.name}`);
    const body = encodeURIComponent(`Hola Lucas,\n\nSoy ${formData.name} (${formData.email}).\n\nMensaje:\n${formData.message}`);
    window.open(`mailto:${portfolioData.personal.contact.email}?subject=${subject}&body=${body}`, '_blank');

    setFormSent(true);
  };

  return (
    <section id="contacto" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '60px' }}>
      <div className="section-header">
        <div className="section-tag">
          <MessageSquare size={14} />
          <span>Contacto Directo</span>
        </div>
        <h2 className="section-title">Hablemos de Nuevos Desafíos</h2>
        <p className="section-desc">
          ¿Tienes una propuesta técnica, un proyecto con agentes de Inteligencia Artificial o una arquitectura de microservicios crítica por construir?
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Card */}
        <div className="contact-info-card">
          <div>
            <p className="contact-intro">
              Escríbeme directamente para conversar sobre oportunidades laborales, consultoría backend o implementaciones de LLMs en producción.
            </p>

            <div className="contact-channels">
              {/* Email channel item */}
              <div 
                className="contact-channel-item"
                style={{ cursor: 'pointer' }}
                onClick={onCopyEmail}
              >
                <div className="channel-left">
                  <div className="category-icon" style={{ width: '32px', height: '32px' }}>
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="channel-label">Email Principal</div>
                    <div className="channel-value">{portfolioData.personal.contact.email}</div>
                  </div>
                </div>
                <button 
                  style={{ background: 'transparent', border: 'none', color: copied ? 'var(--accent-emerald-light)' : 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem' }}
                >
                  {copied ? <Check size={14} /> : 'Copiar'}
                </button>
              </div>

              {/* LinkedIn channel item */}
              <a 
                href={portfolioData.personal.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-channel-item"
              >
                <div className="channel-left">
                  <div className="category-icon" style={{ width: '32px', height: '32px' }}>
                    <ExternalLink size={16} />
                  </div>
                  <div>
                    <div className="channel-label">Red Profesional</div>
                    <div className="channel-value">LinkedIn Profile</div>
                  </div>
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>↗</span>
              </a>

              {/* Location channel item */}
              <div className="contact-channel-item">
                <div className="channel-left">
                  <div className="category-icon" style={{ width: '32px', height: '32px' }}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="channel-label">Ubicación & Modalidad</div>
                    <div className="channel-value">{portfolioData.personal.status.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
            ⚡ Tiempo promedio de respuesta: Menos de 24 horas hábiles.
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-form-card">
          {formSent ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ display: 'inline-flex', padding: '16px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', color: 'var(--accent-emerald-light)', marginBottom: '16px' }}>
                <Check size={36} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '8px' }}>¡Mensaje Preparado!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Se ha generado el correo en tu cliente predeterminado hacia <strong>{portfolioData.personal.contact.email}</strong>.
              </p>
              <button 
                onClick={() => setFormSent(false)} 
                className="btn-secondary"
                style={{ margin: '0 auto' }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Tu Nombre o Empresa</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej: Tech Recruiter / Product Lead"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Tu Correo Electrónico</label>
                <input 
                  type="email" 
                  required
                  placeholder="tu.email@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Detalles del Mensaje o Proyecto</label>
                <textarea 
                  required
                  placeholder="Cuéntame sobre el rol, requerimientos del backend o ideas con agentes de IA..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="submit-btn">
                <span>Enviar Mensaje</span>
                <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
