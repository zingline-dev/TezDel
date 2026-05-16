$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Python = "C:\Users\Bishal\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
$Campaign = Join-Path $Root "inputs\campaign_request.md"
$Output = Join-Path $Root "outputs\daily"
$Agent = Join-Path $Root "agent\marketing_agent.py"

New-Item -ItemType Directory -Force -Path $Output | Out-Null

& $Python $Agent --daily --campaign $Campaign --output $Output
