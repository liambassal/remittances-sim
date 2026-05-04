import React from 'react';
import { Sankey, Tooltip, ResponsiveContainer } from 'recharts';
import { sankeyData } from '../data/geo-data';

// Custom colors for nodes to match the dark aesthetic
const colors = ['#38BDF8', '#F59E0B', '#10B981', '#E2E8F0', '#38BDF8', '#38BDF8', '#EAB308', '#F97316', '#EF4444', '#F97316'];

const CustomNode = ({ x, y, width, height, index, payload }) => {
  const isOut = payload.targetLinks.length === 0;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={colors[index % colors.length]}
        fillOpacity={0.8}
        stroke="#0B0E14"
        strokeWidth={2}
      />
      <text
        x={isOut ? x - 8 : x + width + 8}
        y={y + height / 2}
        textAnchor={isOut ? 'end' : 'start'}
        dominantBaseline="middle"
        fontSize="12"
        fill="#E2E8F0"
        fontWeight={500}
      >
        {payload.name}
      </text>
      <text
        x={isOut ? x - 8 : x + width + 8}
        y={y + height / 2 + 16}
        textAnchor={isOut ? 'end' : 'start'}
        dominantBaseline="middle"
        fontSize="10"
        fill="#94A3B8"
      >
        ${payload.value}B
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    
    // Check if it's a link (has source and target) or a node
    const isLink = data.source && data.target;
    
    return (
      <div className="tooltip-custom" style={{ padding: '0.75rem', minWidth: '200px' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          {isLink ? 'Flujo Geopolítico' : 'Volumen Total'}
        </div>
        <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.875rem' }}>
          {isLink ? `${data.source.name} → ${data.target.name}` : data.name}
        </div>
        <div style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '1.25rem', marginTop: '0.25rem' }}>
          ${data.value} Billones
        </div>
      </div>
    );
  }
  return null;
};

export default function FlowSankey() {
  return (
    <div className="panel" style={{ height: '548px' }}>
      <div className="panel-header">
        <span className="panel-title">Corredores de Vasallaje Económico (Sankey)</span>
      </div>
      <div style={{ width: '100%', height: 'calc(100% - 40px)' }}>
        <ResponsiveContainer width="100%" height="100%">
          <Sankey
            data={sankeyData}
            node={<CustomNode />}
            nodePadding={12}
            margin={{
              left: 100,
              right: 100,
              top: 30,
              bottom: 40,
            }}
            link={{ stroke: '#334155', strokeOpacity: 0.3 }}
          >
            <Tooltip content={<CustomTooltip />} />
          </Sankey>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
