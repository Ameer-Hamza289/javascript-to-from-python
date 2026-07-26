# 03 — Functional Patterns

## Mapping

| Intent | JavaScript | Python (idiomatic) |
|--------|------------|--------------------|
| Transform | `arr.map(fn)` | `[fn(x) for x in arr]` |
| Keep some | `arr.filter(fn)` | `[x for x in arr if fn(x)]` |
| Collapse | `arr.reduce(fn, init)` | `functools.reduce` or `sum`/`min`/loop |
| Any / all | `some` / `every` | `any(...)` / `all(...)` |
| First match | `find` | `next((x for x in xs if ...), None)` |

## Differences & exceptions

1. **Comprehensions are Python's superpower** — prefer them over `map`/`filter` + `lambda` for readability.

2. **JS chains methods** fluently on arrays. Python often uses comprehensions or generator expressions, then a final function (`sum`, `list`, etc.).

3. **`map`/`filter` in Python return iterators** — wrap with `list(...)` to see values immediately.

4. Both languages support a functional style; neither forces it. Use what reads cleanest for the problem.
