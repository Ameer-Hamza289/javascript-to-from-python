# 01 — Variables & Types

## Mental model (both languages)
Variables are **names bound to values**. Types belong to the values. Both are dynamically typed.

## Same ideas

| Idea | JavaScript | Python |
|------|------------|--------|
| Assign | `let x = 1` | `x = 1` |
| Prefer not rebinding | `const x = 1` | `X = 1` (convention only) |
| Empty value | `null` | `None` |
| Text | `"hi"` / `'hi'` | `"hi"` / `'hi'` |
| Boolean | `true` / `false` | `True` / `False` |
| Convert to number | `Number(x)` | `int(x)` / `float(x)` |
| Convert to string | `String(x)` | `str(x)` |
| Convert to bool | `Boolean(x)` | `bool(x)` |

## Differences & exceptions

1. **Numbers**
   - JS: one `number` type (IEEE float under the hood). Also `BigInt` for huge ints.
   - Python: separate `int` (arbitrary size) and `float`.

2. **`undefined` vs missing**
   - JS has `undefined` for "not set yet".
   - Python has no undefined — reading an unbound name raises `NameError`.

3. **Immutability keywords**
   - JS `const` prevents rebinding the name.
   - Python has no `const`. Use naming convention (`PI`) or immutable types.

4. **Equality**
   - JS: prefer `===` / `!==` (no coercion). Avoid `==`.
   - Python: `==` for value equality; use `is` mainly for `None` (identity).

5. **`typeof null`**
   - JS returns `"object"` — a long-standing quirk. Check with `value === null`.

6. **Booleans and numbers**
   - Python: `True == 1` is `True` because `bool` subclasses `int`.
   - JS: `true == 1` is also true with `==`, but `true === 1` is false.

## Quick self-check
- [ ] I know when to use `const` vs `let`, and that Python has no equivalent keyword.
- [ ] I can map `null` ↔ `None` and explain why `undefined` has no Python twin.
- [ ] I prefer `===` in JS and `==` / `is None` appropriately in Python.
