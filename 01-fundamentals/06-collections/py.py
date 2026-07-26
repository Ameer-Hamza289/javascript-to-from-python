# ============================================================
# 06 — Collections  (Python)
# ============================================================

# SAME — ordered list → list ↔ Array
nums = [10, 20, 30]
nums.append(40)            # push ↔ append
print(nums[0])             # 10
print(len(nums))
print(nums[1:3])           # [20, 30]  slice
print(20 in nums)

# SAME — key/value map → dict ↔ Object
user = {"name": "Ada", "age": 36}
print(user["name"])
print(user.get("age"))
user["city"] = "London"
del user["age"]
print(user.keys())
print(user.values())
print(user.items())

# DIFF — dict keys can be any hashable (str, int, tuple...)
m = {"a": 1, 1: "one"}
print(m["a"], 1 in m, len(m))

# SAME — unique values → set
s = {1, 2, 2, 3}
s.add(4)
print(2 in s, len(s))

# PY-ONLY — tuple (immutable sequence) — common & important
point = (3, 4)
print(point[0], point[1])
# point[0] = 9  # TypeError

# SAME — nested structures
team = [
    {"name": "Ada", "skills": ["math", "code"]},
    {"name": "Grace", "skills": ["navy", "code"]},
]
print(team[0]["skills"][1])

# GOTCHA — dict key access missing → KeyError (use .get)
print(user.get("missing", "n/a"))
