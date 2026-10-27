import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentProject = portfolioData.projects[activeIdx];

  return (
    <section id="proyectos" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-idx-header">
          <div className="section-idx-line">
            <span className="idx-number">02</span>
            <span className="idx-rule"></span>
          </div>
          <h2 className="section-main-title">Proyectos</h2>
        </div>

        {/* Split Layout: Left Tabs + Right Showcase */}
        <div className="projects-split-layout">
          {/* Left: Vertical Projects Tab List */}
          <div className="projects-tablist" role="tablist" aria-label="Proyectos">
            {portfolioData.projects.map((proj, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={proj.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIdx(idx)}
                  className={`project-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <span className="tab-marker-dot"></span>

                  <div className="tab-header-row">
                    <span className="tab-project-name">{proj.title}</span>
                    <span className="tab-status-pill">
                      <span 
                        className="status-dot-mini" 
                        style={{ backgroundColor: proj.statusColor }}
                      ></span>
                      {proj.status}
                    </span>
                  </div>

                  <span className="tab-project-sub">{proj.subtitle}</span>

                  <div className="tab-thumb-wrapper">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="tab-thumb-img" 
                      loading="eager"
                    />
                    {isActive && <div className="tab-progress-bar"></div>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Project Showcase */}
          <div className="showcase-panel">
            <div className="showcase-preview-wrap">
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                className="showcase-img"
              />
              <div className="showcase-img-overlay"></div>
            </div>

            <div className="showcase-content">
              <h3 className="showcase-title">{currentProject.title}</h3>
              <p className="showcase-subtitle">{currentProject.subtitle}</p>

              <p className="showcase-desc">{currentProject.description}</p>

              {/* Metrics */}
              {currentProject.metrics && currentProject.metrics.length > 0 && (
                <div className="showcase-metrics">
                  {currentProject.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="metric-item">
                      <span className="metric-val">{m.value}</span>
                      <span className="metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <ul className="showcase-highlights">
                {currentProject.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="highlight-row">
                    <Check size={15} style={{ color: 'var(--brand-light)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="tags-row" style={{ marginTop: 'auto', marginBottom: '20px' }}>
                {currentProject.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-badge">{tag}</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {currentProject.demoUrl && (
                  <a 
                    href={currentProject.demoUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary"
                    style={{ flex: 1, minWidth: '160px', justifyContent: 'center' }}
                  >
                    <span>Ver Demo en Vivo</span>
                    <ArrowUpRight size={15} />
                  </a>
                )}
                {currentProject.githubUrl && (
                  <a 
                    href={currentProject.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline"
                    style={{ flex: 1, minWidth: '140px', justifyContent: 'center' }}
                  >
                    <span>Ver Código</span>
                    <ArrowUpRight size={15} />
                  </a>
                )}
                <a 
                  href={`mailto:${portfolioData.personal.contact.email}?subject=Consulta%20sobre%20${encodeURIComponent(currentProject.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline"
                  style={{ flex: currentProject.demoUrl ? '0 1 auto' : 1, justifyContent: 'center' }}
                >
                  <span>Consultar sobre este proyecto</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
