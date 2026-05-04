import React, { useState, useEffect } from 'react';
import { Activity, Info } from 'lucide-react';
import { GLOBAL_ANNUAL_VOLUME } from '../data/geo-data';

// Calculate dollars per millisecond
// 365 days * 24 hours * 60 minutes * 60 seconds * 1000 = 31,536,000,000 ms/year
const DOLLARS_PER_MS = GLOBAL_ANNUAL_VOLUME / 31536000000;

export default function LiveTicker() {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    // Baseline: roughly what's sent in 12 hours
    const baseline = DOLLARS_PER_MS * (12 * 60 * 60 * 1000);
    let exactValue = baseline;
    setCurrentValue(Math.floor(exactValue));

    const intervalId = setInterval(() => {
      exactValue += DOLLARS_PER_MS * 50; // Update every 50ms
      setCurrentValue(Math.floor(exactValue));
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  // Format as currency
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(currentValue);

  return (
    <div className="panel" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
      <div className="live-indicator" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
        <div className="pulse-dot"></div>
        <span>Monitorización Global Activa</span>
        <Activity size={16} style={{ marginLeft: '0.25rem' }} />
      </div>
      
      <div className="ticker-value">
        {formattedValue}
      </div>
      
      <div className="ticker-subtext">
        Flujo estimado de remesas canalizadas en las últimas 12 horas (Tiempo Real Simulado)
      </div>
      
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Volumen Anual (LMICs)</div>
          <div style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 600 }}>$656 Billones</div>
        </div>
        <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }}></div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tasa de Transferencia</div>
          <div style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 600 }}>${Math.floor(DOLLARS_PER_MS * 1000).toLocaleString()}/seg</div>
        </div>
      </div>

      <div style={{ 
        marginTop: '2rem', 
        backgroundColor: 'rgba(148, 163, 184, 0.05)', 
        border: '1px solid var(--border-color)', 
        borderRadius: '6px', 
        padding: '1rem', 
        fontSize: '0.8rem', 
        color: 'var(--text-muted)', 
        textAlign: 'left', 
        display: 'flex', 
        gap: '0.75rem', 
        alignItems: 'flex-start' 
      }}>
        <Info size={16} style={{ color: 'var(--text-secondary)', flexShrink: 0, marginTop: '2px' }} />
        <p style={{ margin: 0, lineHeight: 1.5 }}>
          <strong>Nota Metodológica:</strong> No existe una red global pública de transacciones en vivo. Este contador muestra una <strong>estimación matemática calculada en tiempo real</strong>. Algorítmicamente divide el último volumen anual auditado por el Banco Mundial ($656 Billones) para simular la velocidad promedio exacta a la que fluye el dinero globalmente en este instante.
        </p>
      </div>
    </div>
  );
}
