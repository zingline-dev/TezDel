import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bike,
  Bot,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Check,
  ChefHat,
  ClipboardList,
  Code2,
  Command,
  Copy,
  Cpu,
  Crosshair,
  HeartHandshake,
  Share2,
  Loader2,
  Megaphone,
  PlayCircle,
  Radio,
  RefreshCw,
  Send,
  Server,
  ShieldCheck,
  Store,
  Telescope,
  Utensils,
  Zap,
} from 'lucide-react';
import AgentLibrary from './components/AgentLibrary';
import SocialTools from './components/SocialTools';
import {
  brainIdentity,
  collaborationFlows,
  commandDirectives,
  competeOn,
  dailyLoop,
  departments,
  identityPillars,
  kpis,
  masterPrompt,
  philosophy,
  refuseToCompeteOn,
  type Department,
} from './data/brain';
import {
  getBrainHealth,
  getDiagnostics,
  getTrainingStatus,
  importTraining,
  runAgent,
  runStandup,
  type AgentDiagnostic,
  type AgentRunResponse,
  type BrainHealth,
  type TrainingStatus,
} from './api/brainApi';

const iconMap = {
  ceo: Command,
  culture: Utensils,
  marketing: Megaphone,
  operations: Bike,
  kirana: Store,
  customer: HeartHandshake,
  engineering: Code2,
  warfare: Crosshair,
  future: Telescope,
  analytics: BarChart3,
  founder: BriefcaseBusiness,
};

function AgentIcon({ department }: { department: Department }) {
  const Icon = iconMap[department.id as keyof typeof iconMap] ?? Brain;
  return <Icon aria-hidden="true" size={20} />;
}

function ToneIcon({ tone }: { tone: string }) {
  if (tone === 'green') return <ShieldCheck aria-hidden="true" size={18} />;
  if (tone === 'blue') return <Activity aria-hidden="true" size={18} />;
  if (tone === 'saffron') return <ChefHat aria-hidden="true" size={18} />;
  if (tone === 'red') return <Radio aria-hidden="true" size={18} />;
  return <Zap aria-hidden="true" size={18} />;
}

