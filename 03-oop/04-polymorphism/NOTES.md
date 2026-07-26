# 04 — Polymorphism & Duck Typing

## Same ideas

**Polymorphism**: same operation (`area()`) works on different types.

**Duck typing**: "If it walks like a duck and quacks like a duck..." — both JS and Python embrace this at runtime.

## Differences & exceptions

1. **No interfaces in plain JS or classic Python**
   - Behavior is what matters at runtime.
   - TypeScript adds interfaces/types for JS.
   - Python `typing.Protocol` adds structural typing for type checkers.

2. **Abstract bases**
   - Python: `abc.ABC` / `@abstractmethod` for formal abstract classes.
   - JS: no built-in abstract class keyword; throw in base methods, or use TypeScript `abstract`.

3. **Practical advice**
   - Prefer small shared method names over deep hierarchies.
   - Validate at boundaries if needed (`typeof obj.area === "function"` / `hasattr` / Protocol).
