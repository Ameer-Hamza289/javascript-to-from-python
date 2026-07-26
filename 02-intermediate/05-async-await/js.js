// ============================================================
// 05 — Async / Await  (JavaScript)
// Read with: py.py  |  Then: NOTES.md
// ============================================================

// SAME — fake async I/O with a delay helper
function delay(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

// SAME — async function returns a Promise
async function fetchUser(id) {
  // pretend network call
  const user = await delay(80, { id, name: "Ada" });
  return user;
}

// SAME — sequential awaits
async function sequential() {
  const a = await delay(50, "one");
  const b = await delay(50, "two");
  return [a, b];
}

// SAME — run tasks concurrently
async function parallel() {
  // DIFF — Promise.all ↔ asyncio.gather
  const results = await Promise.all([
    delay(80, "x"),
    delay(40, "y"),
    delay(60, "z"),
  ]);
  return results; // order matches input order
}

// SAME — error handling with try/catch around await
async function mayFail(shouldFail) {
  try {
    if (shouldFail) {
      await Promise.reject(new Error("boom"));
    }
    return "ok";
  } catch (err) {
    return `caught: ${err.message}`;
  }
}

// SAME — fire-and-handle at the top level
async function main() {
  console.log(await fetchUser(1));
  console.log(await sequential());
  console.log(await parallel());
  console.log(await mayFail(true));

  // GOTCHA — forgetting await → you get a Promise object, not the value
  const forgotten = fetchUser(2);
  console.log("forgot await:", forgotten.constructor.name); // Promise
  console.log("with await:", await forgotten);
}

main();
