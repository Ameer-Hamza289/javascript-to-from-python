# 08 — Production Habits

## Habits that transfer

| Habit | JavaScript | Python |
|-------|------------|--------|
| Env config | `process.env`, zod/env parsers | `os.environ`, pydantic-settings |
| Logging | pino / winston / structured console | `logging` / structlog |
| Format | Prettier | Ruff format / Black |
| Lint | ESLint | Ruff |
| Types in CI | `tsc --noEmit` | pyright / mypy |
| Tests in CI | `vitest` / `node --test` | pytest |
| Secrets | never commit `.env` | same — `.env` in gitignore |

## Sample layouts

```text
# JS service
src/
  index.js
  routes/
  lib/
tests/
package.json
```

```text
# Python service
src/
  example_app/
    __init__.py
    api.py
    config.py
tests/
pyproject.toml
```

## Differences & exceptions

1. **Env naming**
   - JS: `NODE_ENV=production` is conventional.
   - Python: often `APP_ENV` / `ENV`; no single universal — pick one and document it.

2. **Logging defaults**
   - Node apps often start with pino early.
   - Python stdlib `logging` is enough to start; structlog when logs get serious.

3. **Process model**
   - Node: one process + cluster/horizontal scale.
   - Python web: gunicorn/uvicorn workers common — config matters.

4. **Senior bar for PRs in either language**
   - typed boundaries
   - tests for new logic
   - lint clean
   - logs that can be grepped/queried
   - config via env, secrets out of git
