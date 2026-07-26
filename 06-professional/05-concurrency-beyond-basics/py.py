# ============================================================
# 05 — Concurrency Beyond Basics  (Python)
# ============================================================

import asyncio
from concurrent.futures import ProcessPoolExecutor, ThreadPoolExecutor
import os


# SAME — async concurrency ≠ parallel CPU
async def fake_io(seconds, label):
    await asyncio.sleep(seconds)
    return label


async def io_demo():
    print(
        "async parallel I/O:",
        await asyncio.gather(fake_io(0.04, "a"), fake_io(0.04, "b")),
    )


def cpu_bound_sum(n: int) -> int:
    return sum(range(n))


async def main():
    await io_demo()
    print("cpu count:", os.cpu_count())

    # DIFF — threads: good for blocking I/O libs; limited by GIL for pure Python CPU
    loop = asyncio.get_running_loop()
    with ThreadPoolExecutor(max_workers=2) as pool:
        threaded = await loop.run_in_executor(pool, cpu_bound_sum, 100_000)
    print("thread pool sum:", threaded)

    # DIFF — processes: true parallelism for CPU-bound Python
    with ProcessPoolExecutor(max_workers=2) as pool:
        processed = await loop.run_in_executor(pool, cpu_bound_sum, 100_000)
    print("process pool sum:", processed)

    # GOTCHA — heavy CPU in the event-loop thread starves all coroutines
    # Prefer: asyncio for I/O, threads for blocking libs, processes for CPU


if __name__ == "__main__":
    asyncio.run(main())
