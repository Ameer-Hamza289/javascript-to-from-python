# 03 — Encapsulation

## Same ideas
Hide internal state; expose a safe public API (methods / properties).

| Idea | JavaScript | Python |
|------|------------|--------|
| Public field | `this.owner` | `self.owner` |
| Soft private | (weak convention) | `self._balance` |
| Hard(er) private | `#balance` | `self.__balance` (name mangling) |
| Computed prop | `get balance()` | `@property` |

## Differences & exceptions

1. **JS `#private` is enforced by the language** — outside code cannot read it.

2. **Python privacy is mostly social**
   - `_name`: "please treat as internal".
   - `__name`: name-mangled to `_Class__name` — deters accidents, not a security boundary.

3. **Properties**
   - JS: `get` / `set` in class bodies.
   - Python: `@property` and `@x.setter`.

4. When coming from JS → Python: don't expect `#private`. Use `_` + properties.
   When coming from Python → JS: prefer `#fields` for real encapsulation in modern code.
