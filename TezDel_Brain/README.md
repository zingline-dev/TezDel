# TezDel Brain

TezDel Brain is the autonomous AI operating system dashboard for TezDel.

It encodes the master operating prompt as structured product data and includes a local API layer for running agent diagnostics, selected-agent prompts, and the CEO daily standup.

The API uses Ollama when available. If Ollama is not running, the dashboard still works in clearly labeled fallback mode so you can see which agents are loaded and which model connection is missing.

## Run Locally

```bash
npm install
npm run dev
```

The local app runs on `http://127.0.0.1:5175`.

The local API runs on `http://127.0.0.1:8787`.

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
