import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { remittanceData } from '../data/geo-data';
import { MapPin, AlertTriangle } from 'lucide-react';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMap() {
  const [activeCountry, setActiveCountry] = useState(null);

  return (
    <div className="panel" style={{ position: 'relative' }}>
      <div className="panel-header">
        <span className="panel-title">Mapa de Dependencia Asimétrica</span>
        {activeCountry && (
          <span className="badge">
            <AlertTriangle size={12} style={{ marginRight: '4px' }} />
            Datos en vivo
          </span>
        )}
      </div>

      <div className="map-container">
        <ComposableMap projection="geoMercator" projectionConfig={{ scale: 120 }}>
          <ZoomableGroup center={[0, 0]} zoom={1} maxZoom={8}>
            <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1C232E"
                  stroke="#334155"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#334155", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {remittanceData.map((data) => (
            <Marker 
              key={data.id} 
              coordinates={data.coordinates}
              onMouseEnter={() => setActiveCountry(data)}
              onMouseLeave={() => setActiveCountry(null)}
            >
              <circle r={5} fill={data.color} stroke="#0B0E14" strokeWidth={1.5} style={{ cursor: 'pointer', transition: 'all 0.2s' }} />
              {/* Pulse effect for highly dependent countries */}
              {data.dependencyPercent > 20 && (
                 <circle r={5} fill={data.color} opacity="0.4" style={{ pointerEvents: 'none' }}>
                    <animate attributeName="r" from="5" to="16" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.4" to="0" dur="1.5s" repeatCount="indefinite" />
                 </circle>
              )}
            </Marker>
          ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Institutional Tooltip Overlay */}
      {activeCountry && (
        <div 
          className="tooltip-custom" 
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            width: '320px',
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>{activeCountry.name}</h3>
            <span style={{ 
              backgroundColor: activeCountry.color, 
              color: '#0B0E14', 
              padding: '0.25rem 0.5rem', 
              borderRadius: '4px',
              fontSize: '0.875rem',
              fontWeight: 700
            }}>
              {activeCountry.dependencyPercent}% PIB
            </span>
          </div>
          
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
            {activeCountry.description}
          </p>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
              <span>Flujo Anual Total:</span>
              <span>Principal Origen:</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              <span>${activeCountry.annualVolumeBillion}B</span>
              <span>{activeCountry.mainSource}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
