// Question bank for the Bridge quiz.
// Each item can be asked in either direction.

const QUESTIONS = [
  {
    id: "truthy-empty-array",
    topic: "Operators",
    promptJsToPy:
      "In JavaScript, an empty array `[]` is truthy. What about an empty list `[]` in Python?",
    promptPyToJs:
      "In Python, an empty list `[]` is falsy. What about an empty array `[]` in JavaScript?",
    choicesJsToPy: [
      { text: "Also falsy — `if []:` does not run", correct: true },
      { text: "Truthy — same as JavaScript", correct: false },
      { text: "Syntax error", correct: false },
    ],
    choicesPyToJs: [
      { text: "Truthy — `if ([])` runs", correct: true },
      { text: "Falsy — same as Python", correct: false },
      { text: "Only Map is truthy", correct: false },
    ],
    explain:
      "Big gotcha: empty `[]` / `{}` are falsy in Python, truthy in JavaScript.",
  },
  {
    id: "null-none",
    topic: "Types",
    promptJsToPy: "What is the closest Python twin of JavaScript `null`?",
    promptPyToJs: "What is the closest JavaScript twin of Python `None`?",
    choicesJsToPy: [
      { text: "None", correct: true },
      { text: "undefined", correct: false },
      { text: "nil", correct: false },
    ],
    choicesPyToJs: [
      { text: "null (and sometimes undefined for 'not set')", correct: true },
      { text: "NaN", correct: false },
      { text: "void", correct: false },
    ],
    explain:
      "`null` ↔ `None`. JavaScript also has `undefined`; Python raises NameError for unbound names.",
  },
  {
    id: "const",
    topic: "Variables",
    promptJsToPy:
      "JavaScript `const` prevents rebinding a name. What does Python use?",
    promptPyToJs:
      "Python has no `const` keyword. What does JavaScript `const` actually guarantee?",
    choicesJsToPy: [
      {
        text: "Convention (UPPER names) / immutable types — no const keyword",
        correct: true,
      },
      { text: "`final` keyword", correct: false },
      { text: "`const` works the same in Python 3.12+", correct: false },
    ],
    choicesPyToJs: [
      {
        text: "The binding can't be reassigned; object contents may still mutate",
        correct: true,
      },
      { text: "Deep immutability of the value", correct: false },
      { text: "The variable becomes global", correct: false },
    ],
    explain:
      "`const` blocks rebinding, not deep immutability. Python relies on convention and immutable types.",
  },
  {
    id: "equality",
    topic: "Operators",
    promptJsToPy:
      "In JS you prefer `===`. In Python, which pair is the usual mapping?",
    promptPyToJs:
      "In Python, `==` compares values and `is` compares identity. In JS, what should you prefer for value compares?",
    choicesJsToPy: [
      { text: "`==` for values; `is` mainly for None/identity", correct: true },
      { text: "`===` exists in Python too", correct: false },
      { text: "Always use `is`", correct: false },
    ],
    choicesPyToJs: [
      { text: "`===` / `!==` (strict, no coercion)", correct: true },
      { text: "`==` only — coercion is fine", correct: false },
      { text: "`is` keyword", correct: false },
    ],
    explain: "JS: prefer `===`. Python: `==` for values, `is` for identity (especially `None`).",
  },
  {
    id: "for-in-of",
    topic: "Loops",
    promptJsToPy:
      "JS `for (const x of arr)` loops values. Which Python form matches?",
    promptPyToJs:
      "Python `for x in arr` loops list values. Which JS form matches?",
    choicesJsToPy: [
      { text: "`for x in arr:`", correct: true },
      { text: "`for x of arr:`", correct: false },
      { text: "`foreach x in arr:`", correct: false },
    ],
    choicesPyToJs: [
      { text: "`for (const x of arr)`", correct: true },
      { text: "`for (const x in arr)`", correct: false },
      { text: "`arr.each(x => …)`", correct: false },
    ],
    explain:
      "Naming trap: Python `for-in` ≈ JS `for-of` for arrays. JS `for-in` loops keys.",
  },
  {
    id: "this-self",
    topic: "OOP",
    promptJsToPy:
      "Inside a JS method you use `this`. What does Python use?",
    promptPyToJs:
      "Python methods take explicit `self`. What is the JS counterpart?",
    choicesJsToPy: [
      { text: "Explicit first param, usually named `self`", correct: true },
      { text: "Implicit `this` keyword like JS", correct: false },
      { text: "`cls` for all methods", correct: false },
    ],
    choicesPyToJs: [
      { text: "`this` (binding depends on how the function is called)", correct: true },
      { text: "Always a required first parameter named `self`", correct: false },
      { text: "`me`", correct: false },
    ],
    explain:
      "`this` is implicit and call-site sensitive in JS; `self` is an ordinary explicit parameter in Python.",
  },
  {
    id: "new",
    topic: "OOP",
    promptJsToPy: "JS needs `new Person()`. How do you construct in Python?",
    promptPyToJs: "Python uses `Person()`. What does JS class construction require?",
    choicesJsToPy: [
      { text: "`Person()` — no `new` keyword", correct: true },
      { text: "`new Person()`", correct: false },
      { text: "`Person.create()`", correct: false },
    ],
    choicesPyToJs: [
      { text: "`new Person()`", correct: true },
      { text: "`Person()` alone is enough for classes", correct: false },
      { text: "`Person.new()`", correct: false },
    ],
    explain: "JS class constructors need `new`. Python calls the class directly.",
  },
  {
    id: "private",
    topic: "OOP",
    promptJsToPy:
      "JS `#balance` is truly private. What's the usual Python approach?",
    promptPyToJs:
      "Python `_balance` is conventional privacy. What gives stronger privacy in modern JS?",
    choicesJsToPy: [
      {
        text: "`_name` convention; `__name` name-mangling — not a hard wall",
        correct: true,
      },
      { text: "`#balance` works in Python 3", correct: false },
      { text: "All attributes are encrypted", correct: false },
    ],
    choicesPyToJs: [
      { text: "Private fields: `#balance`", correct: true },
      { text: "Prefix with `_` only — enforced by the engine", correct: false },
      { text: "`private balance;`", correct: false },
    ],
    explain:
      "JS `#fields` are enforced. Python privacy is mostly convention (`_`) plus name-mangling (`__`).",
  },
  {
    id: "string-plus",
    topic: "Strings",
    promptJsToPy: 'What happens with `"Score: " + 10` in Python?',
    promptPyToJs: 'What happens with `"Score: " + 10` in JavaScript?',
    choicesJsToPy: [
      { text: "TypeError — convert with str() or use an f-string", correct: true },
      { text: 'Becomes `"Score: 10"` automatically', correct: false },
      { text: "Becomes `10`", correct: false },
    ],
    choicesPyToJs: [
      { text: 'Coerces to `"Score: 10"`', correct: true },
      { text: "TypeError", correct: false },
      { text: "NaN", correct: false },
    ],
    explain:
      "JS coerces with `+`. Python does not — use `str()` or f-strings.",
  },
  {
    id: "ternary",
    topic: "Control flow",
    promptJsToPy:
      'JS: `score >= 60 ? "pass" : "fail"`. Python form?',
    promptPyToJs:
      'Python: `"pass" if score >= 60 else "fail"`. JS form?',
    choicesJsToPy: [
      { text: '`"pass" if score >= 60 else "fail"`', correct: true },
      { text: '`score >= 60 ? "pass" : "fail"`', correct: false },
      { text: '`if score >= 60 then "pass"`', correct: false },
    ],
    choicesPyToJs: [
      { text: '`score >= 60 ? "pass" : "fail"`', correct: true },
      { text: '`"pass" if score >= 60 else "fail"`', correct: false },
      { text: "`score >= 60 -> pass`", correct: false },
    ],
    explain: "Same idea, different word order: JS condition-first; Python value-if-true first.",
  },
  {
    id: "map-comprehension",
    topic: "Functional",
    promptJsToPy:
      "`nums.map(n => n * 2)` is idiomatic JS. What's the idiomatic Python twin?",
    promptPyToJs:
      "`[n * 2 for n in nums]` is idiomatic Python. What's the common JS twin?",
    choicesJsToPy: [
      { text: "`[n * 2 for n in nums]` (list comprehension)", correct: true },
      { text: "`nums.map(n => n * 2)`", correct: false },
      { text: "`nums -> n * 2`", correct: false },
    ],
    choicesPyToJs: [
      { text: "`nums.map(n => n * 2)`", correct: true },
      { text: "`[n * 2 for n in nums]`", correct: false },
      { text: "`nums.select(*2)`", correct: false },
    ],
    explain:
      "Python prefers comprehensions; JS prefers array methods like `map`/`filter`.",
  },
  {
    id: "async-start",
    topic: "Async",
    promptJsToPy:
      "JS async functions schedule on the runtime automatically. How do you typically start asyncio?",
    promptPyToJs:
      "Python often boots with `asyncio.run(main())`. In Node/browsers, what happens when you call an `async` function?",
    choicesJsToPy: [
      { text: "`asyncio.run(main())` (or an existing event loop)", correct: true },
      { text: "Just call `main()` — it runs like a sync function", correct: false },
      { text: "`Promise.all(main)`", correct: false },
    ],
    choicesPyToJs: [
      {
        text: "It returns a Promise and the existing event loop can run it",
        correct: true,
      },
      { text: "You must call `asyncio.run`", correct: false },
      { text: "It blocks until finished like sync code", correct: false },
    ],
    explain:
      "Both use async/await, but Python usually needs an explicit event-loop entrypoint.",
  },
  {
    id: "operator-overload",
    topic: "OOP",
    promptJsToPy:
      "Python can overload `+` via `__add__`. What's normal in JS classes?",
    promptPyToJs:
      "JS classes generally can't overload `+`. What does Python use?",
    choicesJsToPy: [
      { text: "Write a method like `.add()` — no real `+` overloading", correct: true },
      { text: "Define `__add__` the same way", correct: false },
      { text: "Use `operator +()` syntax", correct: false },
    ],
    choicesPyToJs: [
      { text: "Dunder methods like `__add__`", correct: true },
      { text: "`Symbol.plus`", correct: false },
      { text: "It also can't overload operators", correct: false },
    ],
    explain:
      "Operator overloading is a Python superpower. In JS, prefer named methods.",
  },
  {
    id: "catch-except",
    topic: "Errors",
    promptJsToPy: "JS uses `try/catch/throw`. Python keywords?",
    promptPyToJs: "Python uses `try/except/raise`. JavaScript keywords?",
    choicesJsToPy: [
      { text: "`try` / `except` / `raise`", correct: true },
      { text: "`try` / `catch` / `throw`", correct: false },
      { text: "`attempt` / `rescue`", correct: false },
    ],
    choicesPyToJs: [
      { text: "`try` / `catch` / `throw`", correct: true },
      { text: "`try` / `except` / `raise`", correct: false },
      { text: "`do` / `catch`", correct: false },
    ],
    explain: "Same structure, different keywords: catch↔except, throw↔raise.",
  },
];
