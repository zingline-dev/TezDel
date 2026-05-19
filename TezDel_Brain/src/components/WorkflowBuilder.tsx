import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { PlayCircle, Save, Plus } from 'lucide-react';
import TriggerNode from './nodes/TriggerNode';
import AgentNode from './nodes/AgentNode';
import ActionNode from './nodes/ActionNode';

const nodeTypes: NodeTypes = {
  trigger: TriggerNode,
  agent: AgentNode,
  action: ActionNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'trigger',
    position: { x: 50, y: 150 },
    data: { label: 'Webhook', icon: 'zap' },
  },
  {
    id: '2',
    type: 'agent',
    position: { x: 300, y: 150 },
    data: { label: 'Marketing AI', agentId: 'marketing' },
  },
  {
    id: '3',
    type: 'action',
    position: { x: 550, y: 150 },
    data: { label: 'Send WhatsApp' },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

export default function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [isExecuting, setIsExecuting] = useState(false);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: 'var(--muted)' } }, eds)),
    [setEdges]
  );

  const executeWorkflow = async () => {
    setIsExecuting(true);
    
    // Reset all nodes
    setNodes(nds => nds.map(n => ({ ...n, data: { ...n.data, status: 'idle' } })));
    setEdges(eds => eds.map(e => ({ ...e, style: { stroke: 'var(--muted)' }, animated: false })));

    const triggers = nodes.filter(n => n.type === 'trigger');
    
    for (const trigger of triggers) {
      // Light up trigger
      setNodes(nds => nds.map(n => n.id === trigger.id ? { ...n, data: { ...n.data, status: 'running' } } : n));
      await new Promise(r => setTimeout(r, 800));
      
      let currentId = trigger.id;
      setNodes(nds => nds.map(n => n.id === currentId ? { ...n, data: { ...n.data, status: 'completed' } } : n));
      
      // Follow edges
      while (true) {
        const outEdge = edges.find(e => e.source === currentId);
        if (!outEdge) break;
        
        // Light up edge
        setEdges(eds => eds.map(e => e.id === outEdge.id ? { ...e, style: { stroke: 'var(--brand)', strokeWidth: 2 }, animated: true } : e));
        await new Promise(r => setTimeout(r, 600));
        
        // Light up next node
        currentId = outEdge.target;
        setNodes(nds => nds.map(n => n.id === currentId ? { ...n, data: { ...n.data, status: 'running' } } : n));
        await new Promise(r => setTimeout(r, 1200));
        
        setNodes(nds => nds.map(n => n.id === currentId ? { ...n, data: { ...n.data, status: 'completed' } } : n));
      }
    }
    
    setIsExecuting(false);
  };

  const addNode = (type: string) => {
    const newNode = {
      id: Math.random().toString(36).substring(7),
      type,
      position: { x: Math.random() * 200 + 100, y: Math.random() * 200 + 100 },
      data: { label: `New ${type}` },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div style={{ width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
      <div style={{ padding: '12px 16px', background: 'var(--surface)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-ghost" onClick={() => addNode('trigger')} style={{ fontSize: '12px', padding: '4px 8px' }}>+ Trigger</button>
          <button className="btn btn-ghost" onClick={() => addNode('agent')} style={{ fontSize: '12px', padding: '4px 8px' }}>+ Agent</button>
          <button className="btn btn-ghost" onClick={() => addNode('action')} style={{ fontSize: '12px', padding: '4px 8px' }}>+ Action</button>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-ghost" style={{ fontSize: '12px', padding: '4px 12px' }}>
            <Save size={14} style={{ marginRight: '4px' }} /> Save
          </button>
          <button 
            className="btn btn-run" 
            style={{ fontSize: '12px', padding: '4px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}
            onClick={executeWorkflow}
            disabled={isExecuting}
          >
            <PlayCircle size={14} /> {isExecuting ? 'Executing...' : 'Execute Workflow'}
          </button>
        </div>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="dark-flow"
      >
        <Background color="#fff" gap={16} opacity={0.05} />
        <Controls style={{ background: 'var(--surface)', borderColor: 'var(--border)' }} />
      </ReactFlow>
    </div>
  );
}
