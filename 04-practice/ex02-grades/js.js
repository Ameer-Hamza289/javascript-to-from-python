// Ex 02 — Grade report (JavaScript)

function letterGrade(score) {
  // TODO: A>=90 B>=80 C>=70 D>=60 else F
  throw new Error("TODO");
}

function summarize(scores) {
  // TODO: map name -> letter
  throw new Error("TODO");
}

function assertEq(actual, expected, label) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(ok ? `OK   ${label}` : `FAIL ${label}: got ${JSON.stringify(actual)}`);
}

assertEq(letterGrade(95), "A", "A");
assertEq(letterGrade(72), "C", "C");
assertEq(letterGrade(50), "F", "F");
assertEq(summarize({ Ada: 95, Grace: 72 }), { Ada: "A", Grace: "C" }, "summarize");
