// ============================================================
// 01 — Scope & Closures  (JavaScript)
// ============================================================

// SAME — global / function / block scope
const globalName = "global";

function outer() {
  const outerVar = "outer";

  if (true) {
    let blockVar = "block"; // block-scoped (let/const)
    var functionScoped = "var"; // GOTCHA — function scoped, ignores block
    console.log(blockVar);
  }
  // console.log(blockVar); // ReferenceError
  console.log(functionScoped); // works — leaked from block

  // SAME — closure: inner remembers outerVar
  function inner() {
    return `${globalName} / ${outerVar}`;
  }
  return inner;
}

const fn = outer();
console.log(fn());

// SAME — classic closure factory
function makeCounter() {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
}

const c1 = makeCounter();
const c2 = makeCounter();
console.log(c1(), c1(), c2()); // 1 2 1 — independent state
