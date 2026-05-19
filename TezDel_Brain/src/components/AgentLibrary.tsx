import { useState } from 'react';
import { Search, BookOpen, ChevronDown, ChevronRight, X } from 'lucide-react';
import { agentDivisions, searchAgents, allAgents, type AgentCard } from '../data/agentLibrary';

type ModalAgent = AgentCard | null;

function AgentModal({ agent, onClose }: { agent: AgentCard; onClose: () => void }) {
  return (
    <div className="agent-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={agent.name}>
      <div className="agent-modal" onClick={(e) => e.stopPropagation()}>
        <div className="agent-modal-head">
          <div>
            <span className="agent-modal-emoji">{agent.emoji}</span>
            <div>
              <h3>{agent.name}</h3>
              <p className="section-kicker">{agent.division} division</p>
            </div>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="agent-modal-body">
          <div className="agent-modal-field">
            <span>Specialty</span>
            <p>{agent.specialty}</p>
          </div>
          <div className="agent-modal-field">
            <span>When to Use</span>
            <p>{agent.whenToUse}</p>
          </div>
          <div className="agent-modal-field">
            <span>File Path</span>
            <code>agents/{agent.filePath}</code>
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

  const isSearching = query.trim().length > 0;
  const searchResults = isSearching ? searchAgents(query) : [];

  function toggleDivision(id: string) {
    setOpenDivision((current) => (current === id ? null : id));
  }

  return (
    <section className="agent-library" id="library" aria-label="Agent Library">
      <div className="section-title-row">
        <div>
          <p className="section-kicker">The Agency</p>
          <h2>144 Specialist AI Agents — Ready to Deploy</h2>
        </div>
        <span>{allAgents.length} agents across {agentDivisions.length} divisions</span>
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
          {agentDivisions.map((division) => (
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
          Agent files live in <code>TezDel_Brain/agents/</code>. Copy any agent's system prompt
          directly into Claude Code, Cursor, or any AI tool to activate it.
        </p>
      </div>

      {/* Agent Detail Modal */}
      {selectedAgent && (
        <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
      )}
    </section>
  );
}
