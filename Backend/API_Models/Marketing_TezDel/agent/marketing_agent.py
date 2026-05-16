from __future__ import annotations

import argparse
import datetime as dt
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

PILLARS = [
    "Odia Food Pride",
    "Fast Neighbourhood Delivery",
    "Zero Commission For Restaurants",
    "Kirana Partner Network",
    "Local Trust",
    "ONDC Future",
]

POST_TYPES = ["Reel", "Carousel", "Static Post", "Story", "Founder Note", "WhatsApp Broadcast", "Partner Outreach"]
PLATFORMS = ["Instagram", "Facebook", "LinkedIn", "X", "WhatsApp"]

DAILY_THEMES = [
    {
        "pillar": "Odia Food Pride",
        "topic": "Real Odia lunch for busy Patia workdays",
        "hook": "Bhubaneswar deserves food delivery that remembers home.",
        "description": "Use TezDel to make authentic Odia meals feel discoverable, modern, and easy to order for office workers, students, and families.",
        "visual": "A warm lunch plate with pakhala, dalma, besara, or chenna poda near a desk, PG room, or apartment table.",
    },
    {
        "pillar": "Zero Commission For Restaurants",
        "topic": "Restaurants should keep more from every order",
        "hook": "A fair delivery platform should help restaurants grow, not eat their margin.",
        "description": "Explain TezDel's flat-fee restaurant model in simple language and make local restaurant owners feel respected.",
        "visual": "A local restaurant counter, owner packing an order, and a clean text overlay about fair delivery economics.",
    },
    {
        "pillar": "Kirana Partner Network",
        "topic": "Your neighbourhood kirana can become digital",
        "hook": "The fastest grocery store may already be around the corner.",
        "description": "Show that TezDel uses trusted neighbourhood stores instead of distant warehouses, making grocery delivery feel more local and practical.",
        "visual": "A familiar kirana shelf with daily essentials, a phone order notification, and a local delivery handoff.",
    },
    {
        "pillar": "Local Trust",
        "topic": "Delivery by people who know the locality",
        "hook": "Fast feels better when the delivery network understands your neighbourhood.",
        "description": "Position neighbourhood captains as a trust advantage for apartments, colonies, students, and family households.",
        "visual": "A delivery handoff at an apartment gate or colony lane with a clean TezDel brand cue.",
    },
    {
        "pillar": "ONDC Future",
        "topic": "Open commerce for Bhubaneswar sellers",
        "hook": "Local sellers deserve reach beyond one closed app.",
        "description": "Introduce ONDC in simple terms: more discovery for restaurants, home chefs, and kiranas through open digital commerce.",
        "visual": "A simple network-style creative showing restaurants, home chefs, kiranas, customers, and TezDel connected.",
    },
]


def read_file(path: Path) -> str:
    return path.read_text(encoding="utf-8") if path.exists() else ""


def parse_request(text: str) -> dict[str, str]:
    data: dict[str, str] = {}
    for line in text.splitlines():
        if ":" in line:
            key, value = line.split(":", 1)
            data[key.strip().lower().replace(" ", "_")] = value.strip()
    return data


def slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "tezdel-campaign"


def build_calendar(days: int, focus: str, cta: str) -> list[dict[str, str]]:
    topics = [
        "Real Odia lunch for busy Patia workdays",
        "Why local restaurants deserve zero commission",
        "Meet the home chefs behind Bhubaneswar's comfort food",
        "Your neighbourhood kirana, now ready for digital orders",
        "Fast delivery built around local captains",
        "How TezDel is different from metro-first delivery apps",
        "Early access call for customers and partners",
    ]
    calendar = []
    for index in range(days):
        calendar.append(
            {
                "day": f"Day {index + 1}",
                "platform": PLATFORMS[index % len(PLATFORMS)],
                "pillar": PILLARS[index % len(PILLARS)],
                "post_type": POST_TYPES[index % len(POST_TYPES)],
                "topic": topics[index % len(topics)],
                "hook": make_hook(topics[index % len(topics)], focus),
                "cta": cta,
            }
        )
    return calendar


