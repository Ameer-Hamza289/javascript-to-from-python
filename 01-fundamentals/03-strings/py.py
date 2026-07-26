# ============================================================
# 03 — Strings  (Python)
# ============================================================

name = "Ada"
lang = "Python"

# SAME — concatenation
print("Hello, " + name)

# SAME — interpolation (f-strings — preferred)
print(f"Hello, {name}. Welcome to {lang}.")
# older styles still seen:
print("Hello, {}. Welcome to {}.".format(name, lang))
print("Hello, %s." % name)

# SAME — common methods (names differ slightly)
s = "  Hello World  "
print(s.strip())           # trim ↔ strip
print(s.upper())           # toUpperCase ↔ upper
print(s.lower())           # toLowerCase ↔ lower
print("World" in s)        # includes ↔ `in`
print(s.replace("World", "Python"))
print(s.strip().split(" "))
print("ha" * 3)            # repeat ↔ *  (DIFF syntax)
print(s.strip().startswith("Hello"))
print(s.strip().endswith("World"))
print("hello"[1:4])        # slice ↔ slicing  "ell"
print("hello".find("l"))   # indexOf ↔ find  ( -1 if missing)

# DIFF — strings are immutable in both
original = "hi"
upper = original.upper()
print(original, upper)  # hi HI

# DIFF — no character type; a char is a str of length 1
print("hello"[1])  # e
print(len("hello"))

# SAME-ish — multiline
multi = """line1
line2"""
print(multi)

# GOTCHA — cannot + int to str without conversion
print("Score: " + str(10))
# print("Score: " + 10)  # TypeError
print(f"Score: {10}")    # preferred
