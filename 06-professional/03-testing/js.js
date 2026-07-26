// ============================================================
// 03 — Testing  (JavaScript — Node built-in test runner)
// Run: node --test 06-professional/03-testing/js.js
// Jest/Vitest APIs feel the same: describe/test/expect
// ============================================================

import test from "node:test";
import assert from "node:assert/strict";

// SAME — pure function under test
function cartTotal(items) {
  return items
    .filter((i) => i.price >= 0 && i.qty >= 0)
    .reduce((sum, i) => sum + i.price * i.qty, 0);
}

// SAME — arrange / act / assert
test("cartTotal sums valid lines", () => {
  const items = [
    { price: 5, qty: 2 },
    { price: -1, qty: 9 },
  ];
  assert.equal(cartTotal(items), 10);
});

test("cartTotal empty -> 0", () => {
  assert.equal(cartTotal([]), 0);
});

// DIFF — Jest/Vitest extras you'll see at work:
// expect(x).toEqual(...), mocking (vi.fn / jest.fn), snapshot tests
// Fixtures: beforeEach / afterEach (also available in node:test)
