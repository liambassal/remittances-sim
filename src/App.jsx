import React from 'react';
import LiveTicker from './components/LiveTicker';
import WorldMap from './components/WorldMap';
import FlowSankey from './components/FlowSankey';
import { Database, Globe2 } from 'lucide-react';

function App() {
  return (
    <div className="container">
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
        <h1 className="title-serif" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          La Geopolítica de las Remesas
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '800px', lineHeight: 1.6 }}>
          Monitorización analítica de los flujos de capital humano y dependencias asimétricas en el sistema internacional. Basado en datos macroeconómicos del Banco Mundial (2024).
        </p>
      </header>

      <main>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-color)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <Database size={14} style={{ marginRight: '6px' }} />
            Fuente: WB Migration Data Portal
          </span>
          <span className="badge" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-warning)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            <Globe2 size={14} style={{ marginRight: '6px' }} />
            Análisis Geopolítico
          </span>
        </div>

        <LiveTicker />

        <div className="dashboard-grid">
          <WorldMap />
          <FlowSankey />
        </div>
      </main>

      <footer style={{ marginTop: '4rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem', color: 'var(--text-muted)', fontSize: '0.875rem', textAlign: 'center' }}>
        <p>Herramienta analítica desarrollada para Geopolítica y Globalización (2026).</p>
      </footer>
    </div>
  );
}

export default App;
