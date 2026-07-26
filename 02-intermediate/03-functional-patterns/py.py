# ============================================================
# 03 — Functional Patterns  (Python)
# ============================================================

nums = [1, 2, 3, 4, 5]

# SAME — map / filter / reduce exist, but comprehensions are more idiomatic
doubled = list(map(lambda n: n * 2, nums))
evens = list(filter(lambda n: n % 2 == 0, nums))
from functools import reduce
total = reduce(lambda acc, n: acc + n, nums, 0)
print(doubled, evens, total)

# PY-ONLY (preferred) — list / dict / set comprehensions
doubled2 = [n * 2 for n in nums]
evens2 = [n for n in nums if n % 2 == 0]
squares = {n: n ** 2 for n in nums}
unique_parity = {n % 2 for n in nums}
print(doubled2, evens2, squares, unique_parity)

# SAME — chaining via generator expressions / steps
result = sum(n * 10 for n in nums if n > 2)
print(result)

# SAME — find / some / every equivalents
print(next((n for n in nums if n > 3), None))  # find
print(any(n > 4 for n in nums))                # some
print(all(n > 0 for n in nums))                # every
