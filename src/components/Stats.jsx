import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Stats() {
  return (
    <div className="section-wrapper" style={{ marginBottom: '60px' }}>
      <div className="stats-grid">
        {portfolioData.stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-val">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-highlight">↳ {stat.highlight}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
