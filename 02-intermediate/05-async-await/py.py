# ============================================================
# 05 — Async / Await  (Python)
# Read with: js.js  |  Then: NOTES.md
# ============================================================

import asyncio


# SAME — fake async I/O with a delay helper
async def delay(seconds, value):
    await asyncio.sleep(seconds)
    return value


# SAME — async function (coroutine). DIFF — does not auto-run; needs event loop
async def fetch_user(id_):
    user = await delay(0.08, {"id": id_, "name": "Ada"})
    return user


# SAME — sequential awaits
async def sequential():
    a = await delay(0.05, "one")
    b = await delay(0.05, "two")
    return [a, b]


# SAME — run tasks concurrently
async def parallel():
    # DIFF — asyncio.gather ↔ Promise.all
    results = await asyncio.gather(
        delay(0.08, "x"),
        delay(0.04, "y"),
        delay(0.06, "z"),
    )
    return results  # order matches input order


# SAME — error handling with try/except around await
async def may_fail(should_fail):
    try:
        if should_fail:
            raise RuntimeError("boom")
        return "ok"
    except RuntimeError as err:
        return f"caught: {err}"


# SAME — top-level entry. DIFF — asyncio.run(...) boots the event loop
async def main():
    print(await fetch_user(1))
    print(await sequential())
    print(await parallel())
    print(await may_fail(True))

    # GOTCHA — forgetting await → you get a coroutine object, not the value
    forgotten = fetch_user(2)
    print("forgot await:", type(forgotten).__name__)  # coroutine
    print("with await:", await forgotten)


if __name__ == "__main__":
    asyncio.run(main())
