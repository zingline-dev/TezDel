import { useMemo, useState } from 'react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bike,
  Brain,
  BriefcaseBusiness,
  Check,
  ChefHat,
  ClipboardList,
  Code2,
  Command,
  Copy,
  Crosshair,
  HeartHandshake,
  Megaphone,
  Radio,
  ShieldCheck,
  Store,
  Telescope,
  Utensils,
  Zap,
} from 'lucide-react';
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

  const activeDepartment = useMemo(
    () => departments.find((department) => department.id === activeId) ?? departments[0],
    [activeId],
  );

  async function handleCopyPrompt() {
    await navigator.clipboard.writeText(masterPrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
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
        <nav className="topnav" aria-label="Primary">
          <a href="#agents">Agents</a>
          <a href="#loop">Execution Loop</a>
          <a href="#prompt">Master Prompt</a>
        </nav>
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
                  onClick={() => setActiveId(department.id)}
                >
                  <AgentIcon department={department} />
                  <span>{department.shortName}</span>
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
      </main>
    </div>
  );
}
