# 03 — Testing

## Same ideas

| Idea | JavaScript | Python |
|------|------------|--------|
| Test runner | `node:test`, Jest, Vitest | pytest (unittest in stdlib) |
| Test case | `test("name", fn)` | `def test_name():` |
| Assert | `assert.equal` / `expect` | `assert` / `pytest` helpers |
| Setup/teardown | `beforeEach` / `afterEach` | fixtures / setup methods |
| Mocking | `jest.fn` / `vi.fn` / `mock.method` | `unittest.mock` / `monkeypatch` |
| Parametrize | `test.each` / table tests | `@pytest.mark.parametrize` |

## Differences & exceptions

1. **Assert style**
   - Jest/Vitest: rich matchers (`toEqual`, `toMatchObject`).
   - pytest: plain `assert` is rewritten with introspected diffs — very nice.

2. **Discovery**
   - JS: configured by runner (file patterns `*.test.js`).
   - pytest: collects `test_*.py` / `*_test.py` and `test_*` functions.

3. **Async tests**
   - JS: `async` test functions are normal.
   - pytest: `async def test_…` needs `pytest-asyncio` (or similar).

4. **What seniors do**
   - Prefer many small pure-function unit tests.
   - Reserve integration tests for DB/HTTP boundaries.
   - Mock at the edges, not every internal call.
