# 06 — Collections

## Core mapping

| Concept | JavaScript | Python |
|---------|------------|--------|
| Ordered list | `Array` `[1,2]` | `list` `[1,2]` |
| Key → value | `Object` / `Map` | `dict` |
| Unique values | `Set` | `set` |
| Immutable sequence | (no built-in tuple) | `tuple` `(1,2)` |
| Length | `.length` / `.size` | `len(x)` |
| Membership | `.includes()` / `.has()` | `x in collection` |

## Differences & exceptions

1. **Object vs dict vs Map**
   - JS `Object`: string/symbol keys, prototype quirks.
   - JS `Map`: any key type, better for frequent add/delete, `.size`.
   - Python `dict`: primary mapping type; keys must be hashable.

2. **Tuples**
   - Python tuples are everywhere (multiple return values, dict keys, unpacking).
   - JS usually uses arrays; `Object.freeze` is a soft immutability signal.

3. **Missing keys**
   - JS: `obj.missing` → `undefined`.
   - Python: `d["missing"]` → `KeyError`; prefer `d.get("missing", default)`.

4. **Method names**
   - JS: `push`, `pop`, `includes`
   - Python: `append`, `pop`, `in`

5. **Sets look alike** — `{1, 2}` is a set in Python; in JS `{1, 2}` is a **block/object syntax issue** — use `new Set([1, 2])`.
