# 05 — Functions

## Same ideas

| Idea | JavaScript | Python |
|------|------------|--------|
| Define | `function f(a) {}` / `const f = (a) => {}` | `def f(a):` |
| Default args | `function f(a = 1)` | `def f(a=1)` |
| Variadic | `function f(...args)` | `def f(*args)` |
| Extra named | (use object param) | `def f(**kwargs)` |
| Short lambda | `(x) => x * x` | `lambda x: x * x` |
| Return | `return value` | `return value` |

## Differences & exceptions

1. **Arrow vs lambda**
   - JS arrows can have blocks and multiple statements.
   - Python `lambda` is a single expression only. Use `def` for anything bigger.

2. **`this` vs `self`**
   - JS methods use `this` (binding rules are tricky; arrows inherit lexical `this`).
   - Python methods take explicit `self` as first parameter.

3. **Keyword arguments**
   - Python: `intro(age=36, name="Ada")` is first-class.
   - JS: typically pass an options object: `intro({ name, age })`.

4. **Mutable defaults (Python GOTCHA)**
   - Never write `def f(items=[])`.
   - Use `None` and create a new list inside.

5. **Hoisting**
   - JS `function` declarations are hoisted (callable before definition line).
   - Python functions are not — define before call (unless inside another scope that runs later).
