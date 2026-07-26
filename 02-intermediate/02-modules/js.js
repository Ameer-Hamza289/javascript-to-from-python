// ============================================================
// 02 — Modules  (JavaScript, ESM)
// Run from repo root: node 02-intermediate/02-modules/js.js
// ============================================================

// SAME — named imports
import { add, multiply } from "./mathUtils.js";

// SAME — default import
import greet from "./mathUtils.js";

// SAME — namespace import
import * as math from "./mathUtils.js";

console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(greet("Ada"));
console.log(math.add(10, 1));

// DIFF — file URLs / extensions often required in ESM
// DIFF — CommonJS still exists: const x = require("./file") / module.exports
