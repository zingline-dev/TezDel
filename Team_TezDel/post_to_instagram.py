import os
import sys
import time
import json
import requests
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Fix Windows stdout encoding for emojis
sys.stdout.reconfigure(encoding='utf-8')

# ==========================================
# UPLOAD-POST API INTEGRATION
# ==========================================
api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlc2FsLnRlemRlbEBvdXRsb29rLmNvbSIsImV4cCI6NDkzMjczNTQ4NCwianRpIjoiYzY0YzU2NzctNjc0NC00ZjUxLTgyYmMtNjM3MWQ1ZmFhMmRkIn0.N7KCwcsWc5OLB1TkbwahVJQWPkO_ZO1tRQZaT70P170"

slides = [
    r"d:\TezDel\Frontend\TezDel_Web\src\assets\Post1.png",
    r"d:\TezDel\Frontend\TezDel_Web\src\assets\Post2.png",
    r"d:\TezDel\Frontend\TezDel_Web\src\assets\Post3.png"
]

caption = """🛑 Sick of paying crazy delivery fees just to get your favorite local food in Bhubaneswar? 

The system is broken. Restaurants pay 30% to the apps, and YOU pay the hidden markup. 

Enter TezDel. We are Bhubaneswar's first 100% commission-free food delivery platform. Fair for the restaurants, cheaper for you.

🔗 Hit the link in our bio to join the exclusive waitlist and support local!

#Bhubaneswar #BhubaneswarBuzz #FoodieBhubaneswar #TezDel #ZeroCommission #Odisha #SupportLocal"""

print("🚀 Marketing Carousel Growth Engine Initiated...")
print(f"🔒 Authenticated via UPLOADPOST_TOKEN (User: besal.tezdel@outlook.com)")
print("📸 Preparing 3-Slide Carousel for Instagram Publishing...")

files = []
for i, slide in enumerate(slides):
    if os.path.exists(slide):
        print(f"   [+] Verified Slide {i+1}: {os.path.basename(slide)}")
        files.append(("photos[]", (os.path.basename(slide), open(slide, "rb"), "image/png")))
    else:
        print(f"   [!] Missing Slide {i+1}!")
        sys.exit(1)

print("\n✍️ Attaching Caption and Hashtags...")
time.sleep(0.5)

print("📡 POST https://api.upload-post.com/api/upload_photos")
print("   - platform: instagram")
print("   - type: carousel")
print("   - privacy_level: PUBLIC_TO_EVERYONE")

url = "https://api.upload-post.com/api/upload_photos"
headers = {
    "Authorization": f"Apikey {api_key}",
    "x-user": "besal.tezdel@outlook.com"
}
data = {
    "platform[]": "instagram",
    "caption": caption,
    "privacy_level": "PUBLIC_TO_EVERYONE",
    "async_upload": "false",
    "profile_key": "Marketing_Team_TezDel",
    "username": "Marketing_Team_TezDel",
    "user": "Marketing_Team_TezDel"
}

try:
    # Increased timeout to 120s to prevent 'Write operation timed out' on slow connections
    print("\n⏳ Uploading to server... Please wait (This may take a minute).")
    response = requests.post(url, headers=headers, data=data, files=files, timeout=120, verify=False)
    
    if response.status_code in [200, 201, 202]:
        resp_data = response.json()
        print(f"\n✅ {resp_data.get('message', 'Carousel successfully published to Instagram.')}")
        
        req_id = resp_data.get('request_id', 'unknown_id')
        print(f"🔗 Request tracking ID: {req_id}")
        
        # Save learnings metadata
        os.makedirs("/tmp/carousel", exist_ok=True)
        with open("/tmp/carousel/post-info.json", "w", encoding="utf-8") as f:
            json.dump(resp_data, f, indent=2)
            
        print("💾 Saved post metadata to learnings database.")
    else:
        print(f"\n❌ API Error [{response.status_code}]: {response.text}")
except requests.exceptions.RequestException as e:
    print(f"\n❌ Request Failed: {e}")
except Exception as e:
    print(f"\n❌ Unexpected Error: {e}")
finally:
    for _, file_tuple in files:
        file_tuple[1].close()
