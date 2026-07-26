# 01 — Scope & Closures

## Same ideas
Both languages support **closures**: an inner function that remembers variables from the enclosing scope after that scope has finished.

## Differences & exceptions

1. **Block scope**
   - JS: `let`/`const` are block-scoped (`if`, `for`, `{ }`).
   - Python: functions/classes/modules create scopes. `if`/`for`/`while` do **not**.

2. **`var` (JS)**
   - Function-scoped and hoisted. Prefer `let`/`const`.

3. **Rebinding in closures**
   - JS: inner functions can reassign outer `let` variables freely.
   - Python: reading outer vars is fine; **reassigning** needs `nonlocal` (or `global`).

4. **Mental model**
   - JS: lexical scope + block scope with `let`/`const`.
   - Python: LEGB rule (Local, Enclosing, Global, Builtins).
