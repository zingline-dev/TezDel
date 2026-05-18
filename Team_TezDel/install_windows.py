import os
import re
import shutil
from datetime import datetime

# Paths
repo_root = r"d:\TezDel\Team_TezDel"
out_dir = r"C:\Users\Bishal\.gemini\antigravity\skills"

categories = [
    "academic", "design", "engineering", "finance", "game-development",
    "marketing", "paid-media", "product", "project-management",
    "sales", "spatial-computing", "specialized", "strategy", "support", "testing"
]

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')

def extract_field(content, field):
    match = re.search(rf'^{field}:\s*(.*)$', content, re.MULTILINE)
    return match.group(1).strip() if match else None

def extract_body(content):
    parts = content.split('---', 2)
    if len(parts) >= 3:
        return parts[2].strip()
    return ""

def main():
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)

    count = 0
    today = datetime.now().strftime('%Y-%m-%d')

    for category in categories:
        cat_path = os.path.join(repo_root, category)
        if not os.path.exists(cat_path):
            continue

        for root, _, files in os.walk(cat_path):
            for file in files:
                if not file.endswith(".md"):
                    continue
                
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                except Exception as e:
                    print(f"Failed to read {file}: {e}")
                    continue

                if not content.startswith("---"):
                    continue

                name = extract_field(content, "name")
                description = extract_field(content, "description")

                if not name or not description:
                    continue

                slug = f"agency-{slugify(name)}"
                body = extract_body(content)

                # Antigravity SKILL format
                skill_content = f"""---
name: {slug}
description: {description}
risk: low
source: community
date_added: '{today}'
---
{body}
"""
                skill_dir = os.path.join(out_dir, slug)
                os.makedirs(skill_dir, exist_ok=True)
                
                skill_file = os.path.join(skill_dir, "SKILL.md")
                with open(skill_file, 'w', encoding='utf-8') as f:
                    f.write(skill_content)
                
                count += 1
                print(f"Installed: {name} -> {slug}")

    print(f"\nSuccessfully converted and installed {count} Agency Agents to Antigravity!")

if __name__ == "__main__":
    main()
