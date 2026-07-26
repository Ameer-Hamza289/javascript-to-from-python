# 08 — Error Handling

## Same ideas

| Idea | JavaScript | Python |
|------|------------|--------|
| Guarded block | `try` | `try` |
| Handle | `catch (err)` | `except ErrorType as err` |
| Always run | `finally` | `finally` |
| Raise | `throw new Error(...)` | `raise ValueError(...)` |
| Custom type | `class X extends Error` | `class X(Exception)` |

## Differences & exceptions

1. **Keywords**: `catch` ↔ `except`, `throw` ↔ `raise`.

2. **Catching specifics**
   - Python: catch by exception class (`except ValueError`).
   - JS: one `catch`; use `instanceof` to branch.

3. **`try/else` (Python-only)** — runs only when no exception occurred. Useful to keep `try` body small.

4. **Base types**
   - JS: usually extend `Error`.
   - Python: extend `Exception` (not bare `BaseException` unless you know why).

5. **Philosophy**
   - Python often prefers "ask forgiveness" (`try`/`except`) for expected edge cases.
   - JS often checks ahead (`if`) and still uses `try`/`catch` for real failures — both styles appear in both languages.
