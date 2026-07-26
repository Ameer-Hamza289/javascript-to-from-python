# 02 — Tooling & Packaging

Code samples in this folder are **config sketches**, not a full monorepo. Steal the mental map.

## Same jobs, different tools

| Job | JavaScript / Node | Python |
|-----|-------------------|--------|
| Install deps | `npm i` / `pnpm i` / `yarn` | `pip install` / `uv add` / `poetry add` |
| Lockfile | `package-lock.json` / `pnpm-lock.yaml` | `uv.lock` / `poetry.lock` / `requirements.txt` |
| Manifest | `package.json` | `pyproject.toml` (modern) |
| Virtual env | (node_modules is local) | `venv` / `uv venv` — **do this always** |
| Run script | `npm run dev` | `uv run …` / `poetry run …` / Makefile |
| Format | Prettier | Ruff format / Black |
| Lint | ESLint | Ruff / Flake8 + friends |
| Types | `tsc --noEmit` | `pyright` / `mypy` |
| Bundle (apps) | Vite / esbuild / webpack | usually none for libs; Docker for apps |

## Differences that bite seniors

1. **Global installs**
   - JS: global npm tools exist but projects prefer local + `npx`.
   - Python: never install project deps globally — use a venv (or uv/poetry which manage one).

2. **`node_modules` vs site-packages**
   - JS deps live in the project tree.
   - Python deps live in an environment; the project tree stays lean.

3. **Entry points**
   - JS: `"bin"` / `"exports"` in package.json.
   - Python: `[project.scripts]` in pyproject.toml.

4. **Multiple versions**
   - JS: nest conflicting majors (possible, messy).
   - Python: one environment resolution; conflicts fail the solve (generally healthier).

5. **What to learn first**
   - Coming from JS → Python: `uv` (or poetry) + `pyproject.toml` + ruff + pyright.
   - Coming from Python → JS: `pnpm` + `package.json` scripts + eslint + prettier + typescript.
