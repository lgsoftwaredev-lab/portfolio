import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span>© {new Date().getFullYear()} {portfolioData.personal.fullName}.</span>
          <span style={{ margin: '0 8px', color: 'var(--border-medium)' }}>·</span>
          <span>{portfolioData.personal.role}</span>
        </div>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-subtle)' }}>
          React · Vite · Cyber-Emerald Design
        </div>
      </div>
    </footer>
  );
}
