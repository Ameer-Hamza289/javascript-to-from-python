# 07 — Ecosystem Bridge

Not tutorials — **orientation**. If you know one column, start with the other.

## Web APIs

| If you know… | Look at… | Notes |
|--------------|----------|-------|
| Express / Fastify | FastAPI / Flask / Django | FastAPI feels closest to modern typed Node APIs |
| Next.js | Django + HTMX / Next-like: React still, or NiceGUI | Different bets; don't force a 1:1 |
| NestJS | FastAPI + modules / Django | Nest's structure ↔ Python packages + DI-ish patterns |
| tRPC / Zod APIs | FastAPI + Pydantic | Pydantic ≈ Zod for runtime schemas |

## Data & async jobs

| If you know… | Look at… |
|--------------|----------|
| Prisma / Drizzle / Knex | SQLAlchemy / Django ORM / Tortoise |
| Redis clients | `redis-py` |
| Bull / BullMQ | Celery / ARQ / Dramatiq |
| Socket.IO | python-socketio / Starlette WebSockets |

## Frontend (JS stays JS)

Python seniors learning JS often still ship React/Vue/Svelte for UI.  
JS seniors learning Python usually keep the frontend and move the **API/workers** to Python.

## Tooling cousins

| JS | Python |
|----|--------|
| Zod | Pydantic |
| Prettier | Ruff format / Black |
| ESLint | Ruff |
| Vitest / Jest | pytest |
| tsc / zod | pyright + Pydantic |
| dotenv | `os.environ` / pydantic-settings |
| date-fns / Day.js | `datetime` + `zoneinfo` |

## "Don't map these 1:1"

- **npm scripts culture** vs **Makefile/uv scripts** — same job, different rituals
- **monorepos** (pnpm/turbo) vs **polyrepos / workspace tools** — exist in both, conventions differ
- **decorators** — Python uses them everywhere; JS decorators are still less central in app code

## 30-day plan (either direction)

1. Rebuild a tiny CRUD API you already understand.
2. Add tests + types + lint on day 1.
3. Add one worker/queue and one DB integration.
4. Read a popular project's layout (FastAPI/Express sample) end-to-end.
