# ============================================================
# 07 — Ecosystem Bridge  (Python orientation)
# Read NOTES.md — this file is a pocket map you can print/log.
# ============================================================

bridge = {
    "FastAPI / Flask": "Express / Fastify",
    "SQLAlchemy / Django ORM": "Prisma / Drizzle",
    "Pydantic": "Zod",
    "pytest": "Jest / Vitest",
    "Celery / ARQ": "BullMQ",
    "pydantic-settings": "dotenv / zod+env",
}

print("If you know Python → start here in JS:")
for py, js in bridge.items():
    print(f"  {py:22} → {js}")
print("\nDetails & anti-patterns: NOTES.md")
