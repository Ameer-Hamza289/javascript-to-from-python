# ============================================================
# 02 — Operators  (Python)
# ============================================================

a = 10
b = 3

# SAME — arithmetic
print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...  always float division (Python 3)
print(a % b)   # 1
print(a ** b)  # 1000

# DIFF — true integer division operator
print(a // b)  # 3  — floor division

# SAME — comparison
print(a > b)     # True
print(a >= 10)   # True
print(a == 10)   # True
print(a != b)    # True

# PY-ONLY — chained comparisons (reads like math)
print(1 < a < 20)  # True

# SAME — logical (DIFF — words, not symbols)
print(True and False)  # False
print(True or False)   # True
print(not True)        # False

# DIFF — and/or also return operands
print("hi" and "bye")       # "bye"
print(None or "fallback")   # "fallback"
# PY-ONLY — no ?? operator; use `x if x is not None else fallback`
x = 0
print(x if x is not None else "fallback")  # 0

# SAME — assignment shortcuts
n = 5
n += 2  # 7
n *= 3  # 21

# GOTCHA — truthiness
print(bool(0))      # False
print(bool(""))     # False
print(bool([]))     # False  — DIFF from JS (empty list is falsy)
print(bool({}))     # False  — DIFF from JS (empty dict is falsy)
print(bool(None))   # False

# DIFF — no ++ / -- operators
i = 0
i += 1
i += 1
print(i)  # 2
