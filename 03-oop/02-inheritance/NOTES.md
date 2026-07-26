# 02 — Inheritance

## Same ideas

| Idea | JavaScript | Python |
|------|------------|--------|
| Inherit | `class Dog extends Animal` | `class Dog(Animal):` |
| Parent ctor/method | `super(...)` / `super.method()` | `super().__init__(...)` / `super().method()` |
| Override | redefine method same name | redefine method same name |
| Is-a check | `instanceof` | `isinstance` |

## Differences & exceptions

1. **`super` before `this` (JS)**
   - In a subclass constructor, call `super(...)` before using `this`.

2. **Multiple inheritance**
   - Python supports multiple base classes (`class C(A, B)`).
   - JS classes have single `extends` (mixins/composition used instead).

3. **Under the hood**
   - JS inheritance is prototype linking.
   - Python uses an MRO (method resolution order), important with multiple inheritance.

4. Prefer composition when inheritance gets deep in either language.
