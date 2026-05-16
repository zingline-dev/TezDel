$ErrorActionPreference = "Stop"

$TaskName = "TezDel Daily Social Media Post Generator"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Runner = Join-Path $Root "agent\run_daily_marketing_agent.ps1"

$Action = New-ScheduledTaskAction `
    -Execute "powershell.exe" `
    -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Runner`"" `
    -WorkingDirectory $Root

$Trigger = New-ScheduledTaskTrigger -Daily -At 9:00AM
$Settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries

Register-ScheduledTask `
    -TaskName $TaskName `
    -Action $Action `
    -Trigger $Trigger `
    -Settings $Settings `
    -Description "Automatically generates TezDel social media post Markdown files every day." `
    -Force

Write-Host "Installed scheduled task: $TaskName"
Write-Host "It will generate Markdown output daily at 9:00 AM in: $Root\outputs\daily"
