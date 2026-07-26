# 04 — Destructuring & Unpacking

## Same ideas

| Idea | JavaScript | Python |
|------|------------|--------|
| Unpack list/array | `const [x, y] = arr` | `x, y = arr` |
| Rest items | `const [a, ...rest] = arr` | `a, *rest = arr` |
| Spread list | `[...arr, 5]` | `[*arr, 5]` |
| Spread object/dict | `{ ...obj, a: 1 }` | `{**obj, "a": 1}` |
| Swap | `[a, b] = [b, a]` | `a, b = b, a` |

## Differences & exceptions

1. **Object destructuring is JS-native**
   - `const { name, age } = user` is everyday JS.
   - Python has no identical syntax for dicts; pull keys explicitly, or use libraries/dataclasses.

2. **Rename while unpacking**
   - JS: `{ city: hometown } = user`
   - Python: `hometown = user["city"]`

3. **Function parameter destructuring**
   - JS: `function intro({ name, age })`
   - Python: take a dict/object and read keys inside, or use typed structures.

4. Both support nested unpacking — start simple, then nest as needed.
