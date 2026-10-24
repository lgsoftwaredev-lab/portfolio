import React from 'react';
import { ArrowUp, Terminal, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <span>© {new Date().getFullYear()} Lucas Güimil.</span>
          <span style={{ margin: '0 8px', color: 'var(--border-medium)' }}>•</span>
          <span>Backend & AI Systems Engineer</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            React + Vite + Modern Vanilla CSS
          </span>
          <button 
            onClick={scrollToTop} 
            className="footer-back-to-top"
            title="Volver arriba"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
