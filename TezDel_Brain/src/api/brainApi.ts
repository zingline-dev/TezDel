export type BrainHealth = {
  api: 'ok';
  mode: 'ollama' | 'fallback';
  agentCount: number;
  ollama: {
    connected: boolean;
    ollamaUrl: string;
    selectedModel: string | null;
    error: string | null;
    models: Array<{ name: string; model?: string; modified_at?: string; size?: number }>;
  };
};

export type AgentDiagnostic = {
  id: string;
  name: string;
  status: 'ready' | 'fallback';
  detail: string;
};

export type DiagnosticsResponse = {
  mode: 'ollama' | 'fallback';
  ollama: BrainHealth['ollama'];
  agents: AgentDiagnostic[];
};

export type AgentRunResponse = {
  mode: 'ollama' | 'fallback';
  agent?: {
    id: string;
    name: string;
    shortName: string;
  };
  model: string | null;
  output: string;
  latencyMs?: number;
  warning?: string;
};

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(await response.text());
  }
  return response.json() as Promise<T>;
}

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }
  return response.json() as Promise<T>;
}

export function getBrainHealth(model?: string) {
  const query = model ? `?model=${encodeURIComponent(model)}` : '';
  return getJson<BrainHealth>(`/api/health${query}`);
}

export function getDiagnostics(model?: string) {
  const query = model ? `?model=${encodeURIComponent(model)}` : '';
  return getJson<DiagnosticsResponse>(`/api/diagnostics${query}`);
}

export function runAgent(agentId: string, task: string, model?: string) {
  return postJson<AgentRunResponse>('/api/agent/run', { agentId, task, model });
}

export function runStandup(task: string, model?: string) {
  return postJson<AgentRunResponse>('/api/standup', { task, model });
}
