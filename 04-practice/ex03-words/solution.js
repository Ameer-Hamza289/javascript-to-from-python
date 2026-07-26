function uniqueWords(text) {
  const parts = text.toLowerCase().split(/\s+/).filter(Boolean);
  const cleaned = parts.map((w) => w.replace(/^[.,!?]+|[.,!?]+$/g, ""));
  return [...new Set(cleaned)].sort();
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
