// ============================================================
// 03 — Strings  (JavaScript)
// ============================================================

const name = "Ada";
const lang = "JavaScript";

// SAME — concatenation
console.log("Hello, " + name);

// SAME — interpolation (template literals)
console.log(`Hello, ${name}. Welcome to ${lang}.`);

// SAME — common methods (names differ slightly)
const s = "  Hello World  ";
console.log(s.trim());
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.includes("World"));
console.log(s.replace("World", "JS"));
console.log(s.trim().split(" "));
console.log("ha".repeat(3));
console.log(s.trim().startsWith("Hello"));
console.log(s.trim().endsWith("World"));
console.log("hello".slice(1, 4));      // "ell"
console.log("hello".indexOf("l"));     // 2

// DIFF — strings are immutable in both; methods return new strings
const original = "hi";
const upper = original.toUpperCase();
console.log(original, upper); // "hi" "HI"

// DIFF — no character type; a char is a string of length 1
console.log("hello"[1]); // "e"
console.log("hello".length);

// SAME-ish — multiline
const multi = `line1
line2`;
console.log(multi);

// GOTCHA — + with string coerces numbers
console.log("Score: " + 10); // "Score: 10"
console.log(10 + "5");       // "105"  (string concat)
console.log(10 - "5");       // 5     (- forces number)
