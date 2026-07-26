# 02 — Modules

## Same ideas

| Idea | JavaScript (ESM) | Python |
|------|------------------|--------|
| Named export/import | `export function add` / `import { add }` | define in file / `from mod import add` |
| Whole module | `import * as math` | `import math_utils` |
| Alias | `import { add as sum }` | `import math_utils as math` |
| Default export | `export default` / `import greet from` | convention: one main callable, no true default |

## Differences & exceptions

1. **Default exports** are a JS concept. Python typically uses explicit names.

2. **File extensions**
   - ESM often requires `./file.js` in imports.
   - Python omits `.py`.

3. **CommonJS vs ESM (JS)**
   - Older Node style: `require` / `module.exports`.
   - Modern: `import` / `export` (this repo uses ESM via `"type": "module"`).

4. **Script vs import (Python)**
   - `if __name__ == "__main__":` runs only when the file is executed directly.
   - JS has no exact built-in twin; bundlers/test runners handle entrypoints differently.

5. **Package layout**
   - Python packages are directories (often with `__init__.py`).
   - JS packages are usually `package.json` + entry files.