def make_hook(topic: str, focus: str) -> str:
    if "Odia" in topic:
        return "Bhubaneswar deserves food delivery that remembers home."
    if "zero commission" in topic:
        return "What if restaurants kept more of every order?"
    if "home chefs" in topic:
        return "The best Odia food in the city may be cooking in a nearby kitchen."
    if "kirana" in topic:
        return "Your trusted local store can now become your fastest grocery stop."
    if "captains" in topic:
        return "Fast feels better when the delivery face is local."
    return f"TezDel is being built around {focus.lower()}."


def caption_for(item: dict[str, str]) -> str:
    return (
        f"{item['hook']}\n\n"
        f"TezDel is building a Bhubaneswar-first delivery network powered by local food, "
        f"nearby kiranas, fair restaurant economics, and neighbourhood trust.\n\n"
        f"{item['cta']}"
    )


def reel_script(item: dict[str, str]) -> str:
    return (
        f"Hook: {item['hook']}\n"
        "Scene 1: Show a familiar Bhubaneswar lane, office gate, or apartment entrance.\n"
        f"Scene 2: Show the TezDel promise: {item['topic']}.\n"
        "Scene 3: Show food, kirana items, or a partner preparing an order.\n"
        f"End Card: {item['cta']}"
    )


def daily_theme_for(day: dt.date) -> dict[str, str]:
    return DAILY_THEMES[day.toordinal() % len(DAILY_THEMES)]


def impactful_description(platform: str, theme: dict[str, str], cta: str) -> str:
    if platform == "Instagram":
        return (
            f"{theme['hook']}\n\n"
            f"{theme['description']} TezDel brings the story back to Bhubaneswar: real neighbourhoods, "
            "real food habits, real local sellers, and delivery that feels made for the city.\n\n"
            f"{cta}"
        )
    if platform == "Facebook":
        return (
            f"{theme['hook']}\n\n"
            "For families, students, working people, and local businesses, TezDel is not just another delivery app. "
            f"{theme['description']} This is delivery designed around Bhubaneswar's real neighbourhoods.\n\n"
            f"{cta}"
        )
    if platform == "LinkedIn":
        return (
            f"{theme['hook']}\n\n"
            f"TezDel's approach is built on a local operating advantage. {theme['description']} "
            "Instead of copying a metro-first model, TezDel focuses on fair partner economics, authentic supply, and trusted hyperlocal execution.\n\n"
            f"{cta}"
        )
    if platform == "X":
        return (
            f"{theme['hook']}\n\n"
            f"TezDel is building a Bhubaneswar-first delivery network around {theme['pillar'].lower()}: local supply, local trust, and practical speed.\n\n"
            f"{cta}"
        )
    return (
        f"Namaskar Bhubaneswar. {theme['hook']} TezDel is coming with fast local delivery, real Odia food, "
        f"trusted kirana partners, and fair support for restaurants. {cta}"
    )


def image_generation_prompts(theme: dict[str, str], local_refs: str) -> list[dict[str, str]]:
    return [
        {
            "name": "Feed Post",
            "format": "Square 1:1",
            "prompt": (
                "Create a polished square social media image for TezDel, a Bhubaneswar-first hyperlocal food "
                f"and grocery delivery brand. Theme: {theme['pillar']} - {theme['topic']}. Show {theme['visual']} "
                f"Use a real Indian urban neighbourhood feel inspired by {local_refs}. Add clean brand space for "
                "a short headline, use warm natural light, realistic food/business details, modern startup quality, "
                "no fake logos, no clutter, no distorted text."
            ),
        },
        {
            "name": "Story 1",
            "format": "Vertical 9:16",
            "prompt": (
                "Create a vertical Instagram/Facebook story image for TezDel. Focus on an emotional hook: "
                f"'{theme['hook']}' Show a Bhubaneswar neighbourhood moment connected to {theme['topic']}. "
                "Leave safe empty space at the top and bottom for text overlays, realistic photo style, warm colors, "
                "local Indian delivery context, no unreadable text."
            ),
        },
        {
            "name": "Story 2",
            "format": "Vertical 9:16",
            "prompt": (
                "Create a vertical TezDel story image that feels action-oriented and launch-ready. Show the customer "
                f"benefit of {theme['description'].lower()} Include a clear visual path from local seller or food source "
                "to customer handoff, realistic Bhubaneswar setting, energetic but clean composition, leave space for CTA."
            ),
        },
        {
            "name": "Story 3",
            "format": "Vertical 9:16",
            "prompt": (
                "Create a vertical TezDel story image for partner/community trust. Show local people, food, kirana, "
                "restaurant, or delivery handoff depending on the theme. Mood should be trustworthy, proud, and local. "
                "Use realistic Indian faces and settings, avoid celebrity likenesses, avoid messy text, leave space for "
                "poll sticker or 'Join early access' CTA."
            ),
        },
    ]


