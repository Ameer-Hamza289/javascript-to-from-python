# ============================================================
# 08 — Production Habits  (Python)
# ============================================================

import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from logger import create_logger

# SAME — config from env, with defaults (never commit secrets)
config = {
    "port": int(os.getenv("PORT", "3000")),
    "app_env": os.getenv("APP_ENV", os.getenv("NODE_ENV", "development")),
    "database_url": os.getenv("DATABASE_URL"),
}

log = create_logger(config["app_env"])
log.info("boot port=%s env=%s", config["port"], config["app_env"])

if not config["database_url"] and config["app_env"] == "production":
    log.error("missing DATABASE_URL in production")
    raise SystemExit(1)

log.info("ready")

# SAME habits:
# - structured logs (JSON in prod)
# - fail fast on missing critical config
# - ruff + pyright + pytest in CI
# - one obvious package layout (src/, tests/)
# See NOTES.md for the JS twins and a sample tree.
