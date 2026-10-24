import React, { useEffect } from 'react';
import { X, Check, ExternalLink, Activity, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={18} />
        </button>

        <div className="modal-image-wrap">
          <img 
            src={project.image} 
            alt={project.title} 
            className="modal-image" 
          />
        </div>

        <div className="modal-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="project-category-badge">
              {project.category.toUpperCase()}
            </span>
          </div>

          <h3>{project.title}</h3>
          <p className="modal-subtitle">{project.subtitle}</p>

          <p className="modal-desc">{project.description}</p>

          {/* Key Metrics */}
          <div className="project-metrics-row" style={{ marginBottom: '20px' }}>
            {project.metrics.map((m, idx) => (
              <div key={idx} className="metric-pill">
                <span className="metric-pill-val">{m.value}</span>
                <span className="metric-pill-lbl">{m.label}</span>
              </div>
            ))}
          </div>

          <h4 className="modal-section-title">Soluciones y Arquitectura Destacada</h4>
          <ul className="modal-highlights">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="modal-highlight-item">
                <Check size={16} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <h4 className="modal-section-title">Stack Tecnológico</h4>
          <div className="project-tags" style={{ marginBottom: '24px' }}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tech-tag">{tag}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={onClose} className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
              Volver al Portfolio
            </button>
            <a 
              href="mailto:lucasfguimil00@gmail.com?subject=Consulta%20sobre%20proyecto%20" 
              className="btn-primary" 
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <span>Consultar sobre este desarrollo</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
