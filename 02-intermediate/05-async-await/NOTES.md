# 05 — Async / Await

## Mental model (both)
Async lets you write I/O-style waiting **without blocking the whole program**.  
`await` pauses *this* async function until a result is ready, while other work can continue.

## Same ideas

| Idea | JavaScript | Python |
|------|------------|--------|
| Async function | `async function f()` | `async def f():` |
| Wait for result | `await promise` | `await awaitable` |
| Delay | `setTimeout` → Promise | `asyncio.sleep` |
| Run many together | `Promise.all([...])` | `asyncio.gather(...)` |
| Catch failures | `try/catch` around `await` | `try/except` around `await` |

## Differences & exceptions

1. **What you await**
   - JS: mostly `Promise`s.
   - Python: awaitables (coroutines, Tasks, Futures). An `async def` call returns a **coroutine object** until awaited/scheduled.

2. **Starting the world**
   - JS (Node/browsers): the runtime is already event-loop based; calling an `async` function schedules a Promise.
   - Python: you typically boot with `asyncio.run(main())` (or an existing loop in frameworks).

3. **Forgetting `await`**
   - JS: you get a `Promise` (often a silent logic bug).
   - Python: you get a `coroutine` object and usually a `RuntimeWarning` if never awaited.

4. **Concurrency helpers**
   - JS: `Promise.all` / `Promise.allSettled` / `Promise.race`
   - Python: `asyncio.gather` / `asyncioTaskGroup` (3.11+) / `asyncio.wait`

5. **CPU-bound work**
   - Neither model makes heavy CPU magically parallel on one thread.
   - JS: worker threads; Python: threads/processes/`asyncio.to_thread` for blocking I/O libs.

6. **Ecosystem defaults**
   - JS: async is everywhere (fetch, databases, frameworks).
   - Python: many libs are still sync; async is common in web/network stacks (FastAPI, aiohttp), not universal.
