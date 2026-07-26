// ============================================================
// 06 — Errors & Null Style  (JavaScript)
// ============================================================

/**
 * @typedef {{ ok: true, value: string } | { ok: false, error: string }} Result
 */

// SAME — make absence explicit at boundaries
function findUser(id) {
  if (id <= 0) return null; // not found
  return { id, email: "ada@example.com" };
}

// SAME — optional chaining + nullish coalescing (everyday senior JS)
const user = findUser(1);
console.log(user?.email?.toUpperCase());
console.log(findUser(-1)?.email ?? "missing");

// DIFF — Result-style (manual) instead of throwing for expected failures
/** @returns {Result} */
function parseEmail(raw) {
  if (!raw || !raw.includes("@")) {
    return { ok: false, error: "invalid email" };
  }
  return { ok: true, value: raw.trim().toLowerCase() };
}

const parsed = parseEmail("Ada@Example.com");
if (!parsed.ok) {
  console.log("fail:", parsed.error);
} else {
  console.log("ok:", parsed.value);
}

// SAME — throw for truly exceptional / programmer errors
function mustGet(id) {
  const u = findUser(id);
  if (!u) throw new Error(`user ${id} not found`);
  return u;
}

try {
  mustGet(-1);
} catch (err) {
  console.log("caught:", err.message);
}

// GOTCHA — `||` vs `??`
console.log(0 || 10); // 10 (0 is falsy)
console.log(0 ?? 10); // 0  (only null/undefined trigger ??)