export default function App() {
  const [activeId, setActiveId] = useState('ceo');
  const [copied, setCopied] = useState(false);
  const [health, setHealth] = useState<BrainHealth | null>(null);
  const [healthError, setHealthError] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [trainingStatus, setTrainingStatus] = useState<TrainingStatus | null>(null);
  const [trainingLoading, setTrainingLoading] = useState(false);
  const [trainingError, setTrainingError] = useState('');
  const [diagnostics, setDiagnostics] = useState<AgentDiagnostic[]>([]);
  const [diagnosticsLoading, setDiagnosticsLoading] = useState(false);
  const [task, setTask] = useState(
    'Create today execution plan for this department to help TezDel dominate one Bhubaneswar locality.',
  );
  const [agentResponse, setAgentResponse] = useState<AgentRunResponse | null>(null);
  const [standupResponse, setStandupResponse] = useState<AgentRunResponse | null>(null);
  const [runningAgent, setRunningAgent] = useState(false);
  const [runningStandup, setRunningStandup] = useState(false);

  const activeDepartment = useMemo(
    () => departments.find((department) => department.id === activeId) ?? departments[0],
    [activeId],
  );

  const diagnosticMap = useMemo(
    () => new Map(diagnostics.map((diagnostic) => [diagnostic.id, diagnostic])),
    [diagnostics],
  );

  const modelNames = health?.ollama.models.map((model) => model.name) ?? [];
  const modelMode = health?.mode ?? 'fallback';
  const modelStatusText =
    healthError ||
    (health?.ollama.connected
      ? health.ollama.selectedModel
        ? `Connected to ${health.ollama.selectedModel}`
        : modelMode === 'claude'
          ? 'Claude connected, but no model is available'
          : 'Ollama connected, but no model is available'
      : modelMode === 'claude'
        ? 'Claude connection offline, fallback mode active'
        : 'Ollama connection offline, fallback mode active');
  const trained = Boolean(trainingStatus?.trained);
  const trainingStatusText = trainingError
    ? trainingError
    : trained
      ? `${trainingStatus?.chunkCount ?? 0} memory chunks trained`
      : trainingStatus?.sourceDocExists === false
        ? 'Blueprint docx not found'
        : 'Blueprint memory not trained yet';

  useEffect(() => {
    let mounted = true;

    getBrainHealth()
      .then((data) => {
        if (!mounted) return;
        setHealth(data);
        setTrainingStatus(data.training);
        setSelectedModel(data.ollama.selectedModel ?? '');
      })
      .catch((error: unknown) => {
        if (!mounted) return;
        setHealthError(error instanceof Error ? error.message : 'Brain API is not reachable');
      });

    getTrainingStatus()
      .then((data) => {
        if (!mounted) return;
        setTrainingStatus(data);
      })
      .catch(() => {
        // Health already surfaces API connectivity. Training status can wait for refresh.
      });

    return () => {
      mounted = false;
    };
  }, []);

  async function refreshHealth(model = selectedModel) {
    setHealthError('');
    try {
      const data = await getBrainHealth(model || undefined);
      setHealth(data);
      setTrainingStatus(data.training);
      setSelectedModel(model || data.ollama.selectedModel || '');
    } catch (error) {
      setHealthError(error instanceof Error ? error.message : 'Brain API is not reachable');
    }
  }

  async function handleCopyPrompt() {
    await navigator.clipboard.writeText(masterPrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function handleSelectAgent(agentId: string) {
    setActiveId(agentId);
    setAgentResponse(null);
  }

  async function handleDiagnostics() {
    setDiagnosticsLoading(true);
    setHealthError('');
    try {
      const result = await getDiagnostics(selectedModel || undefined);
      setDiagnostics(result.agents);
      setTrainingStatus(result.training);
      setHealth((current) =>
        current
          ? { ...current, mode: result.mode, ollama: result.ollama, training: result.training }
          : {
              api: 'ok',
              mode: result.mode,
              agentCount: result.agents.length,
              ollama: result.ollama,
              training: result.training,
            },
      );
      setSelectedModel(result.ollama.selectedModel ?? selectedModel);
    } catch (error) {
      setHealthError(error instanceof Error ? error.message : 'Diagnostics failed');
    } finally {
      setDiagnosticsLoading(false);
    }
  }

  async function handleTrainAgents() {
    setTrainingLoading(true);
    setTrainingError('');
    try {
      const status = await importTraining();
      setTrainingStatus(status);
      const diagnosticsResult = await getDiagnostics(selectedModel || undefined);
      setDiagnostics(diagnosticsResult.agents);
      setHealth((current) =>
        current
          ? { ...current, mode: diagnosticsResult.mode, ollama: diagnosticsResult.ollama, training: status }
          : {
              api: 'ok',
              mode: diagnosticsResult.mode,
              agentCount: diagnosticsResult.agents.length,
              ollama: diagnosticsResult.ollama,
              training: status,
            },
      );
    } catch (error) {
      setTrainingError(error instanceof Error ? error.message : 'Training import failed');
    } finally {
      setTrainingLoading(false);
    }
  }

  async function handleRunAgent() {
    setRunningAgent(true);
    setAgentResponse(null);
    try {
      const result = await runAgent(activeDepartment.id, task, selectedModel || undefined);
      setAgentResponse(result);
    } catch (error) {
      setAgentResponse({
        mode: 'fallback',
        model: selectedModel || null,
        output: error instanceof Error ? error.message : 'Agent run failed',
        warning: 'Local Brain API error',
      });
    } finally {
      setRunningAgent(false);
    }
  }

  async function handleRunStandup() {
    setRunningStandup(true);
    setStandupResponse(null);
    try {
      const result = await runStandup(
        'Create today morning standup for all TezDel Brain departments. Focus on Bhubaneswar launch execution, home chefs, kiranas, captains, customer trust, and AI infrastructure.',
        selectedModel || undefined,
      );
      setStandupResponse(result);
    } catch (error) {
      setStandupResponse({
        mode: 'fallback',
        model: selectedModel || null,
        output: error instanceof Error ? error.message : 'Standup generation failed',
        warning: 'Local Brain API error',
      });
    } finally {
      setRunningStandup(false);
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar" aria-label="TezDel Brain header">
        <a className="brand" href="#command">
          <span className="brand-mark">
            <Brain size={22} aria-hidden="true" />
          </span>
          <span>
            <strong>TezDel Brain</strong>
            <small>AI Operating System</small>
          </span>
        </a>
        <div className="top-actions">
          <nav className="topnav" aria-label="Primary">
            <a href="#console">Console</a>
            <a href="#agents">Agents</a>
            <a href="#loop">Execution Loop</a>
            <a href="#prompt">Master Prompt</a>
            <a href="#library">
              <BookOpen size={14} aria-hidden="true" />
              Agent Library
            </a>
            <a href="#social">
              <Share2 size={14} aria-hidden="true" />
              Social Tools
            </a>
          </nav>
          <span className={`model-pill ${modelMode}`}>
            <span className="model-dot" />
            {modelMode === 'ollama' ? 'AI Online' : 'Fallback'}
          </span>
        </div>
      </header>

      <main>
        <section className="command-grid" id="command">
          <article className="command-panel">
            <div className="eyebrow">
              <span className="status-dot" />
              Live Command Center
            </div>
            <h1>{brainIdentity.name}</h1>
            <p className="lead">{brainIdentity.doctrine}</p>

            <div className="mission-strip">
              <ClipboardList size={20} aria-hidden="true" />
              <p>{brainIdentity.mission}</p>
            </div>

            <div className="directive-grid">
              {commandDirectives.map((directive) => (
                <div className="directive" key={directive.label}>
                  <span>{directive.label}</span>
                  <p>{directive.value}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="identity-panel" aria-label="TezDel identity">
            <div className="panel-heading">
              <h2>Operating Doctrine</h2>
              <span>Odia-first</span>
            </div>
            <div className="pillar-cloud">
              {identityPillars.map((pillar) => (
                <span key={pillar}>{pillar}</span>
              ))}
            </div>
            <ul className="philosophy-list">
              {philosophy.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="kpi-grid" aria-label="Command KPIs">
          {kpis.map((kpi) => (
            <article className={`kpi-card tone-${kpi.tone}`} key={kpi.label}>
              <div className="kpi-icon">
                <ToneIcon tone={kpi.tone} />
              </div>
              <div>
                <span>{kpi.label}</span>
                <strong>{kpi.value}</strong>
                <p>{kpi.detail}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="brain-console" id="console" aria-label="Functional agent console">
          <article className="console-status">
            <div className="panel-heading">
              <div>
                <p className="section-kicker">Functional Brain</p>
                <h2>Model Connection</h2>
              </div>
              <button className="icon-button" type="button" onClick={() => refreshHealth()}>
                <RefreshCw size={17} aria-hidden="true" />
                Refresh
              </button>
            </div>

            <div className={`connection-card ${modelMode}`}>
              <div className="connection-icon">
                {modelMode === 'ollama' || modelMode === 'claude' ? (
                  <Server size={22} aria-hidden="true" />
                ) : (
                  <AlertTriangle size={22} aria-hidden="true" />
                )}
              </div>
              <div>
                <strong>{modelStatusText}</strong>
                <p>
                  API: {health?.api === 'ok' ? 'running' : 'checking'} · Agents:{' '}
                  {health?.agentCount ?? departments.length}
                  {modelMode === 'claude' ? (
                    <> · OpenRouter: {health?.ollama.ollamaUrl ?? 'https://openrouter.ai/api'}</>
                  ) : (
                    <> · Ollama: {health?.ollama.ollamaUrl ?? 'http://127.0.0.1:11434'}</>
                  )}
                </p>
              </div>
            </div>

            <label className="model-select-label" htmlFor="model-select">
              Active Model
              <select
                id="model-select"
                value={selectedModel}
                onChange={(event) => setSelectedModel(event.target.value)}
                disabled={!modelNames.length}
              >
                {modelNames.length ? (
                  modelNames.map((model) => (
                    <option value={model} key={model}>
                      {model}
                    </option>
                  ))
                ) : (
                  <option value="">
                    {health?.ollama.connected 
                      ? 'No models installed' 
                      : modelMode === 'claude' 
                        ? 'Claude connection offline' 
                        : 'Ollama offline'}
                  </option>
                )}
              </select>
            </label>

            <div className={`training-card ${trained ? 'trained' : ''}`}>
              <div className="training-icon">
                <BookOpen size={21} aria-hidden="true" />
              </div>
              <div>
                <span>Blueprint Memory</span>
                <strong>{trainingStatusText}</strong>
                <p>
                  {trainingStatus?.sourceDoc ?? 'C:\\Users\\Bishal\\Downloads\\TezDel_Complete_Startup_Blueprint (1).docx'}
                </p>
                {trainingStatus?.lastTrainedAt ? (
                  <small>Last trained: {new Date(trainingStatus.lastTrainedAt).toLocaleString()}</small>
                ) : null}
              </div>
            </div>

            <div className="console-actions">
              <button
                className="primary-action"
                type="button"
                onClick={handleTrainAgents}
                disabled={trainingLoading}
              >
                {trainingLoading ? (
                  <Loader2 className="spin" size={18} aria-hidden="true" />
                ) : (
                  <BookOpen size={18} aria-hidden="true" />
                )}
                Train All Agents
              </button>
              <button
                className="secondary-action"
                type="button"
                onClick={handleDiagnostics}
                disabled={diagnosticsLoading}
              >
                {diagnosticsLoading ? (
                  <Loader2 className="spin" size={18} aria-hidden="true" />
                ) : (
                  <Cpu size={18} aria-hidden="true" />
                )}
                Check All Agents
              </button>
            </div>

            <div className="console-actions">
              <button
                className="secondary-action"
                type="button"
                onClick={handleRunStandup}
                disabled={runningStandup}
              >
                {runningStandup ? (
                  <Loader2 className="spin" size={18} aria-hidden="true" />
                ) : (
                  <PlayCircle size={18} aria-hidden="true" />
                )}
                Generate CEO Standup
              </button>
            </div>

            <div className="diagnostic-list">
              {(diagnostics.length
                ? diagnostics
                : departments.map((department) => ({
                    id: department.id,
                    name: department.shortName,
                    status: 'fallback' as const,
                    detail: 'Not checked yet.',
                  }))
              ).map((diagnostic) => (
                <button
                  className={`diagnostic-item ${activeId === diagnostic.id ? 'active' : ''}`}
                  data-status={diagnostic.status}
                  key={diagnostic.id}
                  type="button"
                  onClick={() => handleSelectAgent(diagnostic.id)}
                >
                  <span>{diagnostic.name}</span>
                  <small>{diagnostic.detail}</small>
                </button>
              ))}
            </div>
          </article>

          <article className="console-runner">
            <div className="panel-heading">
              <div>
                <p className="section-kicker">Run Agent</p>
                <h2>{activeDepartment.shortName}</h2>
              </div>
              <span>{activeDepartment.personality}</span>
            </div>

            <label className="agent-select-label" htmlFor="agent-select">
              Select Agent
              <select
                id="agent-select"
                value={activeId}
                onChange={(event) => handleSelectAgent(event.target.value)}
              >
                {departments.map((department) => (
                  <option value={department.id} key={department.id}>
                    {department.shortName}
                  </option>
                ))}
              </select>
            </label>

            <label className="task-box" htmlFor="agent-task">
              Task
              <textarea
                id="agent-task"
                value={task}
                onChange={(event) => setTask(event.target.value)}
                rows={5}
              />
            </label>

            <button
              className="primary-action wide"
              type="button"
              onClick={handleRunAgent}
              disabled={runningAgent || !task.trim()}
            >
              {runningAgent ? (
                <Loader2 className="spin" size={18} aria-hidden="true" />
              ) : (
                <Send size={18} aria-hidden="true" />
              )}
              Run Selected Agent
            </button>

            <div className="output-console">
              <div className="output-head">
                <span>
                  <Bot size={16} aria-hidden="true" />
                  Agent Output
                </span>
                {agentResponse ? (
                  <small>
                    {agentResponse.mode} {agentResponse.model ? `· ${agentResponse.model}` : ''}
                    {agentResponse.latencyMs ? ` · ${agentResponse.latencyMs}ms` : ''}
                  </small>
                ) : null}
              </div>
              <pre>
                {agentResponse
                  ? agentResponse.output
                  : 'Select any department, write a task, and run it. If Ollama is online, this will be a real model response.'}
              </pre>
              {agentResponse?.memory ? (
                <div className="memory-summary">
                  <strong>
                    {agentResponse.memory.trained
                      ? `Used ${agentResponse.memory.chunkCount} trained memory chunks`
                      : 'No trained memory used'}
                  </strong>
                  {agentResponse.memory.chunks.length ? (
                    <span>
                      {agentResponse.memory.chunks
                        .map((chunk) => `${chunk.id}: ${chunk.section}`)
                        .join(' | ')}
                    </span>
                  ) : null}
                </div>
              ) : null}
              {agentResponse?.warning ? <p className="console-warning">{agentResponse.warning}</p> : null}
            </div>

            {standupResponse ? (
              <div className="output-console standup-output">
                <div className="output-head">
                  <span>
                    <Command size={16} aria-hidden="true" />
                    CEO Standup
                  </span>
                  <small>{standupResponse.mode}</small>
                </div>
                <pre>{standupResponse.output}</pre>
                {standupResponse.memory ? (
                  <div className="memory-summary">
                    <strong>
                      {standupResponse.memory.trained
                        ? `Used ${standupResponse.memory.chunkCount} trained memory chunks`
                        : 'No trained memory used'}
                    </strong>
                  </div>
                ) : null}
                {standupResponse.warning ? (
                  <p className="console-warning">{standupResponse.warning}</p>
                ) : null}
              </div>
            ) : null}
          </article>
        </section>

        <section className="agent-workbench" id="agents">
          <div className="section-title-row">
            <div>
              <p className="section-kicker">Autonomous Departments</p>
              <h2>AI departments with goals, KPIs, and collaboration duties.</h2>
            </div>
            <span>{departments.length} active agents</span>
          </div>

          <div className="workbench-grid">
            <aside className="agent-rail" aria-label="Department list">
              {departments.map((department) => (
                <button
                  className={`agent-tab ${activeId === department.id ? 'active' : ''}`}
                  data-color={department.color}
                  key={department.id}
                  type="button"
                  onClick={() => handleSelectAgent(department.id)}
                >
                  <AgentIcon department={department} />
                  <span className="agent-tab-copy">
                    {department.shortName}
                    {diagnosticMap.get(department.id) ? (
                      <small data-status={diagnosticMap.get(department.id)?.status}>
                        {diagnosticMap.get(department.id)?.status === 'ready'
                          ? 'model ready'
                          : 'fallback'}
                      </small>
                    ) : null}
                  </span>
                </button>
              ))}
            </aside>

            <article className={`agent-detail accent-${activeDepartment.color}`}>
              <div className="agent-detail-head">
                <div className="agent-badge">
                  <AgentIcon department={activeDepartment} />
                </div>
                <div>
                  <p className="section-kicker">Selected Department</p>
                  <h3>{activeDepartment.name}</h3>
                  <div className="leader-badge-container" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 10px',
                      background: 'rgba(25, 23, 20, 0.05)',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: 'var(--ink)',
                      border: '1px solid rgba(25, 23, 20, 0.08)'
                    }}>
                      Leader: {activeDepartment.leaderName}
                    </span>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 10px',
                      background: 'var(--accent, var(--orange))',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 900,
                      color: '#fff',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                    }}>
                      {activeDepartment.empId}
                    </span>
                  </div>
                </div>
              </div>

              <p className="agent-mission">{activeDepartment.mission}</p>

              <div className="agent-columns">
                <div>
                  <h4>Responsibilities</h4>
                  <ul>
                    {activeDepartment.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>KPIs</h4>
                  <ul>
                    {activeDepartment.kpis.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {activeDepartment.focus ? (
                <div className="focus-band">
                  {activeDepartment.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              ) : null}

              <div className="collaboration-block">
                <h4>Collaboration Protocol</h4>
                {activeDepartment.collaboration.map((item) => (
                  <p key={item}>
                    <ArrowRight size={16} aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>

              <div className="operating-question">
                <span>Operating question</span>
                <strong>{activeDepartment.operatingQuestion}</strong>
              </div>
            </article>
          </div>
        </section>

        <section className="operations-grid" id="loop">
          <article className="loop-panel">
            <div className="panel-heading">
              <h2>Daily Execution Loop</h2>
              <span>Morning to night</span>
            </div>
            <div className="timeline">
              {dailyLoop.map((item, index) => (
                <div className="timeline-item" key={item.phase}>
                  <span className="timeline-index">{index + 1}</span>
                  <div>
                    <strong>{item.phase}</strong>
                    <small>{item.owner}</small>
                    <p>{item.output}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="flow-panel">
            <div className="panel-heading">
              <h2>Agent Communication</h2>
              <span>Cross-functional signals</span>
            </div>
            <div className="flow-list">
              {collaborationFlows.map((flow) => (
                <div className="flow-item" key={`${flow.from}-${flow.to}`}>
                  <div className="flow-route">
                    <strong>{flow.from}</strong>
                    <ArrowRight size={15} aria-hidden="true" />
                    <strong>{flow.to}</strong>
                  </div>
                  <p>{flow.signal}</p>
                  <small>{flow.action}</small>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="strategy-grid" aria-label="Core strategy">
          <article className="strategy-panel positive">
            <h2>TezDel Competes On</h2>
            <div className="strategy-list">
              {competeOn.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
          <article className="strategy-panel negative">
            <h2>TezDel Refuses</h2>
            <div className="strategy-list">
              {refuseToCompeteOn.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
          <article className="strategy-panel roadmap">
            <h2>Long-Term Objective</h2>
            {brainIdentity.yearGoals.map((goal) => (
              <p key={goal}>{goal}</p>
            ))}
          </article>
        </section>

        <section className="prompt-console" id="prompt">
          <div className="panel-heading">
            <div>
              <p className="section-kicker">System Memory</p>
              <h2>Master AI Operating Prompt</h2>
            </div>
            <button className="copy-button" type="button" onClick={handleCopyPrompt}>
              {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <pre>{masterPrompt}</pre>
        </section>

        <AgentLibrary />
        <SocialTools />
      </main>
    </div>
  );
}
