// Reference solution — Ex 01 (JavaScript)

function lineTotal(price, qty) {
  return price * qty;
}

function cartTotal(items) {
  return items
    .filter((item) => item.price >= 0 && item.qty >= 0)
    .reduce((sum, item) => sum + lineTotal(item.price, item.qty), 0);
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
