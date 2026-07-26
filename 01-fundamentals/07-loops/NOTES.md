# 07 — Loops

## Mapping (this one confuses everyone)

| Intent | JavaScript | Python |
|--------|------------|--------|
| Loop values in a list | `for (const x of arr)` | `for x in arr` |
| Loop keys in object/dict | `for (const k in obj)` | `for k in d` |
| Loop key+value | `Object.entries` + `of` | `for k, v in d.items()` |
| Index + value | `entries()` / manual index | `enumerate(arr)` |
| Count 0..n-1 | `for (let i=0; i<n; i++)` | `for i in range(n)` |

## Differences & exceptions

1. **`in` means different things**
   - JS `for...in` → keys.
   - JS `for...of` → values.
   - Python `for ... in` → values for lists; keys for dicts.
   - Python `x in collection` (not a for-loop) → membership test (`includes`/`has`).

2. **No C-style `for` in Python** — use `range`, or iterate the collection directly.

3. **`for/else` (Python-only)** — `else` on a `for` runs when the loop finishes without `break`. Handy for search patterns.

4. Prefer idiomatic forms:
   - JS arrays: `for...of` or `.map/.filter`
   - Python lists: `for x in items` or comprehensions
