// ============================================================
// 04 — Destructuring & Unpacking  (JavaScript)
// ============================================================

// SAME — array destructuring ↔ sequence unpacking
const point = [3, 4];
const [x, y] = point;
console.log(x, y);

// SAME — skip / rest
const nums = [1, 2, 3, 4];
const [first, , third, ...rest] = nums;
console.log(first, third, rest);

// SAME — object destructuring ↔ (manual / dataclasses / operator tricks)
const user = { name: "Ada", age: 36, city: "London" };
const { name, age } = user;
const { city: hometown } = user; // rename
console.log(name, age, hometown);

// SAME — defaults
const { role = "dev" } = user;
console.log(role);

// SAME — function params
function intro({ name, age }) {
  return `${name} (${age})`;
}
console.log(intro(user));

// SAME — swap
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

// SAME — spread
const more = { ...user, age: 37 };
const combined = [...nums, 5];
console.log(more, combined);
