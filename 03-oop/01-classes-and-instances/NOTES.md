# 01 — Classes & Instances

## Same ideas

Both languages use classes as blueprints for objects with data (attributes/fields) and behavior (methods).

| Idea | JavaScript | Python |
|------|------------|--------|
| Define class | `class Person { }` | `class Person:` |
| Constructor | `constructor(...)` | `def __init__(self, ...)` |
| Instance ref | `this` | `self` (explicit param) |
| Create instance | `new Person(...)` | `Person(...)` |
| Call method | `ada.greet()` | `ada.greet()` |
| Type check | `ada instanceof Person` | `isinstance(ada, Person)` |

## Differences & exceptions

1. **`this` vs `self`**
   - JS: `this` is implicit and depends on **how** the function is called.
   - Python: `self` is an ordinary first parameter (name is convention).

2. **`new`**
   - Required in JS for `class` constructors.
   - Does not exist in Python.

3. **Methods are functions either way**, but JS historically also used constructor functions + prototypes. Modern code uses `class` (still prototype-based under the hood).

4. **Attribute declaration**
   - JS can use class fields (`count = 0`).
   - Python usually assigns in `__init__` (`self.count = 0`).
