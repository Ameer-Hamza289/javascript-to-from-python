# JS ↔ Python Bridge

Learn **JavaScript** and **Python** by relating them — not by memorizing two separate languages.

Whether you're a JS developer learning Python, or a Python developer learning JS, every lesson puts the same idea side by side, then calls out where they diverge.

---

## How to use this repo

### Path A — I'm a JS developer → learn Python
1. Open each lesson folder.
2. Read `js.js` first (you already know this).
3. Read `py.py` next — same examples, Python syntax.
4. Read `NOTES.md` for differences, gotchas, and mental models.

### Path B — I'm a Python developer → learn JS
1. Open each lesson folder.
2. Read `py.py` first (you already know this).
3. Read `js.js` next — same examples, JS syntax.
4. Read `NOTES.md` for differences, gotchas, and mental models.

### Comment tags you'll see in code

| Tag | Meaning |
|-----|---------|
| `# SAME` / `// SAME` | Same concept, different syntax |
| `# DIFF` / `// DIFF` | Important behavioral difference |
| `# GOTCHA` / `// GOTCHA` | Easy trap when switching languages |
| `# PY-ONLY` / `// JS-ONLY` | Feature that doesn't map cleanly |

---

## Curriculum

### 01 — Fundamentals
| # | Topic | What you'll relate |
|---|-------|--------------------|
| 01 | [Variables & Types](01-fundamentals/01-variables-and-types) | `let`/`const` ↔ assignment, dynamic typing |
| 02 | [Operators](01-fundamentals/02-operators) | Arithmetic, comparison, truthiness |
| 03 | [Strings](01-fundamentals/03-strings) | Templates, f-strings, methods |
| 04 | [Control Flow](01-fundamentals/04-control-flow) | `if`/`elif`/`else`, ternary, switch vs match |
| 05 | [Functions](01-fundamentals/05-functions) | Defaults, rest/args, lambdas/arrows |
| 06 | [Collections](01-fundamentals/06-collections) | Arrays↔lists, objects↔dicts, Set, Map |
| 07 | [Loops](01-fundamentals/07-loops) | `for`/`while`, `for...of` ↔ `for in` |
| 08 | [Error Handling](01-fundamentals/08-error-handling) | try/catch ↔ try/except |

### 02 — Intermediate
| # | Topic | What you'll relate |
|---|-------|--------------------|
| 01 | [Scope & Closures](02-intermediate/01-scope-and-closures) | LEGB ↔ lexical scope |
| 02 | [Modules](02-intermediate/02-modules) | `import`/`export` ↔ `import`/`from` |
| 03 | [Functional Patterns](02-intermediate/03-functional-patterns) | map/filter/reduce ↔ list comps |
| 04 | [Destructuring & Unpacking](02-intermediate/04-destructuring-unpacking) | Object/array destructuring ↔ unpacking |

### 03 — Object-Oriented Programming
| # | Topic | What you'll relate |
|---|-------|--------------------|
| 01 | [Classes & Instances](03-oop/01-classes-and-instances) | `class`, constructors, `this` ↔ `self` |
| 02 | [Inheritance](03-oop/02-inheritance) | `extends`/`super` ↔ subclassing |
| 03 | [Encapsulation](03-oop/03-encapsulation) | `#private` ↔ `_` / `__` name mangling |
| 04 | [Polymorphism & Duck Typing](03-oop/04-polymorphism) | Interfaces vs duck typing |
| 05 | [Special Methods & Operators](03-oop/05-special-methods) | toString ↔ `__str__`, operator overloading |

### Extra
- [Cheatsheet](cheatsheet.md) — quick syntax map
- [Practice exercises](04-practice) — apply both languages on the same problems

---

## Run the examples

```bash
# JavaScript (Node.js)
node 01-fundamentals/01-variables-and-types/js.js

# Python 3
python 01-fundamentals/01-variables-and-types/py.py
```

No frameworks. No build step. Just open a file, run it, compare.

---

## Learning tip

Don't rush past the **DIFF** and **GOTCHA** comments — those are where real understanding happens. Syntax is easy to look up; mental models stick when you see *why* the languages disagree.
