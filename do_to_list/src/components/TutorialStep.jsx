import React from 'react';

export default function TutorialStep({ title, description, code, children }) {
  return (
    <div className="tutorial-step glass-panel" style={{ marginBottom: '3rem' }}>
      <h2 style={{ marginTop: '0' }}>{title}</h2>
      <div className="step-description">
        {description && <p>{description}</p>}
        {children}
      </div>
      
      {code && (
        <div style={{ marginTop: '1.5rem' }}>
          <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Example Code:</h4>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
