// Ex 03 — Unique words (JavaScript)

function uniqueWords(text) {
  // TODO: lowercase, split, strip . , ! ?, unique, sorted
  throw new Error("TODO");
}

function assertEq(actual, expected, label) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(ok ? `OK   ${label}` : `FAIL ${label}: got ${JSON.stringify(actual)}`);
}

assertEq(
  uniqueWords("Hello, world! Hello Python."),
  ["hello", "python", "world"],
  "uniqueWords"
);
