import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Play } from 'lucide-react';

export default function ActionNode({ data }: { data: any }) {
  return (
    <div style={{
      background: 'var(--surface2)',
      border: data.status === 'running' ? '1px solid var(--amber)' : data.status === 'completed' ? '1px solid var(--green)' : '1px solid var(--border)',
      borderRadius: '8px',
      padding: '12px 16px',
      color: 'var(--text)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      minWidth: '150px',
      boxShadow: data.status === 'running' ? '0 0 12px var(--amber-dim)' : '0 4px 6px -1px rgba(0,0,0,0.5)',
      transition: 'all 0.3s ease'
    }}>
      <Handle type="target" position={Position.Left} style={{ background: 'var(--muted)', width: '8px', height: '8px' }} />
      <div style={{ color: 'var(--green)', display: 'flex', alignItems: 'center' }}>
        <Play size={18} />
      </div>
      <div style={{ fontSize: '13px', fontWeight: 600 }}>{data.label}</div>
    </div>
  );
}
