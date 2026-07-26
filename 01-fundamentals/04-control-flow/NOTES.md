# 04 — Control Flow

## Same ideas

| Idea | JavaScript | Python |
|------|------------|--------|
| If branch | `if (cond) { }` | `if cond:` |
| Else-if | `else if` | `elif` |
| Else | `else` | `else` |
| Ternary | `cond ? a : b` | `a if cond else b` |
| Multi-branch | `switch` | `match` (3.10+) |

## Differences & exceptions

1. **Blocks**
   - JS: braces `{ }` define blocks. Indentation is style.
   - Python: indentation **is** the block. No braces.

2. **Parentheses**
   - JS: `if` condition usually in `( )`.
   - Python: parentheses optional around conditions.

3. **`switch` vs `match`**
   - JS `switch`: equality matching + manual `break` (fall-through risk).
   - Python `match`: pattern matching (values, structures, guards). More powerful.

4. **Ternary word order**
   - JS: condition first → `score >= 60 ? "pass" : "fail"`
   - Python: value-if-true first → `"pass" if score >= 60 else "fail"`

5. **Empty blocks**
   - JS: `{}` or omit.
   - Python: use `pass`.

6. **Empty collection in `if`**
   - Revisit lesson 02: `[]` is truthy in JS, falsy in Python.
