# ============================================================
# 01 — Variables & Types  (Python)
# Read with: js.js  |  Then: NOTES.md
# ============================================================

# SAME — declare and assign (no let/const keywords)
age = 25                   # can be reassigned
PI = 3.14159               # convention: UPPER = "please don't change"
# PY-ONLY — true immutability needs other tools (tuple, frozenset, etc.)

# SAME — dynamic typing (types live on values, not variables)
value = 42
value = "now a string"     # allowed
value = True               # still allowed  (DIFF — True/False capitalized)

# SAME — common primitive / built-in types
num = 10                   # int
floaty = 10.5              # float — DIFF: separate from int
text = "hello"             # str
flag = True                # bool
nothing = None             # intentional empty — maps to null-ish
# DIFF — no `undefined`. Unbound name → NameError

# SAME — check type
print(type(num))           # <class 'int'>
print(type(floaty))        # <class 'float'>
print(type(text))          # <class 'str'>
print(type(flag))          # <class 'bool'>
print(type(nothing))       # <class 'NoneType'>

# SAME — type conversion
print(int("42"))           # 42
print(str(42))             # "42"
print(bool(0))             # False
print(bool(""))            # False
print(bool("hi"))          # True

# DIFF — no == vs === split; `==` compares values, `is` compares identity
print(1 == True)           # True  (bool is subclass of int) — GOTCHA
a = None
b = None
print(a is b)              # True  — prefer `is` for None / identity
print(a == b)              # True  — value equality also works for None

# SAME — name binding vs mutating contents
scores = [1, 2, 3]
scores.append(4)           # OK — mutate list
# rebinding the name is always allowed unless you avoid it by convention

print({"age": age, "PI": PI, "value": value, "num": num, "floaty": floaty,
       "text": text, "flag": flag, "nothing": nothing})
