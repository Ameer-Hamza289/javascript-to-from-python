# JS ↔ Python Cheatsheet

Quick syntax map. Details and exceptions live in each lesson's `NOTES.md`.

## Variables & types

| | JavaScript | Python |
|---|------------|--------|
| Declare | `let x = 1` / `const x = 1` | `x = 1` |
| Nullish | `null` / `undefined` | `None` |
| Bool | `true` `false` | `True` `False` |
| Type check | `typeof x` | `type(x)` |
| Strict eq | `===` | `==` (value) / `is` (identity) |

## Strings

| | JavaScript | Python |
|---|------------|--------|
| Interpolate | `` `Hi ${name}` `` | `f"Hi {name}"` |
| Length | `s.length` | `len(s)` |
| Trim | `trim()` | `strip()` |
| Upper | `toUpperCase()` | `upper()` |
| Contains | `includes(x)` | `x in s` |

## Collections

| | JavaScript | Python |
|---|------------|--------|
| List | `[1, 2]` | `[1, 2]` |
| Map/dict | `{a: 1}` / `Map` | `{"a": 1}` |
| Set | `new Set([1,2])` | `{1, 2}` |
| Length | `.length` / `.size` | `len(x)` |
| Append | `push` | `append` |

## Control & loops

| | JavaScript | Python |
|---|------------|--------|
| Else-if | `else if` | `elif` |
| Ternary | `c ? a : b` | `a if c else b` |
| Values loop | `for (const x of arr)` | `for x in arr` |
| Index loop | `for (let i=0; i<n; i++)` | `for i in range(n)` |

## Functions

| | JavaScript | Python |
|---|------------|--------|
| Define | `function f()` / `=>` | `def f():` |
| Defaults | `f(x=1)` | `f(x=1)` |
| Variadic | `...args` | `*args` |
| Lambda | `(x) => x*x` | `lambda x: x*x` |

## OOP

| | JavaScript | Python |
|---|------------|--------|
| Class | `class P {}` | `class P:` |
| Ctor | `constructor()` | `__init__` |
| Self | `this` | `self` |
| New instance | `new P()` | `P()` |
| Inherit | `extends` | `class C(P)` |
| Super | `super()` | `super()` |
| Private | `#field` | `_field` / `__field` |
| toString | `toString()` | `__str__` |

## Async

| | JavaScript | Python |
|---|------------|--------|
| Async fn | `async function f()` | `async def f():` |
| Await | `await promise` | `await awaitable` |
| Delay | `Promise` + `setTimeout` | `asyncio.sleep` |
| Parallel | `Promise.all([...])` | `asyncio.gather(...)` |
| Start | call async fn (runtime loop) | `asyncio.run(main())` |

## Truthiness gotchas

| Value | JS truthy? | Python truthy? |
|-------|------------|----------------|
| `0` | no | no |
| `""` | no | no |
| `[]` | **yes** | **no** |
| `{}` | **yes** | **no** |
| `null`/`None` | no | no |
| `undefined` | no | (doesn't exist) |
