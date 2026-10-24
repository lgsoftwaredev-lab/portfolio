import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-idx-header">
          <div className="section-idx-line">
            <span className="idx-number">03</span>
            <span className="idx-rule"></span>
          </div>
          <h2 className="section-main-title">Habilidades</h2>
        </div>

        {/* 2x2 Clean Categorized Grid */}
        <div className="skills-modern-grid">
          {portfolioData.skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-box">
              <h3 className="skill-box-title">
                <span>{cat.title}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-subtle)' }}>
                  0{idx + 1}
                </span>
              </h3>

              <div className="skill-pill-list">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
