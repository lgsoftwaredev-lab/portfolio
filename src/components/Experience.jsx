import React from 'react';
import { Briefcase, CheckCircle2, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experiencia" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Briefcase size={14} />
          <span>Trayectoria Profesional</span>
        </div>
        <h2 className="section-title">Experiencia en Producción Crítica</h2>
        <p className="section-desc">
          Historial de ingeniería en entornos bancarios de alta exigencia, microservicios transaccionales e investigación aplicada en agentes de IA.
        </p>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        {portfolioData.experiences.map((exp) => (
          <div 
            key={exp.id} 
            className={`timeline-item ${exp.isCurrent ? 'active' : ''}`}
          >
            <div className="timeline-node"></div>

            <div className="timeline-card">
              <div className="timeline-meta">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={14} style={{ color: 'var(--accent-emerald-light)' }} />
                  <span className="timeline-period">{exp.period}</span>
                </div>
                {exp.isCurrent && (
                  <span className="timeline-badge">Rol Actual</span>
                )}
              </div>

              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-company">
                {exp.company} — <span style={{ color: '#fff' }}>{exp.client}</span>
              </div>

              <p className="timeline-desc">{exp.description}</p>

              {/* Achievements */}
              <ul className="timeline-achievements">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="timeline-achievement-item">
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack tags */}
              <div className="project-tags">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
