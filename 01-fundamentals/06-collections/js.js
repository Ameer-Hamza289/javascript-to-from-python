// ============================================================
// 06 — Collections  (JavaScript)
// ============================================================

// SAME — ordered list → Array ↔ list
const nums = [10, 20, 30];
nums.push(40);                 // append
console.log(nums[0]);          // 10
console.log(nums.length);
console.log(nums.slice(1, 3)); // [20, 30]
console.log(nums.includes(20));

// SAME — key/value map → Object (and Map)
const user = { name: "Ada", age: 36 };
console.log(user.name);
console.log(user["age"]);
user.city = "London";
delete user.age;
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// DIFF — Map when keys aren't plain strings / need insertion guarantees
const m = new Map();
m.set("a", 1);
m.set(1, "one");               // non-string key OK
console.log(m.get("a"), m.has(1), m.size);

// SAME — unique values → Set
const s = new Set([1, 2, 2, 3]);
s.add(4);
console.log(s.has(2), s.size);

// DIFF — no tuple type; use arrays (or freeze for immutability signal)
const point = Object.freeze([3, 4]);
console.log(point[0], point[1]);

// SAME — nested structures
const team = [
  { name: "Ada", skills: ["math", "code"] },
  { name: "Grace", skills: ["navy", "code"] },
];
console.log(team[0].skills[1]);
