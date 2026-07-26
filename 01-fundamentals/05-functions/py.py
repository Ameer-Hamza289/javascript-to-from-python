# ============================================================
# 05 — Functions  (Python)
# ============================================================

# SAME — named function
def greet(name):
    return f"Hello, {name}"

print(greet("Ada"))

# SAME — default parameters
def greet_with_default(name="friend"):
    return f"Hello, {name}"

print(greet_with_default())

# SAME — variadic args
def total(*nums):
    return sum(nums)

print(total(1, 2, 3, 4))

# SAME — keyword / dict-style extra args
def tag(name, **attrs):
    extras = " ".join(f'{k}="{v}"' for k, v in attrs.items())
    return f"<{name} {extras}>".strip()

print(tag("img", src="a.png", alt="pic"))

# SAME — lambda (short anonymous) — DIFF: expression only, one line
square = lambda x: x * x
add = lambda a, b: a + b
print(square(5), add(2, 3))

# SAME — first-class functions
ops = {
    "double": lambda x: x * 2,
    "negate": lambda x: -x,
}
print(ops["double"](10))

# DIFF — no `this`; methods get explicit `self` (see OOP)
class Person:
    def __init__(self, name):
        self.name = name

    def say_hi(self):
        return f"Hi, I'm {self.name}"

print(Person("Ada").say_hi())

# SAME — early return
def absolute(n):
    if n < 0:
        return -n
    return n

print(absolute(-3))

# PY-ONLY — keyword arguments by name
def intro(name, age):
    return f"{name} is {age}"

print(intro(age=36, name="Ada"))  # order free when named

# GOTCHA — mutable default argument trap
def append_item(item, bucket=None):
    if bucket is None:
        bucket = []
    bucket.append(item)
    return bucket

print(append_item(1))
print(append_item(2))  # fresh list each time — correct pattern
