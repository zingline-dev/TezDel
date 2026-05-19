import { createServer } from 'node:http';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { createReadStream, existsSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { homedir } from 'node:os';
import JSZip from 'jszip';

const PORT = Number(process.env.BRAIN_API_PORT ?? 8787);
const OLLAMA_URL = (process.env.OLLAMA_URL ?? 'http://127.0.0.1:11434').replace(/\/$/, '');
const REQUEST_TIMEOUT_MS = Number(process.env.BRAIN_REQUEST_TIMEOUT_MS ?? 180000);
const serveDist = process.argv.includes('--serve-dist');
const distDir = resolve('dist');
const DEFAULT_BLUEPRINT_DOCX =
  'C:\\Users\\Bishal\\Downloads\\TezDel_Complete_Startup_Blueprint (1).docx';
const BLUEPRINT_DOCX_PATH = process.env.TEZDEL_BLUEPRINT_DOCX ?? DEFAULT_BLUEPRINT_DOCX;
const memoryDir = resolve('data', 'memory');
const memoryIndexPath = join(memoryDir, 'tezdel-blueprint-memory.json');

const modelPreference = [
  'qwen2.5:7b',
  'qwen2.5',
  'qwen2:7b',
  'qwen2',
  'qwen:7b',
  'llama3.2',
  'llama3.1',
  'mistral',
  'gemma2',
  'phi3',
];

const stopWords = new Set([
  'the',
  'and',
  'for',
  'with',
  'from',
  'that',
  'this',
  'into',
  'will',
  'are',
  'you',
  'your',
  'tezdel',
  'agent',
  'agents',
  'department',
  'departments',
  'today',
  'create',
  'plan',
  'help',
  'local',
  'bhu',
  'bbsr',
]);

const sharedMemoryKeywords = [
  'executive summary',
  'competitive landscape',
  'competitive advantages',
  'business model',
  'core mission',
  'vision',
  'roadmap',
  'risk',
  'market',
  'bubaneswar',
  'bhubaneswar',
  'ondc',
];

const agentMemoryMap = {
  ceo: [
    'executive summary',
    'competitive advantages',
    'competitive weapons',
    'business model',
    'risk analysis',
    'vision',
    'roadmap',
    'funding',
    'capital',
    'unit economics',
  ],
  culture: [
    'home chef',
    'chef economics',
    'odia cuisine',
    'pakhala',
    'dalma',
    'chenna poda',
    'festival',
    'tiffin',
    'food safety',
  ],
  marketing: [
    'go-to-market',
    'gtm',
    'competitive gaps',
    'referral',
    'whatsapp',
    'community',
    'instagram',
    'chef of the day',
    'office ordering',
  ],
  operations: [
    'operational model',
    'delivery zones',
    'captain',
    'daily operations',
    'target delivery',
    'route',
    'peak lunch',
    'settled',
  ],
  kirana: [
    'kirana',
    'grocery',
    'dark store',
    'inventory',
    'daily essentials',
    'staples',
    'partner program',
    'order staging',
  ],
  customer: [
    'retention',
    'loyalty',
    'tezpass',
    'quality',
    'reviews',
    'complaints',
    'risk',
    'rating',
    'customer',
  ],
  engineering: [
    'technology stack',
    'mvp stack',
    'react native',
    'node.js',
    'postgresql',
    'firebase',
    'ondc',
    'ai',
    'route optimization',
  ],
  warfare: [
    'competitive landscape',
    'flashnow',
    'blinkit',
    'swiggy',
    'zomato',
    'weaknesses',
    'price war',
    'market',
  ],
  future: [
    'ondc',
    'phase 3',
    'ai',
    'demand forecasting',
    'menu personalization',
    'long-term',
    'east india',
    'expansion',
  ],
  analytics: [
    'unit economics',
    'financial projections',
    'daily orders',
    'aov',
    'revenue',
    'breakeven',
    'kpi',
    'orders',
    'arr',
  ],
  founder: [
    'executive summary',
    'funding',
    'capital requirements',
    'team',
    'hiring',
    'investor',
    'roadmap',
    'financial projections',
    'vision',
  ],
};

const agents = [
  {
    id: 'ceo',
    name: 'CEO Agent - The Command Center',
    shortName: 'Command Center',
    mission:
      'Control the AI organization, force accountability, align departments, and push TezDel toward category-defining dominance in Odisha.',
    personality:
      'Elite founder, wartime startup operator, visionary strategist, and execution leader.',
    kpis: [
      'Daily mission completion',
      'Weekly growth velocity',
      'Cross-department response time',
      'Bhubaneswar expansion readiness',
    ],
    leaderName: 'Besal Kumar Rout',
    empId: 'EMP Id 0001',
  },
  {
    id: 'culture',
    name: 'Odisha Culture & Home Chef AI',
    shortName: 'Home Chef AI',
    mission: 'Build the strongest Odia home-food ecosystem in India.',
    personality: 'Emotionally intelligent, culturally proud, community-driven.',
    kpis: [
      'Chef retention',
      'Order satisfaction',
      'Viral food engagement',
      'Repeat orders',
      'Home-chef revenue growth',
    ],
    leaderName: 'Debashis Mohanty',
    empId: 'EMP Id 0002',
  },
  {
    id: 'marketing',
    name: 'AI Marketing & Viral Growth Department',
    shortName: 'Marketing AI',
    mission: 'Make TezDel impossible to ignore in Bhubaneswar.',
    personality: 'Aggressive, trend-obsessed, emotionally powerful, internet-native.',
    kpis: [
      'Virality',
      'Organic growth',
      'Customer acquisition',
      'Referral growth',
      'Social engagement',
    ],
    leaderName: 'Priyaranjan Das',
    empId: 'EMP Id 0003',
  },
  {
    id: 'operations',
    name: 'AI Delivery Operations Department',
    shortName: 'Operations AI',
    mission:
      'Build the fastest and most trusted neighbourhood delivery network in Odisha.',
    personality: 'Fast, disciplined, execution-focused.',
    kpis: [
      'Delivery time',
      'Customer satisfaction',
      'Captain retention',
      'Fulfillment success',
      'Operational efficiency',
    ],
    leaderName: 'Jagannath Prasad Nayak',
    empId: 'EMP Id 0004',
  },
  {
    id: 'kirana',
    name: 'AI Kirana Intelligence Department',
    shortName: 'Kirana AI',
    mission: 'Turn every kirana into TezDel infrastructure.',
    personality: 'Highly analytical, neighbourhood-focused, efficiency-driven.',
    kpis: [
      'Partner growth',
      'Grocery fulfillment rate',
      'Inventory optimization',
      'Revenue per kirana',
    ],
    leaderName: 'Satish Kumar Sahu',
    empId: 'EMP Id 0005',
  },
  {
    id: 'customer',
    name: 'AI Customer Experience Department',
    shortName: 'Customer AI',
    mission: 'Create legendary customer trust.',
    personality: 'Empathetic, calm, intelligent, solution-oriented.',
    kpis: [
      'Satisfaction score',
      'Resolution speed',
      'Customer retention',
      'Complaint reduction',
    ],
    leaderName: 'Amitav Patnaik',
    empId: 'EMP Id 0006',
  },
  {
    id: 'engineering',
    name: 'AI Technology & Engineering Department',
    shortName: 'Engineering AI',
    mission: 'Build scalable AI-native infrastructure for TezDel.',
    personality: 'Elite startup engineer mindset.',
    kpis: ['Speed', 'Stability', 'Scalability', 'Bug reduction'],
    leaderName: 'Manoranjan Tripathy',
    empId: 'EMP Id 0007',
  },
  {
    id: 'warfare',
    name: 'AI Growth Warfare Department',
    shortName: 'Growth Warfare',
    mission: 'Outgrow competitors using unconventional strategies.',
    personality: 'Obsessed with domination, highly experimental.',
    kpis: ['Growth rate', 'CAC reduction', 'Retention', 'Market penetration'],
    leaderName: 'Rudra Prasad Mishra',
    empId: 'EMP Id 0008',
  },
  {
    id: 'future',
    name: 'AI R&D / Future Intelligence Department',
    shortName: 'Future AI',
    mission: 'Keep TezDel 3 steps ahead of the market.',
    personality: 'Futuristic, visionary, innovation-obsessed.',
    kpis: ['Innovation quality', 'Strategic advantage', 'Future readiness'],
    leaderName: 'Ashutosh Senapati',
    empId: 'EMP Id 0009',
  },
  {
    id: 'analytics',
    name: 'AI Analytics & Business Intelligence Department',
    shortName: 'Analytics AI',
    mission: 'Turn data into strategic advantage.',
    personality: 'Data-obsessed, logical, predictive.',
    kpis: ['Predictive accuracy', 'Insight quality', 'Strategic intelligence'],
    leaderName: 'Subhasis Samal',
    empId: 'EMP Id 0010',
  },
  {
    id: 'founder',
    name: 'AI Founder Assistant',
    shortName: 'Founder Assistant',
    mission: 'Act as the founder strategic right hand.',
    personality: 'Highly strategic, founder-minded.',
    kpis: [
      'Strategic clarity',
      'Investor-readiness',
      'Founder time saved',
      'Operating cadence quality',
    ],
    leaderName: 'Pradyumna Kumar Kar',
    empId: 'EMP Id 0011',
  },
];

const doctrine = `
TezDel is a Bhubaneswar-first hyperlocal food, grocery, and quick-commerce startup built around community trust, authentic Odia food, kirana empowerment, ONDC infrastructure, and ultra-fast delivery.

TezDel is not another Blinkit clone.

Identity: Odia-first, community-powered, home-chef-driven, kirana-powered, zero-commission-friendly, ONDC-native, asset-light, AI-native, and built for Tier-2 India.

Philosophy: community beats capital, trust beats discounts, authenticity beats scale, local relationships beat warehouses, home chefs beat dark stores, speed plus emotional connection wins Tier-2 India.

Core strategy: compete on trust, community, authentic food, local identity, emotional connection, AI efficiency, hyperlocal intelligence, and operational speed. Do not compete on discount wars, massive capital burn, or warehouse-first models.
`.trim();

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

function getAgent(agentId) {
  return agents.find((agent) => agent.id === agentId);
}

function decodeXml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([a-f0-9]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

function stripXmlTags(value) {
  return value.replace(/<[^>]+>/g, '');
}

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function tokenize(value) {
  return Array.from(value.toLowerCase().matchAll(/[\p{L}\p{N}₹]+/gu))
    .map((match) => match[0])
    .filter((token) => token.length > 2 && !stopWords.has(token));
}

function uniqueTokens(value) {
  return Array.from(new Set(tokenize(value)));
}

function sectionSlug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function detectSection(paragraph) {
  const trimmed = paragraph.trim();
  const match = trimmed.match(/^(\d{2})\s*[—-]\s+(.+)$/);
  if (!match) return null;
  return {
    number: match[1],
    title: `${match[1]} — ${match[2].trim()}`,
  };
}

async function extractDocxParagraphs(sourceDoc) {
  const buffer = await readFile(sourceDoc);
  const zip = await JSZip.loadAsync(buffer);
  const documentXml = await zip.file('word/document.xml')?.async('string');
  if (!documentXml) {
    throw new Error('The DOCX does not contain word/document.xml');
  }

  return Array.from(documentXml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g))
    .map(([paragraphXml]) => {
      const text = Array.from(paragraphXml.matchAll(/<w:t\b[^>]*>([\s\S]*?)<\/w:t>/g))
        .map(([, textXml]) => decodeXml(stripXmlTags(textXml)))
        .join('');
      return normalizeWhitespace(text);
    })
    .filter(Boolean);
}

function classifyChunk(section, text) {
  const haystack = `${section} ${text}`.toLowerCase();
  const shared = sharedMemoryKeywords.some((keyword) => haystack.includes(keyword));
  const agentIds = agents
    .filter((agent) =>
      (agentMemoryMap[agent.id] ?? []).some((keyword) => haystack.includes(keyword)),
    )
    .map((agent) => agent.id);

  return {
    shared,
    agentIds,
  };
}

function buildMemoryIndex(sourceDoc, paragraphs, sourceStats) {
  const sections = [];
  let current = {
    number: '00',
    title: 'Front Matter',
    paragraphs: [],
  };

  for (const paragraph of paragraphs) {
    const detected = detectSection(paragraph);
    if (detected) {
      if (current.paragraphs.length) sections.push(current);
      current = {
        number: detected.number,
        title: detected.title,
        paragraphs: [paragraph],
      };
    } else {
      current.paragraphs.push(paragraph);
    }
  }
  if (current.paragraphs.length) sections.push(current);

  const chunks = [];
  for (const section of sections) {
    let buffer = [];
    let bufferLength = 0;

    const flush = () => {
      if (!buffer.length) return;
      const text = normalizeWhitespace(buffer.join('\n'));
      const classification = classifyChunk(section.title, text);
      chunks.push({
        id: `bp-${String(chunks.length + 1).padStart(3, '0')}`,
        section: section.title,
        sectionSlug: sectionSlug(section.title),
        text,
        tokens: uniqueTokens(`${section.title} ${text}`).slice(0, 120),
        ...classification,
      });
      buffer = [];
      bufferLength = 0;
    };

    for (const paragraph of section.paragraphs) {
      const nextLength = bufferLength + paragraph.length + 1;
      if (buffer.length && nextLength > 1300) flush();
      buffer.push(paragraph);
      bufferLength += paragraph.length + 1;
    }
    flush();
  }

  return {
    version: 1,
    trained: true,
    sourceDoc,
    sourceSize: sourceStats.size,
    sourceModifiedAt: sourceStats.mtime.toISOString(),
    trainedAt: new Date().toISOString(),
    paragraphCount: paragraphs.length,
    sectionCount: sections.length,
    chunkCount: chunks.length,
    sections: sections.map((section) => ({
      number: section.number,
      title: section.title,
      paragraphCount: section.paragraphs.length,
    })),
    chunks,
  };
}

async function readMemoryIndex() {
  try {
    return JSON.parse(await readFile(memoryIndexPath, 'utf8'));
  } catch {
    return null;
  }
}

async function getTrainingStatus() {
  const sourceDoc = BLUEPRINT_DOCX_PATH;
  const sourceDocExists = existsSync(sourceDoc);
  const index = await readMemoryIndex();

  return {
    trained: Boolean(index?.trained && index?.chunkCount),
    sourceDoc,
    sourceDocExists,
    indexPath: memoryIndexPath,
    lastTrainedAt: index?.trainedAt ?? null,
    sourceModifiedAt: index?.sourceModifiedAt ?? null,
    paragraphCount: index?.paragraphCount ?? 0,
    sectionCount: index?.sectionCount ?? 0,
    chunkCount: index?.chunkCount ?? 0,
    agentCoverage: Object.fromEntries(
      agents.map((agent) => [
        agent.id,
        index?.chunks?.filter((chunk) => chunk.agentIds?.includes(agent.id)).length ?? 0,
      ]),
    ),
  };
}

async function importBlueprintMemory(sourceDoc = BLUEPRINT_DOCX_PATH) {
  if (!existsSync(sourceDoc)) {
    throw new Error(`Blueprint DOCX not found: ${sourceDoc}`);
  }

  const sourceStats = await stat(sourceDoc);
  const paragraphs = await extractDocxParagraphs(sourceDoc);
  const index = buildMemoryIndex(sourceDoc, paragraphs, sourceStats);
  await mkdir(memoryDir, { recursive: true });
  await writeFile(memoryIndexPath, `${JSON.stringify(index, null, 2)}\n`, 'utf8');
  return getTrainingStatus();
}

function scoreChunk(chunk, queryTokens, agentId) {
  let score = 0;
  if (chunk.shared) score += 6;
  if (chunk.agentIds?.includes(agentId)) score += 10;

  const chunkTokens = new Set(chunk.tokens ?? []);
  for (const token of queryTokens) {
    if (chunkTokens.has(token)) score += 2;
  }

  return score;
}

async function retrieveMemory(agent, task) {
  const index = await readMemoryIndex();
  if (!index?.trained || !Array.isArray(index.chunks)) {
    return {
      trained: false,
      context: '',
      chunks: [],
      chunkCount: 0,
      sourceDoc: BLUEPRINT_DOCX_PATH,
      lastTrainedAt: null,
    };
  }

  const queryTokens = uniqueTokens(`${agent.name} ${agent.mission} ${agent.kpis.join(' ')} ${task}`);
  const scored = index.chunks
    .map((chunk) => ({
      chunk,
      score: scoreChunk(chunk, queryTokens, agent.id),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const selected = [];
  const addChunk = (chunk) => {
    if (selected.some((item) => item.id === chunk.id)) return;
    selected.push(chunk);
  };

  scored
    .filter((entry) => entry.chunk.shared)
    .slice(0, 1)
    .forEach((entry) => addChunk(entry.chunk));
  scored
    .filter((entry) => entry.chunk.agentIds?.includes(agent.id))
    .slice(0, 2)
    .forEach((entry) => addChunk(entry.chunk));
  scored.slice(0, 3).forEach((entry) => addChunk(entry.chunk));

  const limited = selected.slice(0, 3);
  const context = limited
    .map((chunk) => {
      const text = chunk.text.length > 900 ? `${chunk.text.slice(0, 900)}...` : chunk.text;
      return `[${chunk.id} | ${chunk.section}]\n${text}`;
    })
    .join('\n\n');

  return {
    trained: true,
    context,
    chunks: limited.map((chunk) => ({
      id: chunk.id,
      section: chunk.section,
      shared: chunk.shared,
      agentIds: chunk.agentIds,
    })),
    chunkCount: limited.length,
    sourceDoc: index.sourceDoc,
    lastTrainedAt: index.trainedAt,
  };
}

function chooseModel(models, requestedModel) {
  const names = models.map((model) => model.name);
  if (requestedModel && names.includes(requestedModel)) return requestedModel;
  if (process.env.TEZDEL_MODEL && names.includes(process.env.TEZDEL_MODEL)) {
    return process.env.TEZDEL_MODEL;
  }

  const normalized = names.map((name) => name.toLowerCase());
  for (const candidate of modelPreference) {
    const index = normalized.findIndex((name) => name.includes(candidate.toLowerCase()));
    if (index >= 0) return names[index];
  }

  return names[0] ?? null;
}

async function fetchWithTimeout(url, options = {}, timeoutMs = REQUEST_TIMEOUT_MS) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function getClaudeConfig() {
  try {
    const path = resolve(homedir(), '.claude', 'settings.json');
    if (existsSync(path)) {
      const content = await readFile(path, 'utf8');
      const settings = JSON.parse(content);
      const baseUrl = settings.env?.ANTHROPIC_BASE_URL || 'https://openrouter.ai/api';
      const apiKey = settings.env?.ANTHROPIC_AUTH_TOKEN || '';
      const model = settings.env?.ANTHROPIC_MODEL || 'openrouter/free';
      return { baseUrl, apiKey, model };
    }
  } catch (err) {
    // Ignore error
  }
  return {
    baseUrl: process.env.ANTHROPIC_BASE_URL || 'https://openrouter.ai/api',
    apiKey: process.env.ANTHROPIC_AUTH_TOKEN || process.env.ANTHROPIC_API_KEY || '',
    model: process.env.ANTHROPIC_MODEL || 'openrouter/free'
  };
}

async function getOllamaStatus(requestedModel) {
  const claude = await getClaudeConfig();
  if (claude.apiKey) {
    return {
      connected: true,
      ollamaUrl: claude.baseUrl,
      models: [{ name: claude.model }],
      selectedModel: `Claude (${claude.model})`,
      error: null,
      isClaude: true,
      claudeConfig: claude
    };
  }

  try {
    const response = await fetchWithTimeout(`${OLLAMA_URL}/api/tags`, {}, 4000);
    if (!response.ok) {
      throw new Error(`Ollama returned ${response.status}`);
    }

    const data = await response.json();
    const models = Array.isArray(data.models) ? data.models : [];
    return {
      connected: true,
      ollamaUrl: OLLAMA_URL,
      models,
      selectedModel: chooseModel(models, requestedModel),
      error: null,
      isClaude: false
    };
  } catch (error) {
    return {
      connected: false,
      ollamaUrl: OLLAMA_URL,
      models: [],
      selectedModel: null,
      error: error instanceof Error ? error.message : 'Ollama is not reachable',
      isClaude: false
    };
  }
}

function buildSystemPrompt(agent, memory) {
  const memoryBlock = memory.trained
    ? `
TRAINED BLUEPRINT MEMORY
Use this memory as authoritative company context. Prefer exact numbers and facts from it. Cite chunk ids in brackets when using blueprint facts.

${memory.context}
`.trim()
    : `
TRAINED BLUEPRINT MEMORY
No blueprint memory has been imported yet. Tell the user to run Train All Agents if the task needs blueprint facts.
`.trim();

  return `
You are ${agent.name}, one department inside TEZDEL BRAIN.
Your designated leader is ${agent.leaderName} (${agent.empId}).

${doctrine}

${memoryBlock}

Your mission: ${agent.mission}
Your personality: ${agent.personality}
Your KPIs: ${agent.kpis.join(', ')}

Operating rules:
- Think like an autonomous startup operator, not a generic chatbot.
- Be direct, concrete, and execution-heavy.
- Stay Bhubaneswar/Odisha-first unless the task asks for expansion.
- Do not invent company metrics. If data is missing, say "assumption" and proceed with a test plan.
- Use trained blueprint facts when available, especially price, timing, zone, ONDC, economics, roadmap, and GTM details.
- Challenge weak execution politely but firmly.
- Return practical actions that TezDel can execute today.
- Keep output compact and structured.
`.trim();
}

function buildUserPrompt(agent, task) {
  return `
Task for ${agent.shortName}:
${task}

Return:
1. Immediate assessment
2. Top 3 actions
3. KPI impact
4. Collaboration needed from other TezDel agents
5. One risk or blocker to watch

Keep the answer under 170 words unless the user explicitly asks for a long report.
`.trim();
}

async function generateWithOllama({ agent, task, model, memory }) {
  const startedAt = Date.now();
  const response = await fetchWithTimeout(`${OLLAMA_URL}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      system: buildSystemPrompt(agent, memory),
      prompt: buildUserPrompt(agent, task),
      stream: false,
      keep_alive: '10m',
      options: {
        temperature: 0.45,
        top_p: 0.9,
        num_predict: 150,
      },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Ollama returned ${response.status}`);
  }

  const data = await response.json();
  return {
    output: data.response?.trim() || 'The model returned an empty response.',
    latencyMs: Date.now() - startedAt,
  };
}

async function generateWithClaude({ agent, task, config, memory }) {
  const startedAt = Date.now();
  let url = config.baseUrl.replace(/\/$/, '');
  if (!url.endsWith('/v1') && !url.includes('/v1/')) {
    url = `${url}/v1`;
  }
  url = `${url}/chat/completions`;

  const response = await fetchWithTimeout(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
      'HTTP-Referer': 'http://localhost:5175',
      'X-Title': 'TezDel Brain'
    },
    body: JSON.stringify({
      model: config.model || 'openrouter/free',
      messages: [
        { role: 'system', content: buildSystemPrompt(agent, memory) },
        { role: 'user', content: buildUserPrompt(agent, task) }
      ],
      temperature: 0.45
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `OpenRouter returned status ${response.status}`);
  }

  const data = await response.json();
  const output = data.choices?.[0]?.message?.content || 'Empty response';
  
  return {
    output: output.trim(),
    latencyMs: Date.now() - startedAt,
  };
}

function fallbackOutput(agent, task, reason = 'Ollama is not connected') {
  const kpiList = agent.kpis.slice(0, 3).join(', ');
  const isTimeout = /abort|timeout|timed out/i.test(reason);
  const statusLine = isTimeout
    ? 'Ollama is connected, but the model response took too long. Try again, or use a smaller/warmer model.'
    : reason;

  return `
OFFLINE STRATEGY FALLBACK

${agent.shortName} is loaded, but a real AI response was not completed.

Reason:
${statusLine}

Immediate assessment:
${agent.mission}

Top 3 actions:
1. Convert the task into one measurable Bhubaneswar-first experiment: ${task}
2. Assign one owner, one deadline, and one KPI from this agent: ${kpiList}
3. Send the required blocker or insight to the CEO Agent during the next standup.

KPI impact:
Expected impact should be tracked against ${kpiList}.

Collaboration needed:
CEO Agent should prioritize this, Analytics AI should measure it, and Engineering AI should automate the workflow once validated.

Risk:
This is fallback logic, not a real model response.
`.trim();
}

function fallbackStandup() {
  return `
OFFLINE DAILY STANDUP

CEO Mission:
Win one Bhubaneswar locality at a time by connecting home chefs, kiranas, captains, and customers into a trusted local operating cell.

Morning priorities:
1. Marketing AI: launch one Odia food story and one WhatsApp referral campaign.
2. Operations AI: identify the slowest delivery zone and assign a captain fix.
3. Kirana AI: onboard or reactivate one high-trust kirana in a priority colony.
4. Customer AI: review top complaints and escalate repeated issues.
5. Analytics AI: publish one decision-changing KPI insight.

Blockers:
Real model execution is offline until Ollama is running.
`.trim();
}

async function parseBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data));
}

