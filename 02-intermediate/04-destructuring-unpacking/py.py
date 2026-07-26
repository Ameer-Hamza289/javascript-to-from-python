# ============================================================
# 04 — Destructuring & Unpacking  (Python)
# ============================================================

# SAME — sequence unpacking ↔ array destructuring
point = [3, 4]
x, y = point
print(x, y)

# SAME — skip / rest
nums = [1, 2, 3, 4]
first, _, third, *rest = nums
print(first, third, rest)

# DIFF — dict unpacking is different; no direct `{name, age} = user`
user = {"name": "Ada", "age": 36, "city": "London"}
name, age = user["name"], user["age"]
hometown = user["city"]
print(name, age, hometown)

# SAME-ish — defaults via .get
role = user.get("role", "dev")
print(role)

# DIFF — function params: explicit keys or **kwargs, not object destructuring
def intro(person):
    return f"{person['name']} ({person['age']})"

print(intro(user))

# SAME — swap (famous Python trick)
a, b = 1, 2
a, b = b, a
print(a, b)

# SAME — spread equivalents
more = {**user, "age": 37}          # object spread ↔ dict merge
combined = [*nums, 5]               # array spread ↔ list unpack
print(more, combined)

# PY-ONLY — extended unpacking in loops
pairs = [(1, "a"), (2, "b")]
for num, letter in pairs:
    print(num, letter)
