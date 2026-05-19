import { useEffect, useMemo, useState } from 'react';
import {
  Brain,
  Activity,
  Server,
  AlertTriangle,
  PlayCircle,
  Cpu,
  BookOpen,
  ArrowRight,
  Loader2,
  Settings,
  Terminal,
  MessageSquare
} from 'lucide-react';
import {
  getBrainHealth,
  getDiagnostics,
  getTrainingStatus,
  importTraining,
  runAgent,
  runStandup,
  getAgentsRegistry,
  type AgentDiagnostic,
  type AgentRunResponse,
  type BrainHealth,
  type TrainingStatus,
  type AgentsRegistryResponse
} from './api/brainApi';

// Hardcoded for UI aesthetic, but in reality we map to dynamic data
const flows = [
  { from: 'Marketing AI', to: 'CEO', signal: 'Campaign performance drop', action: 'Request budget reallocation approval' },
  { from: 'Home Chef AI', to: 'Operations AI', signal: 'New menu uploaded', action: 'Sync kitchen capacity & delivery zones' },
  { from: 'Customer AI', to: 'Kirana AI', signal: 'High item return rate', action: 'Flag quality issue for local inspection' },
];

const n8nWorkflows = [
  { trigger: 'Webhook', name: 'New Captain Onboarding', action: 'Validates docs via Vision API -> Creates DB entry -> Sends WhatsApp welcome msg' },
  { trigger: 'Schedule (5 AM)', name: 'Daily Price Sync', action: 'Scrapes mandi prices -> Adjusts platform markup -> Updates Kirana terminals' },
  { trigger: 'Stripe Event', name: 'Payout Processing', action: 'Calculates commission -> Splits payment -> Issues bank transfer -> Emails receipt' },
  { trigger: 'Twilio SMS', name: 'Offline Order Parsing', action: 'Extracts items via LLM -> Maps to SKU -> Injects order into live queue' },
];