def render_daily_markdown(request: dict[str, str], brand: str, pillars: str, run_date: dt.date) -> str:
    campaign_name = request.get("campaign_name", "TezDel Daily Social Post")
    audience = request.get("audience", "Bhubaneswar customers and partners")
    platforms = [platform.strip() for platform in request.get("platforms", ", ".join(PLATFORMS)).split(",") if platform.strip()]
    cta = request.get("cta", "Join the TezDel early access list / partner with TezDel.")
    local_refs = request.get("local_references", "Patia, Nayapalli, Infocity, Bhubaneswar")
    theme = daily_theme_for(run_date)

    lines = [
        f"# TezDel Daily Social Media Posts - {run_date.isoformat()}",
        "",
        f"Campaign: {campaign_name}",
        f"Audience: {audience}",
        f"Theme: {theme['pillar']} - {theme['topic']}",
        f"Local References: {local_refs}",
        "",
        "## Main Daily Angle",
        "",
        theme["description"],
        "",
        "## Platform Posts",
        "",
    ]

    for platform in platforms:
        lines.extend(
            [
                f"### {platform}",
                "",
                f"Hook: {theme['hook']}",
                "",
                "Impactful Description:",
                "",
                impactful_description(platform, theme, cta),
                "",
                "Creative Direction:",
                "",
                theme["visual"],
                "",
                "Hashtags:",
                "",
                "#TezDel #Bhubaneswar #OdiaFood #LocalDelivery #Patia #Nayapalli",
                "",
                "CTA:",
                "",
                cta,
                "",
            ]
        )

    lines.extend(
        [
            "## Image Generation Prompts",
            "",
        ]
    )

    for image_prompt in image_generation_prompts(theme, local_refs):
        lines.extend(
            [
                f"### {image_prompt['name']} ({image_prompt['format']})",
                "",
                image_prompt["prompt"],
                "",
            ]
        )

    lines.extend(
        [
            "## Reel Script",
            "",
            f"Hook: {theme['hook']}",
            "Scene 1: Show a real Bhubaneswar setting: apartment gate, office desk, kirana shelf, or local restaurant counter.",
            f"Scene 2: Show the problem: {theme['topic']}.",
            "Scene 3: Show the TezDel answer with food, groceries, partner, or delivery handoff.",
            f"End Card: {cta}",
            "",
            "## Review Before Posting",
            "",
            "- Confirm any delivery-time or partner claims are operationally true.",
            "- Use real partner names only after permission.",
            "- Replace placeholder visuals with real TezDel, Bhubaneswar, food, restaurant, or kirana visuals.",
            "- Keep the post human-reviewed before publishing.",
            "",
            "## Brand Context Used",
            "",
            brand.strip(),
            "",
            "## Content Pillars Used",
            "",
            pillars.strip(),
        ]
    )
    return "\n".join(lines) + "\n"


