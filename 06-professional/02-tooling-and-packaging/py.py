# ============================================================
# 02 — Tooling & Packaging  (Python)
# Read pyproject.example.toml + NOTES.md
# ============================================================

print(
    """
Python day-one tooling map
--------------------------
Manifest : pyproject.toml
Env      : python -m venv .venv  (or uv venv)
Install  : pip install -e .  /  uv sync
Lockfile : uv.lock / poetry.lock / requirements.txt
Run      : uv run <cmd>  /  poetry run <cmd>
Format   : ruff format  /  black
Lint     : ruff check
Types    : pyright  /  mypy

Compare with package.example.json on the JS side.
"""
)