async function serveStatic(req, res) {
  const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
  const requestedPath = decodeURIComponent(url.pathname);
  const cleanPath = requestedPath === '/' ? '/index.html' : requestedPath;
  const absolutePath = resolve(join(distDir, cleanPath));

  if (!absolutePath.startsWith(distDir) || !existsSync(absolutePath)) {
    const indexPath = join(distDir, 'index.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    createReadStream(indexPath).pipe(res);
    return;
  }

  res.writeHead(200, {
    'Content-Type': mimeTypes[extname(absolutePath)] ?? 'application/octet-stream',
  });
  createReadStream(absolutePath).pipe(res);
}

async function handleApi(req, res) {
  const url = new URL(req.url ?? '/', `http://${req.headers.host}`);

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/agents') {
    sendJson(res, 200, { agents });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/health') {
    const requestedModel = url.searchParams.get('model') ?? undefined;
    const ollama = await getOllamaStatus(requestedModel);
    const training = await getTrainingStatus();
    sendJson(res, 200, {
      api: 'ok',
      mode: ollama.isClaude ? 'claude' : (ollama.connected && ollama.selectedModel ? 'ollama' : 'fallback'),
      agentCount: agents.length,
      ollama,
      training,
    });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/training/status') {
    sendJson(res, 200, await getTrainingStatus());
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/training/import') {
    const body = await parseBody(req);
    const status = await importBlueprintMemory(body.sourceDoc || BLUEPRINT_DOCX_PATH);
    sendJson(res, 200, status);
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/diagnostics') {
    const requestedModel = url.searchParams.get('model') ?? undefined;
    const ollama = await getOllamaStatus(requestedModel);
    const training = await getTrainingStatus();
    const selectedModel = ollama.selectedModel;
    const agentStatuses = agents.map((agent) => ({
      id: agent.id,
      name: agent.shortName,
      status: ollama.connected && selectedModel ? 'ready' : 'fallback',
      detail:
        ollama.connected && selectedModel
          ? training.trained
            ? `Prompt + trained memory ready on ${selectedModel}.`
            : `Prompt loaded. Ready on ${selectedModel}. Train blueprint memory next.`
          : `Prompt loaded. API unavailable: ${ollama.error ?? 'no model selected'}.`,
    }));

    sendJson(res, 200, {
      mode: ollama.isClaude ? 'claude' : (ollama.connected && selectedModel ? 'ollama' : 'fallback'),
      ollama,
      training,
      agents: agentStatuses,
    });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/agent/run') {
    const body = await parseBody(req);
    const agent = getAgent(body.agentId);
    if (!agent) {
      sendJson(res, 404, { error: `Unknown agent id: ${body.agentId}` });
      return;
    }

    const task = String(body.task || agent.mission).trim();
    const memory = await retrieveMemory(agent, task);
    const ollama = await getOllamaStatus(body.model);
    const selectedModel = ollama.selectedModel;

    if (!ollama.connected || !selectedModel) {
      const reason = ollama.connected
        ? 'Ollama is connected, but no model is installed or selected.'
        : `Ollama is not reachable at ${OLLAMA_URL}. ${ollama.error ?? ''}`.trim();

      sendJson(res, 200, {
        mode: 'fallback',
        agent,
        model: null,
        output: fallbackOutput(agent, task, reason),
        memory,
        latencyMs: 0,
        warning: reason,
      });
      return;
    }

    try {
      const result = ollama.isClaude
        ? await generateWithClaude({ agent, task, config: ollama.claudeConfig, memory })
        : await generateWithOllama({ agent, task, model: selectedModel, memory });
      sendJson(res, 200, {
        mode: ollama.isClaude ? 'claude' : 'ollama',
        agent,
        model: selectedModel,
        output: result.output,
        memory,
        latencyMs: result.latencyMs,
      });
    } catch (error) {
      sendJson(res, 200, {
        mode: 'fallback',
        agent,
        model: selectedModel,
        output: fallbackOutput(
          agent,
          task,
          error instanceof Error ? error.message : 'Model generation failed',
        ),
        memory,
        latencyMs: 0,
        warning: error instanceof Error ? error.message : 'Model generation failed',
      });
    }
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/standup') {
    const body = await parseBody(req);
    const ceo = getAgent('ceo');
    const task = String(
      body.task ||
        'Create today morning standup for all TezDel Brain departments with aggressive Bhubaneswar-first execution priorities.',
    );
    const memory = ceo ? await retrieveMemory(ceo, task) : null;
    const ollama = await getOllamaStatus(body.model);
    const selectedModel = ollama.selectedModel;

    if (!ceo || !ollama.connected || !selectedModel) {
      sendJson(res, 200, {
        mode: 'fallback',
        model: null,
        output: fallbackStandup(),
        memory,
        warning: ollama.error ?? 'No model available',
      });
      return;
    }

    try {
      const result = ollama.isClaude
        ? await generateWithClaude({
            agent: ceo,
            task: `${task}\n\nInclude one priority each for Culture, Marketing, Operations, Kirana, Customer, Engineering, Growth Warfare, Future Intelligence, Analytics, and Founder Assistant.`,
            config: ollama.claudeConfig,
            memory,
          })
        : await generateWithOllama({
            agent: ceo,
            task: `${task}\n\nInclude one priority each for Culture, Marketing, Operations, Kirana, Customer, Engineering, Growth Warfare, Future Intelligence, Analytics, and Founder Assistant.`,
            model: selectedModel,
            memory,
          });
      sendJson(res, 200, {
        mode: ollama.isClaude ? 'claude' : 'ollama',
        model: selectedModel,
        output: result.output,
        memory,
        latencyMs: result.latencyMs,
      });
    } catch (error) {
      sendJson(res, 200, {
        mode: 'fallback',
        model: selectedModel,
        output: fallbackStandup(),
        memory,
        warning: error instanceof Error ? error.message : 'Model generation failed',
      });
    }
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/social/instagram') {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execFileAsync = promisify(execFile);
    const scriptPath = resolve('scripts', 'post_to_instagram.py');
    const body = await parseBody(req);

    // Allow caption override from request body
    const caption = body.caption;
    const env = { ...process.env };
    if (caption) env.TEZDEL_CAPTION_OVERRIDE = caption;

    try {
      const { stdout, stderr } = await execFileAsync('python', [scriptPath], {
        timeout: 150000,
        env,
      });
      const combined = (stdout + (stderr ? `\nSTDERR: ${stderr}` : '')).trim();
      const requestIdMatch = combined.match(/Request tracking ID:\s*(\S+)/);
      sendJson(res, 200, {
        ok: true,
        output: combined,
        requestId: requestIdMatch ? requestIdMatch[1] : null,
      });
    } catch (error) {
      const err = error;
      const output = (err?.stdout ?? '') + (err?.stderr ?? '') || (error instanceof Error ? error.message : 'Script failed');
      sendJson(res, 200, {
        ok: false,
        error: output.trim(),
        output: output.trim(),
      });
    }
    return;
  }

  sendJson(res, 404, { error: 'Not found' });

}

const server = createServer(async (req, res) => {
  try {
    if (req.url?.startsWith('/api/')) {
      await handleApi(req, res);
      return;
    }

    if (serveDist) {
      await serveStatic(req, res);
      return;
    }

    sendJson(res, 404, { error: 'API server only. Use Vite on port 5175 for the app.' });
  } catch (error) {
    sendJson(res, 500, {
      error: error instanceof Error ? error.message : 'Unexpected server error',
    });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`TezDel Brain API running at http://127.0.0.1:${PORT}`);
  console.log(`Ollama target: ${OLLAMA_URL}`);
});
