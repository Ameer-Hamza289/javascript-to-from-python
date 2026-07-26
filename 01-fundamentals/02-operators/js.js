// ============================================================
// 02 — Operators  (JavaScript)
// ============================================================

const a = 10;
const b = 3;

// SAME — arithmetic
console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...  DIFF — always float division
console.log(a % b);   // 1
console.log(a ** b);  // 1000

// DIFF — integer division: Math.floor or bitwise (careful with negatives)
console.log(Math.floor(a / b)); // 3
console.log(Math.trunc(a / b)); // 3

// SAME — comparison
console.log(a > b);    // true
console.log(a >= 10);  // true
console.log(a === 10); // true
console.log(a !== b);  // true

// SAME — logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// DIFF — && / || return operands, not always boolean
console.log("hi" && "bye"); // "bye"  (last truthy)
console.log(null || "fallback"); // "fallback"
console.log(0 ?? "fallback");    // 0 — nullish coalescing (only null/undefined)

// SAME — assignment shortcuts
let n = 5;
n += 2;  // 7
n *= 3;  // 21

// GOTCHA — truthiness table differs slightly from Python
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean([]));       // true  — GOTCHA: empty array is truthy
console.log(Boolean({}));       // true  — GOTCHA: empty object is truthy
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false

// SAME — unary increment (JS-ONLY common style)
let i = 0;
i++;
++i;
console.log(i); // 2
