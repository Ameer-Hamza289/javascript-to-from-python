// ============================================================
// 04 — Control Flow  (JavaScript)
// ============================================================

const score = 85;

// SAME — if / else if / else
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C or below");
}

// SAME — ternary
const label = score >= 60 ? "pass" : "fail";
console.log(label);

// DIFF — switch (classic JS multi-branch)
const day = "mon";
switch (day) {
  case "mon":
  case "tue":
    console.log("weekday start");
    break; // GOTCHA — forget break → fall-through
  case "sat":
  case "sun":
    console.log("weekend");
    break;
  default:
    console.log("midweek");
}

// JS-ONLY-ish — modern pattern matching via if or libraries;
// native switch is equality-based, not structural like Python 3.10 match.

// SAME — truthy condition gotcha reminder
const items = [];
if (items) {
  console.log("JS: empty array is truthy — this runs");
}
if (items.length) {
  console.log("better: check length");
}
