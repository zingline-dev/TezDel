import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { createReadStream, existsSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const PORT = Number(process.env.BRAIN_API_PORT ?? 8787);
const OLLAMA_URL = (process.env.OLLAMA_URL ?? 'http://127.0.0.1:11434').replace(/\/$/, '');
const REQUEST_TIMEOUT_MS = Number(process.env.BRAIN_REQUEST_TIMEOUT_MS ?? 180000);
const serveDist = process.argv.includes('--serve-dist');
const distDir = resolve('dist');

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
  },
  {
    id: 'engineering',
    name: 'AI Technology & Engineering Department',
    shortName: 'Engineering AI',
    mission: 'Build scalable AI-native infrastructure for TezDel.',
    personality: 'Elite startup engineer mindset.',
    kpis: ['Speed', 'Stability', 'Scalability', 'Bug reduction'],
  },
  {
    id: 'warfare',
    name: 'AI Growth Warfare Department',
    shortName: 'Growth Warfare',
    mission: 'Outgrow competitors using unconventional strategies.',
    personality: 'Obsessed with domination, highly experimental.',
    kpis: ['Growth rate', 'CAC reduction', 'Retention', 'Market penetration'],
  },
  {
    id: 'future',
    name: 'AI R&D / Future Intelligence Department',
    shortName: 'Future AI',
    mission: 'Keep TezDel 3 steps ahead of the market.',
    personality: 'Futuristic, visionary, innovation-obsessed.',
    kpis: ['Innovation quality', 'Strategic advantage', 'Future readiness'],
  },
  {
    id: 'analytics',
    name: 'AI Analytics & Business Intelligence Department',
    shortName: 'Analytics AI',
    mission: 'Turn data into strategic advantage.',
    personality: 'Data-obsessed, logical, predictive.',
    kpis: ['Predictive accuracy', 'Insight quality', 'Strategic intelligence'],
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

async function getOllamaStatus(requestedModel) {
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
    };
  } catch (error) {
    return {
      connected: false,
      ollamaUrl: OLLAMA_URL,
      models: [],
      selectedModel: null,
      error: error instanceof Error ? error.message : 'Ollama is not reachable',
    };
  }
}

function buildSystemPrompt(agent) {
  return `
You are ${agent.name}, one department inside TEZDEL BRAIN.

${doctrine}

Your mission: ${agent.mission}
Your personality: ${agent.personality}
Your KPIs: ${agent.kpis.join(', ')}

Operating rules:
- Think like an autonomous startup operator, not a generic chatbot.
- Be direct, concrete, and execution-heavy.
- Stay Bhubaneswar/Odisha-first unless the task asks for expansion.
- Do not invent company metrics. If data is missing, say "assumption" and proceed with a test plan.
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
`.trim();
}

async function generateWithOllama({ agent, task, model }) {
  const startedAt = Date.now();
  const response = await fetchWithTimeout(`${OLLAMA_URL}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      system: buildSystemPrompt(agent),
      prompt: buildUserPrompt(agent, task),
      stream: false,
      keep_alive: '10m',
      options: {
        temperature: 0.45,
        top_p: 0.9,
        num_predict: 220,
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
    sendJson(res, 200, {
      api: 'ok',
      mode: ollama.connected && ollama.selectedModel ? 'ollama' : 'fallback',
      agentCount: agents.length,
      ollama,
    });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/diagnostics') {
    const requestedModel = url.searchParams.get('model') ?? undefined;
    const ollama = await getOllamaStatus(requestedModel);
    const selectedModel = ollama.selectedModel;
    const agentStatuses = agents.map((agent) => ({
      id: agent.id,
      name: agent.shortName,
      status: ollama.connected && selectedModel ? 'ready' : 'fallback',
      detail:
        ollama.connected && selectedModel
          ? `Prompt loaded. Ready on ${selectedModel}.`
          : `Prompt loaded. Ollama unavailable: ${ollama.error ?? 'no model selected'}.`,
    }));

    sendJson(res, 200, {
      mode: ollama.connected && selectedModel ? 'ollama' : 'fallback',
      ollama,
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
        latencyMs: 0,
        warning: reason,
      });
      return;
    }

    try {
      const result = await generateWithOllama({ agent, task, model: selectedModel });
      sendJson(res, 200, {
        mode: 'ollama',
        agent,
        model: selectedModel,
        output: result.output,
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
    const ollama = await getOllamaStatus(body.model);
    const selectedModel = ollama.selectedModel;

    if (!ceo || !ollama.connected || !selectedModel) {
      sendJson(res, 200, {
        mode: 'fallback',
        model: null,
        output: fallbackStandup(),
        warning: ollama.error ?? 'No Ollama model available',
      });
      return;
    }

    try {
      const result = await generateWithOllama({
        agent: ceo,
        task: `${task}\n\nInclude one priority each for Culture, Marketing, Operations, Kirana, Customer, Engineering, Growth Warfare, Future Intelligence, Analytics, and Founder Assistant.`,
        model: selectedModel,
      });
      sendJson(res, 200, {
        mode: 'ollama',
        model: selectedModel,
        output: result.output,
        latencyMs: result.latencyMs,
      });
    } catch (error) {
      sendJson(res, 200, {
        mode: 'fallback',
        model: selectedModel,
        output: fallbackStandup(),
        warning: error instanceof Error ? error.message : 'Model generation failed',
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
