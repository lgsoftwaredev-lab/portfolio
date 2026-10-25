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

        {/* Categorized List with Tech Logos */}
        <ul className="skills-category-list">
          {portfolioData.skillCategories.map((group, idx) => (
            <li key={idx} className="skills-row">
              <span className="skills-category-name">{group.category}</span>
              <ul className="skills-pill-group">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-tech-badge">
                    <span className="skill-icons-wrapper">
                      {skill.icons.map((iconPath, iIdx) => (
                        <img 
                          key={iIdx} 
                          src={iconPath} 
                          alt="" 
                          aria-hidden="true" 
                          className="skill-tech-icon"
                          loading="lazy"
                        />
                      ))}
                    </span>
                    <span className="skill-tech-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