def render_markdown(request: dict[str, str], brand: str, pillars: str, calendar: list[dict[str, str]]) -> str:
    today = dt.date.today().isoformat()
    campaign_name = request.get("campaign_name", "TezDel Social Media Campaign")
    audience = request.get("audience", "Bhubaneswar customers and partners")
    platforms = request.get("platforms", ", ".join(PLATFORMS))
    goal = request.get("goal", "Grow local awareness")
    cta = request.get("cta", "Join TezDel early access")

    lines = [
        f"# TezDel Social Media Campaign: {campaign_name}",
        "",
        f"Date: {today}",
        f"Audience: {audience}",
        f"Platforms: {platforms}",
        f"Goal: {goal}",
        "",
        "## Campaign Angle",
        "",
        "Position TezDel as Bhubaneswar's local delivery brand: fast, trusted, Odia-food friendly, and fair to restaurants, home chefs, and kiranas.",
        "",
        "## Weekly Content Calendar",
        "",
        "| Day | Platform | Pillar | Post Type | Topic | CTA |",
        "| --- | --- | --- | --- | --- | --- |",
    ]

    for item in calendar:
        lines.append(
            f"| {item['day']} | {item['platform']} | {item['pillar']} | {item['post_type']} | {item['topic']} | {item['cta']} |"
        )

    lines.extend(["", "## Captions", ""])
    for i, item in enumerate(calendar, start=1):
        lines.extend(
            [
                f"### Post {i}: {item['platform']} - {item['post_type']}",
                "",
                caption_for(item),
                "",
                "Hashtags: #TezDel #Bhubaneswar #OdiaFood #LocalDelivery #Patia #Nayapalli",
                "",
                f"Creative Brief: Visual should show {item['topic'].lower()} with a real, local Bhubaneswar feel.",
                "",
            ]
        )

    lines.extend(["## Reel Scripts", ""])
    for i, item in enumerate(calendar[:5], start=1):
        lines.extend([f"### Reel {i}", "", reel_script(item), ""])

    lines.extend(
        [
            "## WhatsApp Copy",
            "",
            f"TezDel is coming to Bhubaneswar with fast local delivery, real Odia food, trusted kirana partners, and fair pricing for restaurants. {cta}",
            "",
            "## Partner Outreach",
            "",
            "### Restaurant Message",
            "",
            "Namaskar, TezDel is building a Bhubaneswar-first delivery platform with a flat monthly restaurant fee instead of heavy per-order commission. We would love to onboard selected local restaurants for the launch phase.",
            "",
            "### Home Chef Message",
            "",
            "Namaskar, TezDel is inviting skilled home chefs in Bhubaneswar to offer authentic Odia meals through a trusted local delivery network. If you cook dishes like pakhala, dalma, besara, or chenna poda, we would love to speak with you.",
            "",
            "### Kirana Message",
            "",
            "Namaskar, TezDel is partnering with local kirana stores to bring neighbourhood grocery orders online. You keep your local trust, and TezDel helps bring more digital orders from nearby customers.",
            "",
            "## Review Notes",
            "",
            "- Verify operational claims before posting.",
            "- Use real partner names only after permission.",
            "- Replace generic visuals with real Bhubaneswar photos whenever possible.",
            "- Keep CTAs specific: early access, partner signup, chef onboarding, or kirana onboarding.",
            "",
            "## Brand Context Used",
            "",
            brand.strip(),
            "",
            "## Content Pillars Used",
            "",
            pillars.strip(),
        ]
    )
    return "\n".join(lines) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate TezDel social media campaign Markdown.")
    parser.add_argument("--campaign", default=str(ROOT / "inputs" / "campaign_request.md"))
    parser.add_argument("--output", default=str(ROOT / "outputs"))
    parser.add_argument("--daily", action="store_true", help="Generate today's platform-wise social posts.")
    parser.add_argument("--date", help="Optional generation date in YYYY-MM-DD format.")
    args = parser.parse_args()

    campaign_path = Path(args.campaign)
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    request_text = read_file(campaign_path)
    request = parse_request(request_text)
    brand = read_file(ROOT / "brand" / "tezdel_brand_profile.md")
    pillars = read_file(ROOT / "brand" / "content_pillars.md")

    date_prefix = dt.date.today().isoformat()
    name = slugify(request.get("campaign_name", "tezdel-campaign"))
    run_date = dt.date.fromisoformat(args.date) if args.date else dt.date.today()
    date_prefix = run_date.isoformat()

    if args.daily:
        markdown = render_daily_markdown(request, brand, pillars, run_date)
        output_path = output_dir / f"{date_prefix}.md"
    else:
        days = int(request.get("duration_days", "7") or "7")
        calendar = build_calendar(days, request.get("focus", "TezDel launch"), request.get("cta", "Join TezDel early access"))
        markdown = render_markdown(request, brand, pillars, calendar)
        output_path = output_dir / f"{date_prefix}-{name}.md"

    output_path.write_text(markdown, encoding="utf-8")

    log_path = ROOT / "logs" / "generation_log.md"
    with log_path.open("a", encoding="utf-8") as log:
        log.write(f"- {dt.datetime.now().isoformat(timespec='seconds')} generated {output_path.name}\n")

    print(f"Generated: {output_path}")


if __name__ == "__main__":
    main()
