# TezDel Brain

TezDel Brain is the autonomous AI operating system dashboard for TezDel.

It encodes the master operating prompt as structured product data and includes a local API layer for running agent diagnostics, selected-agent prompts, the CEO daily standup, and localized marketing automation.

The API uses Ollama when available. If Ollama is not running, the dashboard still works in clearly labeled fallback mode so you can see which agents are loaded and which model connection is missing.

---

## Key Integrated Systems

### 1. Agent Library (144 Specialized AI Agents)
Integrated directly from the **Team_TezDel** library, you can browse, search, and retrieve all 144 specialized AI agents categorized across 16 core departments. The system prompts are stored locally in `./agents/` and registered under `./src/data/agentLibrary.ts`.

### 2. Social Publishing Tools (Instagram Automation)
Features a direct carousel publishing panel connected to the Instagram `Upload-Post` API via `./scripts/post_to_instagram.py`. Customize captions and automate multi-slide graphic deploys directly from your local dashboard console.

---

## Run Locally

```bash
npm install
npm run dev
```

The local app runs on `http://127.0.0.1:5175`.
The local API runs on `http://127.0.0.1:8787`. Start it with:

```bash
npm run api
```

## Connect A Real Local Model

Install and start Ollama, then pull a model:

```bash
ollama pull qwen2.5:7b
ollama serve
```

You can also set a preferred model:

```bash
$env:TEZDEL_MODEL="qwen2.5:7b"
npm run dev
```

Inside the app, use:

- `Check All Agents` to verify agent prompts and model connection.
- `Run Selected Agent` to make the active department answer a real task.
- `Generate CEO Standup` to create the daily operating plan.

## Build

```bash
npm run build
```

After building, serve the production app plus API:

```bash
npm start
```
