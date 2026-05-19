import { useState, useEffect } from 'react';
import { Search, BookOpen, ChevronDown, ChevronRight, X, Play, Loader2, Copy, Check, Terminal } from 'lucide-react';
import { agentDivisions, searchAgents, allAgents, type AgentCard } from '../data/agentLibrary';
import { getAgentsRegistry, runAgent, getBrainHealth } from '../api/brainApi';

type ModalAgent = AgentCard | null;

function AgentModal({
  agent,
  onClose,
  activeMode,
  availableModels,
  defaultModel,
}: {
  agent: AgentCard;
  onClose: () => void;
  activeMode: string;
  availableModels: string[];
  defaultModel: string;
}) {
  const [task, setTask] = useState(
    `Analyze how to optimize the ${agent.name} playbook for the TezDel hyperlocal q-commerce launch in Bhubaneswar.`
  );
  const [model, setModel] = useState(defaultModel);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultModel) {
      setModel(defaultModel);
    }
  }, [defaultModel]);

  const handleDeploy = async () => {
    if (!task.trim()) return;
    setLoading(true);
    setOutput(null);
    setStatusMessage('Bootstrapping specialist agent environment...');
    
    // Simulate nice console bootstrap messages
    const timers = [
      setTimeout(() => setStatusMessage(`Loading specialist playbook: agents/${agent.filePath}...`), 600),
      setTimeout(() => setStatusMessage('Analyzing startup blueprint & local contexts...'), 1300),
      setTimeout(() => setStatusMessage(`Executing model inference pipeline (${model || 'fallback'})...`), 2100)
    ];

    try {
      const response = await runAgent(agent.id, task, model || undefined);
      timers.forEach(clearTimeout);
      setStatusMessage('');
      setOutput(response.output);
    } catch (err) {
      timers.forEach(clearTimeout);
      setStatusMessage('');
      setOutput(`[DEPLOYMENT ERROR]\nFailed to execute specialist agent. Error details:\n${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="agent-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={agent.name}>
      <div className="agent-modal wide-layout" onClick={(e) => e.stopPropagation()}>
        <div className="agent-modal-head">
          <div>
            <span className="agent-modal-emoji">{agent.emoji}</span>
            <div>
              <h3>{agent.name}</h3>
              <p className="section-kicker">{agent.division || 'Specialist'} Division · Roster Code: SPEC-{agent.id.slice(0, 4).toUpperCase()}</p>
            </div>
          </div>
          <button className="icon-button close-btn" type="button" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="agent-modal-grid">
          {/* Left Column: Playbook Metadata */}
          <div className="agent-modal-left">
            <div className="agent-modal-field">
              <span>Core Specialty</span>
              <p>{agent.specialty}</p>
            </div>
            
            <div className="agent-modal-field">
              <span>Trigger Conditions & Use Cases</span>
              <p>{agent.whenToUse}</p>
            </div>

            {agent.tools && agent.tools.length > 0 && (
              <div className="agent-modal-field">
                <span>Specialist Tools & KPIs</span>
                <div className="tools-pills">
                  {agent.tools.map(tool => (
                    <span key={tool} className="tool-pill">{tool}</span>
                  ))}
                </div>
              </div>
            )}

            {agent.vibe && (
              <div className="agent-modal-field">
                <span>Agent Personality Vibe</span>
                <p style={{ fontStyle: 'italic', color: 'rgba(25,23,20,0.7)' }}>"{agent.vibe}"</p>
              </div>
            )}

            <div className="agent-modal-field">
              <span>Workspace Playbook File</span>
              <code>agents/{agent.filePath}</code>
            </div>
          </div>

          {/* Right Column: Execution Console */}
          <div className="agent-modal-right">
            <div className="console-deployment-box">
              <div className="console-deployment-head">
                <Terminal size={16} />
                <span>Specialist Deployment Console</span>
              </div>

              {!output && !loading ? (
                <div className="console-deployment-form">
                  <div className="form-group">
                    <label htmlFor="modal-model-select">Execution LLM Model</label>
                    <select
                      id="modal-model-select"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    >
                      {availableModels.map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                      {availableModels.length === 0 && (
                        <option value="">{activeMode === 'claude' ? 'Claude' : 'Fallback Mode'}</option>
                      )}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="modal-task-input">Define Task Instruction</label>
                    <textarea
                      id="modal-task-input"
                      rows={4}
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      placeholder="Enter a specialized instruction for the agent..."
                    />
                  </div>

                  <button
                    className="primary-action wide deploy-btn"
                    type="button"
                    onClick={handleDeploy}
                    disabled={!task.trim()}
                  >
                    <Play size={15} />
                    Deploy {agent.name}
                  </button>
                </div>
              ) : loading ? (
                <div className="console-deployment-loading">
                  <Loader2 className="spin" size={32} />
                  <p className="loading-status-text">{statusMessage}</p>
                  <span className="loading-sub-text">This might take up to a minute. Do not close this modal.</span>
                </div>
              ) : (
                <div className="console-deployment-output">
                  <div className="output-controls">
                    <span>Inference Output</span>
                    <div className="output-action-row">
                      <button className="copy-btn-icon" onClick={handleCopy} title="Copy output">
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                      <button className="reset-btn" onClick={() => setOutput(null)}>
                        Deploy Again
                      </button>
                    </div>
                  </div>
                  <pre className="output-scroll">{output}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AgentLibrary() {
  const [query, setQuery] = useState('');
  const [openDivision, setOpenDivision] = useState<string | null>('engineering');
  const [selectedAgent, setSelectedAgent] = useState<ModalAgent>(null);
  
  // Dynamic API states with static fallback
  const [divisions, setDivisions] = useState(agentDivisions);
  const [allAgentList, setAllAgentList] = useState<AgentCard[]>(allAgents);
  
  // Health & Model states
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [activeMode, setActiveMode] = useState<string>('fallback');
  const [defaultModel, setDefaultModel] = useState<string>('');

  useEffect(() => {
    async function initRegistry() {
      try {
        const registry = await getAgentsRegistry();
        if (registry && registry.specialistDivisions && registry.specialistDivisions.length > 0) {
          // Re-map divisions to conform to AgentLibrary types
          const mappedDivisions = registry.specialistDivisions.map(div => ({
            id: div.id,
            name: div.name,
            emoji: div.emoji,
            agents: div.agents.map(ag => ({
              id: ag.id,
              name: ag.name,
              emoji: ag.emoji,
              division: div.name,
              specialty: ag.specialty || ag.description || 'Specialist execution',
              whenToUse: ag.whenToUse || 'Direct specialist tasks',
              filePath: ag.filePath,
              description: ag.description,
              tools: ag.tools,
              color: ag.color,
              vibe: ag.vibe,
              body: ag.body
            }))
          }));
          setDivisions(mappedDivisions);
          
          // Re-map flat agent list
          const mappedAllAgents = mappedDivisions.flatMap(div => div.agents);
          setAllAgentList(mappedAllAgents);
        }
      } catch (err) {
        console.warn('Failed to fetch dynamic agent registry, falling back to static roster:', err);
      }

      try {
        const health = await getBrainHealth();
        if (health && health.ollama) {
          const models = health.ollama.models.map(m => m.name || m.model || '');
          setAvailableModels(models);
          setActiveMode(health.mode);
          if (health.ollama.selectedModel) {
            setDefaultModel(health.ollama.selectedModel);
          } else if (models.length > 0) {
            setDefaultModel(models[0]);
          }
        }
      } catch (err) {
        console.warn('Failed to load active model list:', err);
      }
    }

    initRegistry();
  }, []);

  const isSearching = query.trim().length > 0;
  const searchResults = isSearching 
    ? allAgentList.filter(agent => 
        agent.name.toLowerCase().includes(query.toLowerCase()) ||
        agent.specialty.toLowerCase().includes(query.toLowerCase()) ||
        agent.whenToUse.toLowerCase().includes(query.toLowerCase()) ||
        (agent.division && agent.division.toLowerCase().includes(query.toLowerCase()))
      ) 
    : [];

  function toggleDivision(id: string) {
    setOpenDivision((current) => (current === id ? null : id));
  }

  return (
    <section className="agent-library" id="library" aria-label="Agent Library">
      <div className="section-title-row">
        <div>
          <p className="section-kicker">The Agency</p>
          <h2>{allAgentList.length} Specialist AI Agents — Ready to Deploy</h2>
        </div>
        <span>{allAgentList.length} agents across {divisions.length} divisions</span>
      </div>

      {/* Search */}
      <div className="library-search-wrap">
        <Search size={17} aria-hidden="true" />
        <input
          id="agent-library-search"
          className="library-search"
          type="search"
          placeholder="Search agents by name, specialty, or use case…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search agents"
        />
        {query && (
          <button className="icon-button" type="button" onClick={() => setQuery('')} aria-label="Clear search">
            <X size={15} />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isSearching ? (
        <div className="library-results">
          {searchResults.length === 0 ? (
            <p className="library-empty">No agents match "{query}"</p>
          ) : (
            <div className="library-grid">
              {searchResults.map((agent) => (
                <button
                  key={agent.id}
                  className="library-card"
                  type="button"
                  onClick={() => setSelectedAgent(agent)}
                >
                  <span className="library-card-emoji">{agent.emoji}</span>
                  <div>
                    <strong>{agent.name}</strong>
                    <p>{agent.specialty}</p>
                    <small className="library-card-division">{agent.division}</small>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Division Accordions */
        <div className="library-divisions">
          {divisions.map((division) => (
            <div key={division.id} className="library-division">
              <button
                className={`library-division-header ${openDivision === division.id ? 'open' : ''}`}
                type="button"
                onClick={() => toggleDivision(division.id)}
                aria-expanded={openDivision === division.id}
              >
                <span className="library-division-title">
                  <span className="library-card-emoji">{division.emoji}</span>
                  {division.name} Division
                </span>
                <span className="library-division-meta">
                  {division.agents.length} agents
                  {openDivision === division.id
                    ? <ChevronDown size={16} aria-hidden="true" />
                    : <ChevronRight size={16} aria-hidden="true" />}
                </span>
              </button>

              {openDivision === division.id && (
                <div className="library-grid">
                  {division.agents.map((agent) => (
                    <button
                      key={agent.id}
                      className="library-card"
                      type="button"
                      onClick={() => setSelectedAgent(agent)}
                    >
                      <span className="library-card-emoji">{agent.emoji}</span>
                      <div>
                        <strong>{agent.name}</strong>
                        <p>{agent.specialty}</p>
                        <small className="library-when">{agent.whenToUse}</small>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* How to Use */}
      <div className="library-howto">
        <BookOpen size={18} aria-hidden="true" />
        <p>
          Agent playbooks live in <code>TezDel_Brain/agents/</code>. Use the <strong>Specialist Deployment Console</strong> by clicking any agent card above to run execution tests directly from this dashboard.
        </p>
      </div>

      {/* Agent Detail Modal */}
      {selectedAgent && (
        <AgentModal 
          agent={selectedAgent} 
          onClose={() => setSelectedAgent(null)} 
          activeMode={activeMode}
          availableModels={availableModels}
          defaultModel={defaultModel}
        />
      )}
    </section>
  );
}
