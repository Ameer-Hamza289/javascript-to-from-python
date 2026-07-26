// ============================================================
// 01 — Typing  (JavaScript + JSDoc standing in for TypeScript)
// In real teams you'd use TypeScript (.ts). JSDoc shows the same ideas
// without a build step: run with `node js.js`
// ============================================================

/**
 * SAME — annotate params and return types
 * @param {string} name
 * @param {number} [age]
 * @returns {string}
 */
function greet(name, age) {
  return age === undefined ? `Hi, ${name}` : `Hi, ${name} (${age})`;
}

/**
 * SAME — unions / optional
 * @typedef {{ id: number, email?: string }} User
 * @param {string | null} raw
 * @returns {User | null}
 */
function parseUser(raw) {
  if (raw === null || raw.trim() === "") return null;
  return { id: Number(raw), email: undefined };
}

/**
 * SAME — generics (JSDoc)
 * @template T
 * @param {T[]} items
 * @returns {T | undefined}
 */
function first(items) {
  return items[0];
}

/**
 * DIFF — structural typing / interfaces are a TS-time concept.
 * At runtime JS stays dynamic. Types erase (TS) or are comments (JSDoc).
 * @typedef {Object} HasArea
 * @property {() => number} area
 */

/** @param {HasArea} shape */
function printArea(shape) {
  console.log(shape.area());
}

printArea({ area: () => 12 });
console.log(greet("Ada", 36), parseUser("7"), first(["a", "b"]));

// JS-ONLY — TypeScript extras you'll meet on teams:
// - interface / type aliases
// - strict null checks
// - utility types: Partial<T>, Pick<T>, Record<K,V>
// - satisfies / const assertions
// Check NOTES.md for the Python map.
