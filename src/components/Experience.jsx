import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-idx-header">
          <div className="section-idx-line">
            <span className="idx-number">01</span>
            <span className="idx-rule"></span>
          </div>
          <h2 className="section-main-title">Experiencia</h2>
        </div>

        {/* Timeline */}
        <ol className="experience-timeline">
          {portfolioData.experiences.map((exp) => (
            <li key={exp.id} className="timeline-entry">
              {/* Timeline Indicator Dot */}
              <span 
                aria-hidden="true" 
                className={`timeline-dot ${exp.isCurrent ? 'active' : ''}`}
              ></span>

              <div className="exp-header">
                <h3 className="exp-role">{exp.role}</h3>
                {exp.isCurrent && (
                  <span className="badge-current">Actualmente</span>
                )}
              </div>

              <div className="exp-meta">
                <strong>{exp.company}</strong> · <span>{exp.client}</span> · <time>{exp.period}</time>
              </div>

              <p className="exp-summary">{exp.description}</p>

              <ul className="exp-bullets">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="exp-bullet-item">
                    <span className="bullet-dot" aria-hidden="true"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="tags-row">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="tag-badge">{skill}</span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
