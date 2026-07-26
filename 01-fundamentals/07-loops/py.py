# ============================================================
# 07 — Loops  (Python)
# ============================================================

fruits = ["apple", "banana", "cherry"]

# SAME — while
i = 0
while i < 3:
    print("while", i)
    i += 1

# DIFF — no C-style for; use range
for n in range(3):
    print("for-range", n)

# SAME — iterate values
# GOTCHA naming: Python `for x in items` ≈ JS `for (const x of items)`
for fruit in fruits:
    print("in", fruit)

# SAME — index + value
for index, fruit in enumerate(fruits):
    print(index, fruit)

# SAME — iterate dict items
user = {"name": "Ada", "age": 36}
for key, value in user.items():
    print(key, value)

# SAME — break / continue
for fruit in fruits:
    if fruit == "banana":
        continue
    if fruit == "cherry":
        break
    print("filtered", fruit)

# PY-ONLY — for/else (else runs if loop did NOT break)
for fruit in fruits:
    if fruit == "durian":
        print("found")
        break
else:
    print("durian not found")
