import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Briefcase, Building2, ArrowUpRight, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [category, setCategory] = useState('freelance'); // 'freelance' | 'laboral'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          type: category
        })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus('success');
        try {
          confetti({
            particleCount: 75,
            spread: 65,
            origin: { y: 0.65 }
          });
        } catch {
          // ignore confetti if canvas unsupported
        }
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Ocurrió un error al enviar el mensaje. Por favor intentá de nuevo.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('No se pudo establecer conexión. Por favor intentá nuevamente o contactame por LinkedIn.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      botcheck: ''
    });
    setStatus('idle');
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
          <div className="contact-header-text">
            <h3 className="contact-big-title">
              Desafíos y propuestas
            </h3>
            <p className="contact-subtitle-safe">
              Escribime directamente mediante el formulario. Tu mensaje viaja cifrado de punto a punto según buenas prácticas de seguridad (ISO/IEC 27001) y privacidad de datos (ISO/IEC 27701), sin exponer casillas de correo a bots ni scrapers.
            </p>
          </div>

          <div className="contact-form-card">
            {/* Category Selector Tabs */}
            <div className="contact-type-selector" role="tablist" aria-label="Tipo de contacto">
              <button
                type="button"
                role="tab"
                aria-selected={category === 'freelance'}
                onClick={() => setCategory('freelance')}
                className={`contact-type-btn ${category === 'freelance' ? 'active' : ''}`}
              >
                <Briefcase size={16} />
                <span>Contacto freelance</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={category === 'laboral'}
                onClick={() => setCategory('laboral')}
                className={`contact-type-btn ${category === 'laboral' ? 'active' : ''}`}
              >
                <Building2 size={16} />
                <span>Propuesta laboral</span>
              </button>
            </div>

            {/* Category Context Banner */}
            <div className="contact-category-info">
              <span className="category-info-dot"></span>
              <span>
                {category === 'freelance' 
                  ? 'Desarrollo a medida, MVPs, integraciones con agentes de IA y consultoría técnica de arquitectura.'
                  : 'Nuevas oportunidades de ingeniería, posiciones backend / full stack y proyectos de alta criticidad.'}
              </span>
            </div>

            {status === 'success' ? (
              /* Success State */
              <div className="contact-success-state">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={44} className="text-emerald" />
                </div>
                <h4 className="success-title">¡Mensaje enviado con éxito!</h4>
                <p className="success-desc">
                  Muchas gracias por escribirme, <strong>{formData.name}</strong>. El mensaje fue entregado de manera segura en mi casilla y te responderé a <strong>{formData.email}</strong> a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-outline"
                  style={{ marginTop: '16px' }}
                >
                  <span>Enviar otro mensaje</span>
                </button>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Honeypot field (hidden from humans, catches bots) */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                />

                <div className="form-grid-two">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Tu nombre o empresa <span className="text-required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      autoComplete="name"
                      placeholder="Ej. Roberto Gómez o Tech Solutions"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Tu email de respuesta <span className="text-required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      maxLength={150}
                      autoComplete="email"
                      placeholder="tu-correo@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Asunto o contexto <span className="label-optional">(opcional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    maxLength={150}
                    placeholder={category === 'freelance' ? 'Ej. Presupuesto MVP o Integración de IA' : 'Ej. Oportunidad Backend / Full Stack Developer'}
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Mensaje o propuesta <span className="text-required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={4}
                    placeholder={category === 'freelance' 
                      ? 'Contame sobre tu idea, objetivos del proyecto, plazos estimados o stack técnico deseado...'
                      : 'Contame sobre el rol, los desafíos técnicos del equipo, modalidad y propuesta...'}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error-banner" role="alert">
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="form-footer-row">
                  <div className="form-privacy-note">
                    <ShieldCheck size={16} className="text-emerald" style={{ flexShrink: 0 }} />
                    <span>Cifrado TLS 1.3 · Minimización de datos (ISO 27701) · Tus datos jamás se comparten con terceros.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-brand-solid contact-submit-btn"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="spinner-icon" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Mensaje</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Social Alternative */}
          <div className="contact-social-row">
            <span style={{ fontSize: '0.86rem', color: 'var(--fg-muted)' }}>¿Preferís conectar por red profesional?</span>
            <a 
              href={portfolioData.personal.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              style={{ color: '#ffffff' }}
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