export default function App() {
  const [health, setHealth] = useState<BrainHealth | null>(null);
  const [healthError, setHealthError] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  
  const [registry, setRegistry] = useState<AgentsRegistryResponse | null>(null);
  
  const [activeAgentId, setActiveAgentId] = useState('ceo');
  const [taskText, setTaskText] = useState('');
  
  const [outputs, setOutputs] = useState<Array<{
    id: string;
    agentName: string;
    task: string;
    response: AgentRunResponse;
    timestamp: Date;
  }>>([]);
  
  const [isRunning, setIsRunning] = useState(false);
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState(false);
  const [diagnostics, setDiagnostics] = useState<AgentDiagnostic[]>([]);
  
  const [apiEndpoint, setApiEndpoint] = useState('http://localhost:3000/api');

  // Fetch initial data
  useEffect(() => {
    let mounted = true;

    // Fetch Health
    getBrainHealth()
      .then((data) => {
        if (!mounted) return;
        setHealth(data);
        setSelectedModel(data.ollama.selectedModel ?? '');
      })
      .catch((error: unknown) => {
        if (!mounted) return;
        setHealthError(error instanceof Error ? error.message : 'Brain API is not reachable');
      });

    // Fetch dynamic agents
    getAgentsRegistry()
      .then((data) => {
        if (!mounted) return;
        setRegistry(data);
      })
      .catch((error) => console.error("Failed to load agents registry", error));

    return () => { mounted = false; };
  }, []);

  const modelMode = health?.mode ?? 'fallback';
  const isOnline = health?.api === 'ok';

  const allAgents = useMemo(() => {
    return registry?.allSpecialistAgents ?? [];
  }, [registry]);

  const activeAgent = useMemo(() => {
    if (activeAgentId === 'ceo') {
      return { id: 'ceo', name: 'CEO', emoji: '🧠', specialty: 'Orchestration', color: '#E85D04' };
    }
    return allAgents.find(a => a.id === activeAgentId) || allAgents[0];
  }, [activeAgentId, allAgents]);

  const diagnosticMap = useMemo(() => {
    return new Map(diagnostics.map(d => [d.id, d]));
  }, [diagnostics]);

  const handleRunTask = async () => {
    if (!taskText.trim()) return;
    setIsRunning(true);
    
    try {
      let result;
      if (activeAgentId === 'ceo') {
        result = await runStandup(taskText, selectedModel || undefined);
      } else {
        result = await runAgent(activeAgentId, taskText, selectedModel || undefined);
      }
      
      setOutputs(prev => [{
        id: Math.random().toString(36).substring(7),
        agentName: activeAgent?.name || 'Agent',
        task: taskText,
        response: result,
        timestamp: new Date()
      }, ...prev]);
    } catch (error) {
      setOutputs(prev => [{
        id: Math.random().toString(36).substring(7),
        agentName: activeAgent?.name || 'Agent',
        task: taskText,
        response: {
          mode: 'fallback',
          model: selectedModel || null,
          output: error instanceof Error ? error.message : 'Agent run failed',
          warning: 'Execution error'
        },
        timestamp: new Date()
      }, ...prev]);
    } finally {
      setIsRunning(false);
      setTaskText('');
    }
  };

  const handleDiagnostics = async () => {
    setIsDiagnosticRunning(true);
    try {
      const result = await getDiagnostics(selectedModel || undefined);
      setDiagnostics(result.agents);
      setHealth(current => current ? { ...current, mode: result.mode, ollama: result.ollama } : null);
    } catch (err) {
      console.error(err);
    } finally {
      setIsDiagnosticRunning(false);
    }
  };

  return (
    <div className="app">
      <header className="topbar">
        <a href="#" className="brand">
          <div className="brand-logo" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1px' }}>
            <span>Tz</span>
          </div>
          <span>Tez<em style={{ color: 'var(--brand)', fontStyle: 'normal' }}>Del</em> Brain</span>
        </a>
        <div className="top-right">
          <div className="status-badge">
            <div className={`dot ${isOnline ? 'live' : 'offline'}`}></div>
            {isOnline ? 'API Connected' : 'Offline'}
          </div>
          <input 
            type="text" 
            className="api-input" 
            value={apiEndpoint} 
            onChange={(e) => setApiEndpoint(e.target.value)}
            placeholder="API Endpoint URL" 
          />
          <button className="btn btn-ghost" onClick={() => getBrainHealth()}>
            <Activity size={14} /> Ping
          </button>
        </div>
      </header>

      <main className="main">
        <div className="command-banner">
          <div>
            <div className="banner-title">Control Center</div>
            <div className="banner-sub">Monitor, orchestrate, and override autonomous agents.</div>
          </div>
          <div className="banner-meta">
            <div className="meta-chip brand">ID: TZ-001</div>
            <div className="meta-chip green">UPTIME: 99.9%</div>
            <div className="meta-chip blue">MODEL: {selectedModel || modelMode.toUpperCase()}</div>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-label">Active Agents</div>
            <div className="stat-value brand">{allAgents.length + 1}</div>
            <div className="stat-detail">1 Orchestrator</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Memory Chunks</div>
            <div className="stat-value green">{health?.training?.chunkCount || 0}</div>
            <div className="stat-detail">Vector Embeddings</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Inferences</div>
            <div className="stat-value blue">14,289</div>
            <div className="stat-detail">Lifetime tasks</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Avg Latency</div>
            <div className="stat-value amber">4.2s</div>
            <div className="stat-detail">Ollama backend</div>
          </div>
        </div>

        <div className="content-grid">
          {/* CEO Command Panel */}
          <div className="panel ceo-panel">
            <div className="panel-head ceo-head">
              <div className="panel-title" style={{ color: 'var(--brand)' }}>CEO Override</div>
              <div className="panel-tag">Command</div>
            </div>
            <div className="ceo-task-form">
              <div className="task-label">Assign Task To</div>
              <div className="agent-select">
                <div 
                  className={`agent-chip ${activeAgentId === 'ceo' ? 'active' : ''}`}
                  onClick={() => setActiveAgentId('ceo')}
                >
                  🧠 CEO (Broadcast)
                </div>
                {allAgents.map(agent => (
                  <div 
                    key={agent.id}
                    className={`agent-chip ${activeAgentId === agent.id ? 'active' : ''}`}
                    onClick={() => setActiveAgentId(agent.id)}
                  >
                    {agent.emoji} {agent.name}
                  </div>
                ))}
              </div>
              
              <div className="task-label" style={{ marginTop: '10px' }}>Task Directive</div>
              <textarea 
                className="task-textarea" 
                placeholder="Describe the task or outcome..."
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
              />
              
              <div className="task-label" style={{ marginTop: '10px' }}>Force Model (Optional)</div>
              <select 
                className="task-textarea" 
                style={{ minHeight: '36px' }}
                value={selectedModel}
                onChange={e => setSelectedModel(e.target.value)}
              >
                <option value="">Auto-select based on task</option>
                {health?.ollama?.models?.map(m => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </select>
              
              <button 
                className="btn-run" 
                style={{ marginTop: '14px' }}
                onClick={handleRunTask}
                disabled={isRunning || !taskText.trim()}
              >
                {isRunning ? <Loader2 className="spin" size={16} /> : <PlayCircle size={16} />}
                Execute Directive
              </button>
            </div>
          </div>

          {/* Agent Network */}
          <div className="panel network-panel">
            <div className="panel-head">
              <div className="panel-title">Agent Network</div>
              <div className="panel-tag">Topology</div>
            </div>
            <div className="network-canvas-wrap">
              <div 
                className={`ceo-node ${activeAgentId === 'ceo' ? 'active' : ''}`}
                onClick={() => setActiveAgentId('ceo')}
              >
                <div className="ceo-avatar"><Brain size={20} color="#fff" /></div>
                <div className="node-info">
                  <div className="node-name">TezDel CEO Agent</div>
                  <div className="node-role">Central Orchestrator</div>
                  <div className="node-leader">EMP: TZ-001 | {isOnline ? 'ONLINE' : 'OFFLINE'}</div>
                </div>
                <div className="node-status-area">
                  <div className={`status-pill ${isOnline ? 'ready' : 'offline'}`}>
                    {modelMode.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="connector-row">
                <div className="connector-line"></div>
                <div className="connector-label">Delegates to</div>
              </div>

              <div className="agents-grid">
                {allAgents.map(agent => {
                  const diag = diagnosticMap.get(agent.id);
                  const isReady = diag?.status === 'ready' || isOnline;
                  const isActive = activeAgentId === agent.id;
                  
                  return (
                    <div 
                      key={agent.id}
                      className={`agent-node ${isActive ? 'active' : ''} ${isRunning && isActive ? 'running' : ''}`}
                      style={{ '--agent-color': agent.color || '#3B82F6' } as any}
                      onClick={() => setActiveAgentId(agent.id)}
                    >
                      <div className="agent-node-name">{agent.emoji} {agent.name}</div>
                      <div className="agent-node-leader">EMP: {agent.id}</div>
                      <div className="agent-node-status">
                        <div className={`status-pill ${isReady ? 'ready' : 'fallback'}`} style={{ transform: 'scale(0.8)', transformOrigin: 'top right' }}>
                          {isReady ? 'IDLE' : 'ERR'}
                        </div>
                      </div>
                      <div className="agent-node-running"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="panel output-panel">
            <div className="panel-head">
              <div className="panel-title">Output Logs</div>
              <div className="panel-tag">Live</div>
            </div>
            <div className="output-scroll">
              {isRunning && (
                <div className="thinking">
                  <div className="thinking-dots">
                    <div className="thinking-dot"></div>
                    <div className="thinking-dot"></div>
                    <div className="thinking-dot"></div>
                  </div>
                  <div className="thinking-text">{activeAgent?.name} is thinking...</div>
                </div>
              )}
              
              {outputs.length === 0 && !isRunning && (
                <div className="output-empty">
                  <div className="output-empty-icon"><Terminal /></div>
                  <div className="output-empty-text">No active inferences.<br/>Assign a task to see outputs.</div>
                </div>
              )}

              {outputs.map(out => (
                <div className="output-block" key={out.id}>
                  <div className="output-block-head">
                    <div className="output-agent-tag">
                      <div className="output-agent-dot" style={{ background: activeAgentId === 'ceo' ? '#E85D04' : '#3B82F6' }}></div>
                      {out.agentName} Response
                    </div>
                    <div className="output-meta">
                      {out.timestamp.toLocaleTimeString()} · {out.response.latencyMs ? `${out.response.latencyMs}ms` : 'cache'}
                    </div>
                  </div>
                  <div className="output-content">{out.response.output}</div>
                  
                  {out.response.warning && (
                    <div className="output-warning">
                      <AlertTriangle size={12} />
                      {out.response.warning}
                    </div>
                  )}
                  
                  {out.response.memory?.trained && (
                    <div className="output-memory">
                      <BookOpen size={12} />
                      Used {out.response.memory.chunkCount} RAG chunks
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-kicker" style={{ marginTop: '24px' }}>System Integrations</div>
        
        {/* Flow & n8n */}
        <div className="content-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div className="flow-section">
            <div className="panel-head" style={{ background: 'transparent', padding: '0 0 12px 0', border: 'none' }}>
              <div className="panel-title">Agent Communication Flows</div>
            </div>
            <div className="flow-grid" style={{ gridTemplateColumns: '1fr' }}>
              {flows.map((f, i) => (
                <div className="flow-card" key={i}>
                  <div className="flow-route">
                    <span className="flow-from">{f.from}</span>
                    <span className="flow-arrow">→</span>
                    <span className="flow-to">{f.to}</span>
                  </div>
                  <div className="flow-signal">{f.signal}</div>
                  <div className="flow-action">{f.action}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="n8n-section">
            <div className="panel-head" style={{ background: 'transparent', padding: '0 0 12px 0', border: 'none' }}>
              <div className="panel-title">n8n Workflow Blueprints</div>
            </div>
            <div className="workflow-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              {n8nWorkflows.map((w, i) => (
                <div className="workflow-card" key={i}>
                  <div className="workflow-trigger">{w.trigger}</div>
                  <div className="workflow-name">{w.name}</div>
                  <div className="workflow-action">{w.action}</div>
                  <div className="workflow-steps">
                    <span className="step-bubble trigger">Trig</span>
                    <span className="step-arrow">→</span>
                    <span className="step-bubble agent">Agent</span>
                    <span className="step-arrow">→</span>
                    <span className="step-bubble action">Act</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-kicker" style={{ marginTop: '24px' }}>Diagnostics</div>
        
        <div className="diag-section panel">
          <div className="panel-head">
            <div className="panel-title">Subsystem Health</div>
            <button 
              className="btn btn-ghost" 
              style={{ padding: '4px 10px', fontSize: '11px' }}
              onClick={handleDiagnostics}
              disabled={isDiagnosticRunning}
            >
              {isDiagnosticRunning ? <Loader2 size={12} className="spin" /> : <Cpu size={12} />} Run Diagnostics
            </button>
          </div>
          <div className="diag-grid">
            {allAgents.map(agent => {
              const diag = diagnosticMap.get(agent.id);
              const isReady = diag?.status === 'ready' || isOnline;
              return (
                <div className="diag-card" key={agent.id}>
                  <div className="diag-avatar" style={{ background: agent.color || 'var(--surface3)' }}>{agent.emoji}</div>
                  <div className="diag-info">
                    <div className="diag-name">{agent.name}</div>
                    <div className="diag-detail" style={{ color: isReady ? 'var(--green)' : 'var(--amber)' }}>
                      {isReady ? 'Systems nominal' : (diag?.detail || 'Waiting for check')}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </main>
    </div>
  );
}
