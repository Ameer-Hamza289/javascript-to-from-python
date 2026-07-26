// ============================================================
// 05 — Concurrency Beyond Basics  (JavaScript)
// ============================================================

import { Worker } from "node:worker_threads";
import { cpus } from "node:os";

// SAME — async concurrency ≠ parallel CPU
async function fakeIo(ms, label) {
  await new Promise((r) => setTimeout(r, ms));
  return label;
}

console.log(
  "async parallel I/O:",
  await Promise.all([fakeIo(40, "a"), fakeIo(40, "b")])
);

// DIFF — CPU-bound work needs Worker threads (or child processes)
function runInWorker(n) {
  return new Promise((resolve, reject) => {
    const code = `
      const { parentPort, workerData } = require("node:worker_threads");
      let total = 0;
      for (let i = 0; i < workerData.n; i++) total += i;
      parentPort.postMessage(total);
    `;
    const worker = new Worker(code, { eval: true, workerData: { n } });
    worker.on("message", resolve);
    worker.on("error", reject);
  });
}

console.log("cpu cores:", cpus().length);
console.log("worker sum:", await runInWorker(100000));

// GOTCHA — a tight CPU loop on the main thread freezes ALL async I/O
// Prefer: Workers for CPU, async/await for I/O, never block the event loop
