# ============================================================
# 04 — Stdlib Day-One  (Python)
# ============================================================

from pathlib import Path
import json
from collections import Counter
from urllib.parse import urlparse, parse_qs
from urllib.request import urlopen

# SAME — join paths safely (pathlib is the modern way)
here = Path(__file__).resolve().parent
readme = here.parents[1] / "README.md"
print("readme path:", readme)

# SAME — read a file
raw = (here / "sample.json").read_text(encoding="utf-8")

# SAME — JSON parse/stringify
data = json.loads(raw)
print("title:", data["title"])
print(json.dumps({"ok": True, "n": 1}))

# SAME — URL parsing
u = urlparse("https://example.com/api?x=1")
print(u.hostname, parse_qs(u.query).get("x"))

# SAME-ish — group values (Counter is the battery included)
words = ["ada", "alan", "ada"]
print(Counter(words))

# DIFF — stdlib HTTP is lower-level; teams often use httpx/requests
try:
    with urlopen("https://example.com", timeout=5) as resp:
        print("http status:", resp.status)
except Exception as err:
    print("http skipped:", type(err).__name__)

# Day-one modules: pathlib, json, collections, itertools, functools,
# dataclasses, datetime, typing, logging, subprocess, concurrent.futures
