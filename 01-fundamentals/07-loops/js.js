// ============================================================
// 07 — Loops  (JavaScript)
// ============================================================

const fruits = ["apple", "banana", "cherry"];

// SAME — while
let i = 0;
while (i < 3) {
  console.log("while", i);
  i++;
}

// DIFF — C-style for (common in JS, rare/absent in Python)
for (let n = 0; n < 3; n++) {
  console.log("for-c", n);
}

// SAME — iterate values
for (const fruit of fruits) {
  console.log("of", fruit);
}

// GOTCHA — for...in iterates KEYS (indexes for arrays) — prefer for...of for arrays
for (const index in fruits) {
  console.log("in", index, fruits[index]);
}

// SAME — iterate object entries
const user = { name: "Ada", age: 36 };
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}

// SAME — break / continue
for (const fruit of fruits) {
  if (fruit === "banana") continue;
  if (fruit === "cherry") break;
  console.log("filtered", fruit);
}

// SAME — array helpers (functional style)
fruits.forEach((fruit, idx) => console.log(idx, fruit));
