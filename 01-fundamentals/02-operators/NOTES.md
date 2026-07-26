# 02 — Operators

## Same ideas

| Idea | JavaScript | Python |
|------|------------|--------|
| Add / sub / mul | `+ - *` | `+ - *` |
| Power | `**` | `**` |
| Modulo | `%` | `%` |
| Float division | `/` | `/` |
| Logical and/or/not | `&&` `\|\|` `!` | `and` `or` `not` |
| Equal / not equal | `===` `!==` | `==` `!=` |

## Differences & exceptions

1. **Integer division**
   - Python: `//` (floor division).
   - JS: no `//` operator — use `Math.floor(a / b)` (or `Math.trunc` depending on sign needs).

2. **Logical keywords vs symbols**
   - Python uses words (`and`, `or`, `not`).
   - JS uses symbols (`&&`, `||`, `!`).

3. **Empty collections truthiness** (big gotcha)
   - Python: `[]`, `{}`, `""`, `0`, `None` are falsy.
   - JS: `[]` and `{}` are **truthy**. Only `0`, `""`, `null`, `undefined`, `NaN`, `false` are falsy among common values.

4. **Nullish coalescing**
   - JS: `??` treats only `null`/`undefined` as missing.
   - Python: no `??`; write `x if x is not None else default`.

5. **Increment**
   - JS: `i++` / `++i` exist.
   - Python: use `i += 1` only.

6. **Chained comparisons**
   - Python: `1 < x < 10` works.
   - JS: `1 < x < 10` does **not** mean that — it evaluates left-to-right oddly. Use `1 < x && x < 10`.
