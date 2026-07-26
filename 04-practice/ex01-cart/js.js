// Ex 01 — Cart total (JavaScript)
// Read: ../prompts.md
// Compare with: py.py  |  Solution: solution.js

function lineTotal(price, qty) {
  // TODO
  throw new Error("TODO: lineTotal");
}

function cartTotal(items) {
  // TODO
  throw new Error("TODO: cartTotal");
}

function assertEq(actual, expected, label) {
  if (actual !== expected) {
    console.error(`FAIL ${label}: got ${actual}, expected ${expected}`);
  } else {
    console.log(`OK   ${label}`);
  }
}

assertEq(lineTotal(5, 2), 10, "lineTotal");
assertEq(
  cartTotal([
    { price: 5, qty: 2 },
    { price: -1, qty: 3 },
    { price: 2, qty: 4 },
  ]),
  18,
  "cartTotal"
);
