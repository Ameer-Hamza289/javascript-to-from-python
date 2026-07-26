function letterGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function summarize(scores) {
  const out = {};
  for (const [name, score] of Object.entries(scores)) {
    out[name] = letterGrade(score);
  }
  return out;
}

function assertEq(actual, expected, label) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(ok ? `OK   ${label}` : `FAIL ${label}: got ${JSON.stringify(actual)}`);
}

assertEq(letterGrade(95), "A", "A");
assertEq(letterGrade(72), "C", "C");
assertEq(letterGrade(50), "F", "F");
assertEq(summarize({ Ada: 95, Grace: 72 }), { Ada: "A", Grace: "C" }, "summarize");
