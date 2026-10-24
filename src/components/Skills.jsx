import React, { useState } from 'react';
import { Cpu, Server, Cloud, Database, Search } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Server: Server,
  Cpu: Cpu,
  Cloud: Cloud,
  Database: Database,
};

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');

  const filterCategorySkills = (skills) => {
    if (!searchTerm.trim()) return skills;
    const term = searchTerm.toLowerCase();
    return skills.filter(
      s => s.name.toLowerCase().includes(term) || s.note.toLowerCase().includes(term) || s.level.toLowerCase().includes(term)
    );
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Cpu size={14} />
          <span>Matriz Técnica</span>
        </div>
        <h2 className="section-title">Habilidades & Tecnologías de Producción</h2>
        <p className="section-desc">
          Especialización profunda en el ecosistema backend moderno, mensajería de eventos distribuidos y desarrollo de software impulsado por agentes de IA.
        </p>
      </div>

      {/* Interactive Search Bar */}
      <div className="skills-search-bar">
        <Search size={16} style={{ color: 'var(--text-muted)' }} />
        <input 
          type="text"
          placeholder="Buscar tecnología o concepto (ej: NestJS, Kafka, LangChain, Python)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="skills-search-input"
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.75rem' }}
          >
            Limpiar
          </button>
        )}
      </div>

      <div className="skills-grid">
        {portfolioData.skillCategories.map((cat, idx) => {
          const IconComp = iconMap[cat.icon] || Server;
          const matchingSkills = filterCategorySkills(cat.skills);

          if (searchTerm && matchingSkills.length === 0) return null;

          return (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon">
                  <IconComp size={18} />
                </div>
                <h3 className="category-title">{cat.title}</h3>
              </div>
              <p className="category-desc">{cat.description}</p>

              <div className="skills-list">
                {matchingSkills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-name-wrap">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-note">{skill.note}</span>
                    </div>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
