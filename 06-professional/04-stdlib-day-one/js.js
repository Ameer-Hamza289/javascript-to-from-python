// ============================================================
// 04 — Stdlib Day-One  (JavaScript / Node)
// ============================================================

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { URL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SAME — join paths safely
const readme = path.join(__dirname, "..", "..", "README.md");
console.log("readme path:", readme);

// SAME — read a file (async)
const sample = path.join(__dirname, "sample.json");
const raw = await fs.readFile(sample, "utf8");

// SAME — JSON parse/stringify
const data = JSON.parse(raw);
console.log("title:", data.title);
console.log(JSON.stringify({ ok: true, n: 1 }));

// SAME — URL parsing
const u = new URL("https://example.com/api?x=1");
console.log(u.hostname, u.searchParams.get("x"));

// SAME-ish — group values (manual / Map)
const words = ["ada", "alan", "ada"];
const counts = new Map();
for (const w of words) counts.set(w, (counts.get(w) ?? 0) + 1);
console.log(counts);

// DIFF — Node fetch is global in modern Node; no requests-like stdlib historically
try {
  const health = await fetch("https://example.com").then((r) => r.status);
  console.log("http status:", health);
} catch (err) {
  console.log("http skipped:", err.name);
}

// Day-one Node modules to know: fs, path, url, crypto, util, stream, child_process
