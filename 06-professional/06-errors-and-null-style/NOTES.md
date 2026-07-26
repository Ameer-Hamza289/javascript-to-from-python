# 06 — Errors & Null Style

## Same ideas
- Use `null`/`None` for **expected absence**
- Throw/raise for **exceptional failures**
- Consider Result-like types when both success and failure are normal outcomes

| Idea | JavaScript | Python |
|------|------------|--------|
| Absence | `null` / `undefined` | `None` |
| Safe access | `user?.email` | explicit check / `and` chaining |
| Default | `x ?? default` | `x if x is not None else default` |
| Expected fail | Result object / error union | `Ok`/`Err`, or raise domain errors |
| Exception | `throw` / `try/catch` | `raise` / `try/except` |

## Differences & exceptions

1. **Optional chaining is a JS ergonomics win.** Python is more explicit — that's OK; clarity beats clever one-liners.

2. **`||` vs `??` vs `is None`**
   - JS seniors prefer `??` when `0` / `""` are valid.
   - Python seniors prefer `is None` / `is not None`, not truthiness, for the same reason.

3. **Culture**
   - Python is more comfortable raising (`KeyError`, `ValueError`) for many cases JS would return `null`.
   - Either style is fine — be consistent at module boundaries.

4. **Typing**
   - TS: `string | null`, strict null checks.
   - Python: `str | None`, optional enforcement via pyright/mypy.
