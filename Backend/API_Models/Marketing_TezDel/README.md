# TezDel Marketing Agent

Local AI-agent workspace for generating daily TezDel social media posts as Markdown files.

## Generate Today's Posts

```powershell
python agent/marketing_agent.py --daily --campaign inputs/campaign_request.md --output outputs\daily
```

This creates one fresh Markdown file for the current day with platform-wise posts, impactful descriptions, creative directions, hashtags, CTA, and a Reel script.

Daily file name format:

```text
YYYY-MM-DD.md
```

Each daily file includes image-generation prompts for:

- 1 feed post
- 3 stories

## Generate A Weekly Campaign

```powershell
python agent/marketing_agent.py --campaign inputs/campaign_request.md --output outputs
```

## Run Automatically Every Day

Install the Windows scheduled task:

```powershell
powershell -ExecutionPolicy Bypass -File agent\install_daily_task.ps1
```

Default schedule: every day at 9:00 AM.

Daily output folder:

```text
outputs\daily
```

The current version works locally with structured templates and no auto-posting.

## What It Generates

- Daily Instagram/Facebook/LinkedIn/X/WhatsApp post drafts
- Impactful descriptions
- Creative directions
- Hashtags and CTA
- Reel scripts
- Review notes for claims and repeated ideas

## Project Folders

- `brand/` stores TezDel facts, audience segments, content pillars, and claim rules.
- `inputs/` stores editable campaign requests.
- `agent/` stores the local Python generator.
- `outputs/` stores generated `.md` files.
- `logs/` stores generation history.
