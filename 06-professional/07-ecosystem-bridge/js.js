// ============================================================
// 07 — Ecosystem Bridge  (JavaScript orientation)
// Read NOTES.md — this file is a pocket map you can print/log.
// ============================================================

const map = {
  "Express/Fastify": "FastAPI / Flask",
  "Prisma/Drizzle": "SQLAlchemy / Django ORM",
  "Zod": "Pydantic",
  "Jest/Vitest": "pytest",
  "BullMQ": "Celery / ARQ",
  "dotenv": "pydantic-settings / os.environ",
};

console.log("If you know JS → start here in Python:");
for (const [js, py] of Object.entries(map)) {
  console.log(`  ${js.padEnd(16)} → ${py}`);
}
console.log("\nDetails & anti-patterns: NOTES.md");
