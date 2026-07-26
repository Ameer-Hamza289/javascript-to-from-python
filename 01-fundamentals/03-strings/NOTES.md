# 03 — Strings

## Method map

| Task | JavaScript | Python |
|------|------------|--------|
| Trim whitespace | `s.trim()` | `s.strip()` |
| Upper / lower | `toUpperCase()` / `toLowerCase()` | `upper()` / `lower()` |
| Contains | `s.includes(x)` | `x in s` |
| Replace | `s.replace(a, b)` | `s.replace(a, b)` |
| Split | `s.split(",")` | `s.split(",")` |
| Repeat | `s.repeat(n)` | `s * n` |
| Starts / ends | `startsWith` / `endsWith` | `startswith` / `endswith` |
| Slice | `s.slice(1, 4)` | `s[1:4]` |
| Length | `s.length` | `len(s)` |
| Interpolate | `` `Hi ${name}` `` | `f"Hi {name}"` |

## Differences & exceptions

1. **Naming style**: JS methods are camelCase; Python methods are snake_case (`startsWith` vs `startswith`).

2. **Coercion with `+`**
   - JS: `"Score: " + 10` works (number → string).
   - Python: raises `TypeError` — convert with `str()` or use an f-string.

3. **Find missing substring**
   - JS `indexOf` → `-1` if missing.
   - Python `find` → `-1`; `index` raises `ValueError` if missing.

4. **Immutability**: both treat strings as immutable. Methods return new strings.
