# 05 — Special Methods & Operators

## Same ideas
Customize how your objects behave with built-in operations (printing, equality, math...).

| Intent | JavaScript | Python |
|--------|------------|--------|
| Nice string | `toString()` | `__str__` / `__repr__` |
| Equality helper | custom `equals()` (or value libs) | `__eq__` |
| Add two objects | custom `.add()` method | `__add__` → `a + b` |
| Absolute / magnitude | custom method / symbol | `__abs__` → `abs(a)` |

## Differences & exceptions

1. **Operator overloading**
   - Python: first-class via dunder methods (`__add__`, `__lt__`, ...).
   - JS: generally **not supported** for `+`, `*`, etc. on custom classes. Use methods. (Symbols customize a few language hooks.)

2. **`==` on objects**
   - JS: `===` is reference equality for objects.
   - Python: `==` can be value equality if you define `__eq__`.

3. **`__str__` vs `__repr__`**
   - `__str__`: readable for end users.
   - `__repr__`: unambiguous for developers/debugging.
   - JS mostly has `toString()` (+ `util.inspect` customizations in Node).

4. Learning tip: if you're a JS person learning Python OOP, dunder methods are the biggest "wow" unlock. If you're a Python person learning JS, expect to write named methods instead of `+`.
