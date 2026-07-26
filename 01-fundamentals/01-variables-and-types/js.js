// ============================================================
// 01 — Variables & Types  (JavaScript)
// Read with: py.py  |  Then: NOTES.md
// ============================================================

// SAME — declare and assign
let age = 25;              // can be reassigned
const PI = 3.14159;        // cannot be reassigned
var oldStyle = "avoid";    // GOTCHA — function-scoped; prefer let/const

// SAME — dynamic typing (types live on values, not variables)
let value = 42;
value = "now a string";    // allowed
value = true;              // still allowed

// SAME — common primitive types
const num = 10;            // number (int AND float are both `number`)
const floaty = 10.5;       // still `number` — DIFF from Python
const text = "hello";      // string
const flag = true;         // boolean
const nothing = null;      // intentional empty
let notSet;                // undefined — DIFF: Python has no undefined
const unique = Symbol("id"); // JS-ONLY

// SAME — check type
console.log(typeof num);       // "number"
console.log(typeof text);      // "string"
console.log(typeof flag);      // "boolean"
console.log(typeof nothing);   // GOTCHA — "object" (historical bug)
console.log(typeof notSet);    // "undefined"

// SAME — type conversion
console.log(Number("42"));     // 42
console.log(String(42));       // "42"
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("hi"));    // true

// DIFF — === vs ==
console.log(1 == "1");         // true  (coercion) — avoid
console.log(1 === "1");        // false (strict)  — prefer this

// SAME — constants of collections are mutable contents
const scores = [1, 2, 3];
scores.push(4);                // OK — const blocks rebinding, not mutation
// scores = [];                // Error — cannot rebind const

console.log({ age, PI, value, num, floaty, text, flag, nothing, notSet });
