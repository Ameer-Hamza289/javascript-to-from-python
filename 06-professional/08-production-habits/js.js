// ============================================================
// 08 — Production Habits  (JavaScript)
// ============================================================

import { createLogger } from "./logger.js";

// SAME — config from env, with defaults (never commit secrets)
const config = {
  port: Number(process.env.PORT ?? 3000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  databaseUrl: process.env.DATABASE_URL ?? null,
};

const log = createLogger(config.nodeEnv);

log.info("boot", { port: config.port, env: config.nodeEnv });

if (!config.databaseUrl && config.nodeEnv === "production") {
  log.error("missing DATABASE_URL in production");
  process.exitCode = 1;
} else {
  log.info("ready");
}

// SAME habits:
// - structured logs (JSON in prod)
// - fail fast on missing critical config
// - lint + format + typecheck in CI
// - one obvious project layout (src/, tests/)
// See NOTES.md for the Python twins and a sample tree.
