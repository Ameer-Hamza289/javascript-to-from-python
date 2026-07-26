// ============================================================
// 05 — Functions  (JavaScript)
// ============================================================

// SAME — named function
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Ada"));

// SAME — default parameters
function greetWithDefault(name = "friend") {
  return `Hello, ${name}`;
}
console.log(greetWithDefault());

// SAME — rest parameters (variadic)
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4));

// SAME — arrow functions (short lambdas)
const square = (x) => x * x;
const add = (a, b) => a + b;
console.log(square(5), add(2, 3));

// DIFF — function expressions / first-class functions (both support this)
const ops = {
  double: (x) => x * 2,
  negate: (x) => -x,
};
console.log(ops.double(10));

// GOTCHA — `this` binding differs for function vs arrow (see OOP lessons)
const person = {
  name: "Ada",
  sayHi: function () {
    return `Hi, I'm ${this.name}`;
  },
  // arrow would NOT bind this to person here
};
console.log(person.sayHi());

// SAME — early return
function abs(n) {
  if (n < 0) return -n;
  return n;
}
console.log(abs(-3));

// DIFF — no positional-only / keyword-only params like Python
function intro(name, age) {
  return `${name} is ${age}`;
}
console.log(intro("Ada", 36));
