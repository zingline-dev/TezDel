// Auto-generated registry of The Agency's 144 specialist agents
// Organized by division for the TezDel Brain Agent Library tab

export type AgentCard = {
  id: string;
  name: string;
  emoji: string;
  division: string;
  specialty: string;
  whenToUse: string;
  filePath: string;
};

export type Division = {
  id: string;
  name: string;
  emoji: string;
  agents: AgentCard[];
};

export const agentDivisions: Division[] = [
  {
    id: 'engineering',
    name: 'Engineering',
    emoji: '💻',
    agents: [
      { id: 'frontend-developer', name: 'Frontend Developer', emoji: '🎨', division: 'engineering', specialty: 'React/Vue/Angular, UI implementation, performance', whenToUse: 'Modern web apps, pixel-perfect UIs, Core Web Vitals optimization', filePath: 'engineering/engineering-frontend-developer.md' },
      { id: 'backend-architect', name: 'Backend Architect', emoji: '🏗️', division: 'engineering', specialty: 'API design, database architecture, scalability', whenToUse: 'Server-side systems, microservices, cloud infrastructure', filePath: 'engineering/engineering-backend-architect.md' },
      { id: 'mobile-app-builder', name: 'Mobile App Builder', emoji: '📱', division: 'engineering', specialty: 'iOS/Android, React Native, Flutter', whenToUse: 'Native and cross-platform mobile applications', filePath: 'engineering/engineering-mobile-app-builder.md' },
      { id: 'ai-engineer', name: 'AI Engineer', emoji: '🤖', division: 'engineering', specialty: 'ML models, deployment, AI integration', whenToUse: 'Machine learning features, data pipelines, AI-powered apps', filePath: 'engineering/engineering-ai-engineer.md' },
      { id: 'devops-automator', name: 'DevOps Automator', emoji: '🚀', division: 'engineering', specialty: 'CI/CD, infrastructure automation, cloud ops', whenToUse: 'Pipeline development, deployment automation, monitoring', filePath: 'engineering/engineering-devops-automator.md' },
      { id: 'rapid-prototyper', name: 'Rapid Prototyper', emoji: '⚡', division: 'engineering', specialty: 'Fast POC development, MVPs', whenToUse: 'Quick proof-of-concepts, hackathon projects, fast iteration', filePath: 'engineering/engineering-rapid-prototyper.md' },
      { id: 'senior-developer', name: 'Senior Developer', emoji: '💎', division: 'engineering', specialty: 'Laravel/Livewire, advanced patterns', whenToUse: 'Complex implementations, architecture decisions', filePath: 'engineering/engineering-senior-developer.md' },
      { id: 'security-engineer', name: 'Security Engineer', emoji: '🔒', division: 'engineering', specialty: 'Threat modeling, secure code review, security architecture', whenToUse: 'Application security, vulnerability assessment', filePath: 'engineering/engineering-security-engineer.md' },
      { id: 'software-architect', name: 'Software Architect', emoji: '🏛️', division: 'engineering', specialty: 'System design, DDD, architectural patterns', whenToUse: 'Architecture decisions, domain modeling, system evolution', filePath: 'engineering/engineering-software-architect.md' },
      { id: 'database-optimizer', name: 'Database Optimizer', emoji: '🗄️', division: 'engineering', specialty: 'Schema design, query optimization, indexing', whenToUse: 'PostgreSQL/MySQL tuning, slow query debugging', filePath: 'engineering/engineering-database-optimizer.md' },
      { id: 'code-reviewer', name: 'Code Reviewer', emoji: '👁️', division: 'engineering', specialty: 'Constructive code review, security, maintainability', whenToUse: 'PR reviews, code quality gates, mentoring', filePath: 'engineering/engineering-code-reviewer.md' },
      { id: 'data-engineer', name: 'Data Engineer', emoji: '🔧', division: 'engineering', specialty: 'Data pipelines, lakehouse architecture, ETL/ELT', whenToUse: 'Building reliable data infrastructure and warehousing', filePath: 'engineering/engineering-data-engineer.md' },
      { id: 'technical-writer', name: 'Technical Writer', emoji: '📚', division: 'engineering', specialty: 'Developer docs, API reference, tutorials', whenToUse: 'Clear, accurate technical documentation', filePath: 'engineering/engineering-technical-writer.md' },
      { id: 'embedded-firmware-engineer', name: 'Embedded Firmware Engineer', emoji: '🔩', division: 'engineering', specialty: 'Bare-metal, RTOS, ESP32/STM32/Nordic firmware', whenToUse: 'Production-grade embedded systems and IoT devices', filePath: 'engineering/engineering-embedded-firmware-engineer.md' },
      { id: 'incident-response-commander', name: 'Incident Response Commander', emoji: '🚨', division: 'engineering', specialty: 'Incident management, post-mortems, on-call', whenToUse: 'Managing production incidents and building incident readiness', filePath: 'engineering/engineering-incident-response-commander.md' },
      { id: 'git-workflow-master', name: 'Git Workflow Master', emoji: '🌿', division: 'engineering', specialty: 'Branching strategies, conventional commits, advanced Git', whenToUse: 'Git workflow design, history cleanup, CI-friendly branch management', filePath: 'engineering/engineering-git-workflow-master.md' },
      { id: 'sre', name: 'SRE', emoji: '🛡️', division: 'engineering', specialty: 'SLOs, error budgets, observability, chaos engineering', whenToUse: 'Production reliability, toil reduction, capacity planning', filePath: 'engineering/engineering-sre.md' },
      { id: 'voice-ai-integration-engineer', name: 'Voice AI Integration Engineer', emoji: '🎙️', division: 'engineering', specialty: 'Speech-to-text pipelines, Whisper, ASR, speaker diarization', whenToUse: 'End-to-end transcription pipelines, audio preprocessing', filePath: 'engineering/engineering-voice-ai-integration-engineer.md' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    emoji: '📢',
    agents: [
      { id: 'growth-hacker', name: 'Growth Hacker', emoji: '🚀', division: 'marketing', specialty: 'Rapid user acquisition, viral loops, experiments', whenToUse: 'Explosive growth, user acquisition, conversion optimization', filePath: 'marketing/marketing-growth-hacker.md' },
      { id: 'content-creator', name: 'Content Creator', emoji: '📝', division: 'marketing', specialty: 'Multi-platform content, editorial calendars', whenToUse: 'Content strategy, copywriting, brand storytelling', filePath: 'marketing/marketing-content-creator.md' },
      { id: 'tiktok-strategist', name: 'TikTok Strategist', emoji: '📱', division: 'marketing', specialty: 'Viral content, algorithm optimization', whenToUse: 'TikTok growth, viral content, Gen Z/Millennial audience', filePath: 'marketing/marketing-tiktok-strategist.md' },
      { id: 'instagram-curator', name: 'Instagram Curator', emoji: '📸', division: 'marketing', specialty: 'Visual storytelling, community building', whenToUse: 'Instagram strategy, aesthetic development, visual content', filePath: 'marketing/marketing-instagram-curator.md' },
      { id: 'linkedin-content-creator', name: 'LinkedIn Content Creator', emoji: '💼', division: 'marketing', specialty: 'Personal branding, thought leadership', whenToUse: 'LinkedIn growth, professional audience building, B2B content', filePath: 'marketing/marketing-linkedin-content-creator.md' },
      { id: 'twitter-engager', name: 'Twitter Engager', emoji: '🐦', division: 'marketing', specialty: 'Real-time engagement, thought leadership', whenToUse: 'Twitter strategy, LinkedIn campaigns, professional social', filePath: 'marketing/marketing-twitter-engager.md' },
      { id: 'reddit-community-builder', name: 'Reddit Community Builder', emoji: '🤝', division: 'marketing', specialty: 'Authentic engagement, value-driven content', whenToUse: 'Reddit strategy, community trust, authentic marketing', filePath: 'marketing/marketing-reddit-community-builder.md' },
      { id: 'seo-specialist', name: 'SEO Specialist', emoji: '🔍', division: 'marketing', specialty: 'Technical SEO, content strategy, link building', whenToUse: 'Driving sustainable organic search growth', filePath: 'marketing/marketing-seo-specialist.md' },
      { id: 'app-store-optimizer', name: 'App Store Optimizer', emoji: '📱', division: 'marketing', specialty: 'ASO, conversion optimization, discoverability', whenToUse: 'App marketing, store optimization, app growth', filePath: 'marketing/marketing-app-store-optimizer.md' },
      { id: 'carousel-growth-engine', name: 'Carousel Growth Engine', emoji: '🎠', division: 'marketing', specialty: 'TikTok/Instagram carousels, autonomous publishing', whenToUse: 'Generating and publishing viral carousel content', filePath: 'marketing/marketing-carousel-growth-engine.md' },
      { id: 'social-media-strategist', name: 'Social Media Strategist', emoji: '🌐', division: 'marketing', specialty: 'Cross-platform strategy, campaigns', whenToUse: 'Overall social strategy, multi-platform campaigns', filePath: 'marketing/marketing-social-media-strategist.md' },
      { id: 'ai-citation-strategist', name: 'AI Citation Strategist', emoji: '🔮', division: 'marketing', specialty: 'AEO/GEO, AI recommendation visibility, citation auditing', whenToUse: 'Improving brand visibility across ChatGPT, Claude, Gemini, Perplexity', filePath: 'marketing/marketing-ai-citation-strategist.md' },
    ],
  },
  {
    id: 'design',
    name: 'Design',
    emoji: '🎨',
    agents: [
      { id: 'ui-designer', name: 'UI Designer', emoji: '🎯', division: 'design', specialty: 'Visual design, component libraries, design systems', whenToUse: 'Interface creation, brand consistency, component design', filePath: 'design/design-ui-designer.md' },
      { id: 'ux-researcher', name: 'UX Researcher', emoji: '🔍', division: 'design', specialty: 'User testing, behavior analysis, research', whenToUse: 'Understanding users, usability testing, design insights', filePath: 'design/design-ux-researcher.md' },
      { id: 'ux-architect', name: 'UX Architect', emoji: '🏛️', division: 'design', specialty: 'Technical architecture, CSS systems, implementation', whenToUse: 'Developer-friendly foundations, implementation guidance', filePath: 'design/design-ux-architect.md' },
      { id: 'brand-guardian', name: 'Brand Guardian', emoji: '🎭', division: 'design', specialty: 'Brand identity, consistency, positioning', whenToUse: 'Brand strategy, identity development, guidelines', filePath: 'design/design-brand-guardian.md' },
      { id: 'visual-storyteller', name: 'Visual Storyteller', emoji: '📖', division: 'design', specialty: 'Visual narratives, multimedia content', whenToUse: 'Compelling visual stories, brand storytelling', filePath: 'design/design-visual-storyteller.md' },
      { id: 'whimsy-injector', name: 'Whimsy Injector', emoji: '✨', division: 'design', specialty: 'Personality, delight, playful interactions', whenToUse: 'Adding joy, micro-interactions, Easter eggs, brand personality', filePath: 'design/design-whimsy-injector.md' },
      { id: 'image-prompt-engineer', name: 'Image Prompt Engineer', emoji: '📷', division: 'design', specialty: 'AI image generation prompts, photography', whenToUse: 'Photography prompts for Midjourney, DALL-E, Stable Diffusion', filePath: 'design/design-image-prompt-engineer.md' },
    ],
  },
  {
    id: 'sales',
    name: 'Sales',
    emoji: '💰',
    agents: [
      { id: 'outbound-strategist', name: 'Outbound Strategist', emoji: '🎯', division: 'sales', specialty: 'Signal-based prospecting, multi-channel sequences', whenToUse: 'Building pipeline through research-driven outreach', filePath: 'sales/sales-outbound-strategist.md' },
      { id: 'discovery-coach', name: 'Discovery Coach', emoji: '🔍', division: 'sales', specialty: 'SPIN, Gap Selling, Sandler — question design', whenToUse: 'Preparing for discovery calls, qualifying opportunities', filePath: 'sales/sales-discovery-coach.md' },
      { id: 'deal-strategist', name: 'Deal Strategist', emoji: '♟️', division: 'sales', specialty: 'MEDDPICC qualification, competitive positioning', whenToUse: 'Scoring deals, exposing pipeline risk, building win strategies', filePath: 'sales/sales-deal-strategist.md' },
      { id: 'sales-engineer', name: 'Sales Engineer', emoji: '🛠️', division: 'sales', specialty: 'Technical demos, POC scoping, competitive battlecards', whenToUse: 'Pre-sales technical wins, demo prep, competitive positioning', filePath: 'sales/sales-engineer.md' },
      { id: 'proposal-strategist', name: 'Proposal Strategist', emoji: '🏹', division: 'sales', specialty: 'RFP response, win themes, narrative structure', whenToUse: 'Writing proposals that persuade, not just comply', filePath: 'sales/sales-proposal-strategist.md' },
      { id: 'pipeline-analyst', name: 'Pipeline Analyst', emoji: '📊', division: 'sales', specialty: 'Forecasting, pipeline health, deal velocity', whenToUse: 'Pipeline reviews, forecast accuracy, revenue operations', filePath: 'sales/sales-pipeline-analyst.md' },
      { id: 'account-strategist', name: 'Account Strategist', emoji: '🗺️', division: 'sales', specialty: 'Land-and-expand, QBRs, stakeholder mapping', whenToUse: 'Post-sale expansion, account planning, NRR growth', filePath: 'sales/sales-account-strategist.md' },
      { id: 'sales-coach', name: 'Sales Coach', emoji: '🏋️', division: 'sales', specialty: 'Rep development, call coaching, pipeline review', whenToUse: 'Making every rep and every deal better', filePath: 'sales/sales-coach.md' },
    ],
  },
  {
    id: 'product',
    name: 'Product',
    emoji: '📊',
    agents: [
      { id: 'product-manager', name: 'Product Manager', emoji: '🧭', division: 'product', specialty: 'Full lifecycle product ownership', whenToUse: 'Discovery, PRDs, roadmap planning, GTM, outcome measurement', filePath: 'product/product-manager.md' },
      { id: 'sprint-prioritizer', name: 'Sprint Prioritizer', emoji: '🎯', division: 'product', specialty: 'Agile planning, feature prioritization', whenToUse: 'Sprint planning, resource allocation, backlog management', filePath: 'product/product-sprint-prioritizer.md' },
      { id: 'trend-researcher', name: 'Trend Researcher', emoji: '🔍', division: 'product', specialty: 'Market intelligence, competitive analysis', whenToUse: 'Market research, opportunity assessment, trend identification', filePath: 'product/product-trend-researcher.md' },
      { id: 'feedback-synthesizer', name: 'Feedback Synthesizer', emoji: '💬', division: 'product', specialty: 'User feedback analysis, insights extraction', whenToUse: 'Feedback analysis, user insights, product priorities', filePath: 'product/product-feedback-synthesizer.md' },
      { id: 'behavioral-nudge-engine', name: 'Behavioral Nudge Engine', emoji: '🧠', division: 'product', specialty: 'Behavioral psychology, nudge design, engagement', whenToUse: 'Maximizing user motivation through behavioral science', filePath: 'product/product-behavioral-nudge-engine.md' },
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    emoji: '🧪',
    agents: [
      { id: 'evidence-collector', name: 'Evidence Collector', emoji: '📸', division: 'testing', specialty: 'Screenshot-based QA, visual proof', whenToUse: 'UI testing, visual verification, bug documentation', filePath: 'testing/testing-evidence-collector.md' },
      { id: 'reality-checker', name: 'Reality Checker', emoji: '🔍', division: 'testing', specialty: 'Evidence-based certification, quality gates', whenToUse: 'Production readiness, quality approval, release certification', filePath: 'testing/testing-reality-checker.md' },
      { id: 'performance-benchmarker', name: 'Performance Benchmarker', emoji: '⚡', division: 'testing', specialty: 'Performance testing, optimization', whenToUse: 'Speed testing, load testing, performance tuning', filePath: 'testing/testing-performance-benchmarker.md' },
      { id: 'api-tester', name: 'API Tester', emoji: '🔌', division: 'testing', specialty: 'API validation, integration testing', whenToUse: 'API testing, endpoint verification, integration QA', filePath: 'testing/testing-api-tester.md' },
      { id: 'accessibility-auditor', name: 'Accessibility Auditor', emoji: '♿', division: 'testing', specialty: 'WCAG auditing, assistive technology testing', whenToUse: 'Accessibility compliance, screen reader testing, inclusive design', filePath: 'testing/testing-accessibility-auditor.md' },
    ],
  },
  {
    id: 'finance',
    name: 'Finance',
    emoji: '💵',
    agents: [
      { id: 'bookkeeper-controller', name: 'Bookkeeper & Controller', emoji: '📒', division: 'finance', specialty: 'Month-end close, reconciliation, GAAP compliance', whenToUse: 'Day-to-day accounting operations, audit readiness', filePath: 'finance/finance-bookkeeper-controller.md' },
      { id: 'financial-analyst', name: 'Financial Analyst', emoji: '📊', division: 'finance', specialty: 'Financial modeling, forecasting, scenario analysis', whenToUse: 'Three-statement models, variance analysis, decision support', filePath: 'finance/finance-financial-analyst.md' },
      { id: 'fpa-analyst', name: 'FP&A Analyst', emoji: '📈', division: 'finance', specialty: 'Budgeting, rolling forecasts, variance analysis', whenToUse: 'Annual operating plans, monthly business reviews', filePath: 'finance/finance-fpa-analyst.md' },
      { id: 'investment-researcher', name: 'Investment Researcher', emoji: '🔍', division: 'finance', specialty: 'Due diligence, portfolio analysis, asset valuation', whenToUse: 'Investment thesis development, risk assessment, market research', filePath: 'finance/finance-investment-researcher.md' },
      { id: 'tax-strategist', name: 'Tax Strategist', emoji: '🏛️', division: 'finance', specialty: 'Tax optimization, multi-jurisdictional compliance', whenToUse: 'Entity structuring, ETR analysis, audit defense', filePath: 'finance/finance-tax-strategist.md' },
    ],
  },
  {
    id: 'specialized',
    name: 'Specialized',
    emoji: '🎯',
    agents: [
      { id: 'agents-orchestrator', name: 'Agents Orchestrator', emoji: '🎭', division: 'specialized', specialty: 'Multi-agent coordination, workflow management', whenToUse: 'Complex projects requiring multiple agent coordination', filePath: 'specialized/agents-orchestrator.md' },
      { id: 'mcp-builder', name: 'MCP Builder', emoji: '🔌', division: 'specialized', specialty: 'Model Context Protocol servers, AI agent tooling', whenToUse: 'Building MCP servers that extend AI agent capabilities', filePath: 'specialized/specialized-mcp-builder.md' },
      { id: 'workflow-architect', name: 'Workflow Architect', emoji: '🗺️', division: 'specialized', specialty: 'Workflow discovery, mapping, and specification', whenToUse: 'Mapping every path through a system before code is written', filePath: 'specialized/specialized-workflow-architect.md' },
      { id: 'compliance-auditor', name: 'Compliance Auditor', emoji: '📋', division: 'specialized', specialty: 'SOC 2, ISO 27001, HIPAA, PCI-DSS', whenToUse: 'Guiding organizations through compliance certification', filePath: 'specialized/compliance-auditor.md' },
      { id: 'document-generator', name: 'Document Generator', emoji: '📄', division: 'specialized', specialty: 'PDF, PPTX, DOCX, XLSX generation from code', whenToUse: 'Professional document creation, reports, data visualization', filePath: 'specialized/specialized-document-generator.md' },
      { id: 'customer-service', name: 'Customer Service', emoji: '🎧', division: 'specialized', specialty: 'Omnichannel support, complaint handling, retention', whenToUse: 'Any industry customer support — retail, SaaS, hospitality', filePath: 'specialized/customer-service.md' },
      { id: 'hr-onboarding', name: 'HR Onboarding', emoji: '🤝', division: 'specialized', specialty: 'Pre-boarding, compliance, benefits enrollment', whenToUse: 'Any company onboarding new hires — from startups to enterprise', filePath: 'specialized/hr-onboarding.md' },
      { id: 'legal-document-review', name: 'Legal Document Review', emoji: '⚖️', division: 'specialized', specialty: 'Contract review, risk flagging, version comparison', whenToUse: 'Attorney-ready first-pass review across any practice area', filePath: 'specialized/legal-document-review.md' },
    ],
  },
];

export const allAgents: AgentCard[] = agentDivisions.flatMap((div) => div.agents);

export function getAgentsByDivision(divisionId: string): AgentCard[] {
  return agentDivisions.find((div) => div.id === divisionId)?.agents ?? [];
}

export function searchAgents(query: string): AgentCard[] {
  const q = query.toLowerCase();
  return allAgents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(q) ||
      agent.specialty.toLowerCase().includes(q) ||
      agent.whenToUse.toLowerCase().includes(q) ||
      agent.division.toLowerCase().includes(q),
  );
}
