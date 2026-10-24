import React, { useState } from 'react';
import { Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = portfolioData.projects.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="proyectos" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Layers size={14} />
          <span>Ingeniería & Proyectos</span>
        </div>
        <h2 className="section-title">Sistemas Diseñados para la Escala</h2>
        <p className="section-desc">
          Casos prácticos de arquitecturas backend de misión crítica, motores transaccionales financieros y orquestadores con agentes de Inteligencia Artificial.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filters">
        <button 
          onClick={() => setFilter('all')} 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        >
          Todos ({portfolioData.projects.length})
        </button>
        <button 
          onClick={() => setFilter('ai')} 
          className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
        >
          Agentes de IA
        </button>
        <button 
          onClick={() => setFilter('fintech')} 
          className={`filter-btn ${filter === 'fintech' ? 'active' : ''}`}
        >
          FinTech & Core Bancario
        </button>
        <button 
          onClick={() => setFilter('cloud')} 
          className={`filter-btn ${filter === 'cloud' ? 'active' : ''}`}
        >
          Cloud & Gateways
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => setActiveProject(project)}
          >
            <div className="project-image-wrap">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                loading="eager" 
              />
              <span className="project-category-badge">
                {project.category.toUpperCase()}
              </span>
            </div>

            <div className="project-content">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                <h3 className="project-title">{project.title}</h3>
                <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
              </div>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-desc">{project.description}</p>

              {/* Metrics Row */}
              <div className="project-metrics-row">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="metric-pill">
                    <span className="metric-pill-val">{m.value}</span>
                    <span className="metric-pill-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <span key={idx} className="tech-tag">{tag}</span>
                ))}
                {project.tags.length > 4 && (
                  <span className="tech-tag">+{project.tags.length - 4}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup for Selected Project */}
      {activeProject && (
        <ProjectModal 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}
    </section>
  );
}
