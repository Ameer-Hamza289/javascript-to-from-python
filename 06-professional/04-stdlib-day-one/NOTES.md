# 04 — Stdlib Day-One

## Quick map

| Need | JavaScript (Node) | Python |
|------|-------------------|--------|
| Paths | `node:path`, `fileURLToPath` | `pathlib.Path` |
| Files | `node:fs/promises` | `Path.read_text` / `open` |
| JSON | `JSON.parse` / `stringify` | `json.loads` / `dumps` |
| URL | `URL`, `URLSearchParams` | `urllib.parse` |
| HTTP | `fetch` | `urllib` (or `httpx`/`requests`) |
| Counters | manual `Map` | `collections.Counter` |
| Grouping | manual / libs | `itertools.groupby` |
| Datetimes | `Date` / Temporal (growing) | `datetime` |
| CLI args | `process.argv` / `util.parseArgs` | `argparse` |

## Differences & exceptions

1. **Python's stdlib is broader** for data wrangling (`collections`, `itertools`, `functools`). JS leans on small npm packages or modern built-ins.

2. **`pathlib` is non-negotiable** for Python seniors. String-concat paths are a smell. In Node, prefer `path.join` / `URL`.

3. **HTTP culture**
   - JS: `fetch` is default.
   - Python: `requests` or `httpx` in apps; stdlib for simple cases.

4. **Learn these next**
   - JS→Py: `pathlib`, `collections`, `itertools`, `dataclasses`, `logging`
   - Py→JS: `fs/promises`, `path`, `stream`, `EventEmitter`, `AbortController`
