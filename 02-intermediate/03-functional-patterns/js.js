// ============================================================
// 03 — Functional Patterns  (JavaScript)
// ============================================================

const nums = [1, 2, 3, 4, 5];

// SAME — map / filter / reduce
const doubled = nums.map((n) => n * 2);
const evens = nums.filter((n) => n % 2 === 0);
const total = nums.reduce((acc, n) => acc + n, 0);
console.log(doubled, evens, total);

// SAME — chaining
const result = nums
  .filter((n) => n > 2)
  .map((n) => n * 10)
  .reduce((acc, n) => acc + n, 0);
console.log(result);

// SAME — find / some / every
console.log(nums.find((n) => n > 3));
console.log(nums.some((n) => n > 4));
console.log(nums.every((n) => n > 0));

// DIFF — no built-in list/dict/set comprehensions; use map/filter or loops
const squares = nums.map((n) => n ** 2);
console.log(squares);
