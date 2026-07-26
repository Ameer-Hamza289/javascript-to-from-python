# 05 — Concurrency Beyond Basics

## Decision table

| Workload | JavaScript | Python |
|----------|------------|--------|
| Many network waits | `async`/`await`, `Promise.all` | `asyncio`, `gather` / TaskGroup |
| Blocking library call | sometimes Workers; usually async APIs | `asyncio.to_thread` / thread pool |
| CPU-heavy pure code | `worker_threads` / `child_process` | `ProcessPoolExecutor` / multiprocessing |
| Shared memory complexity | structured clone / messages | queues, managers, careful sharing |

## Differences & exceptions

1. **Event loop is the default runtime in JS.** In Python, sync code is default; asyncio is opt-in.

2. **GIL (Python)**
   - Threads won't speed up most pure-Python CPU work.
   - Use processes (or native extensions) for CPU parallelism.

3. **JS has no GIL**, but one thread still runs your JS. CPU still needs Workers.

4. **Senior rule (both):**  
   I/O → async  
   CPU → another core (worker/process)  
   Never starve the loop with a tight `for` on the main thread.

5. **Framework note**
   - Node web servers are async by nature.
   - Python: FastAPI/asyncio vs Django sync views — know which model your stack uses.
