# ============================================================
# 04 — Control Flow  (Python)
# ============================================================

score = 85

# SAME — if / elif / else  (DIFF — indentation defines blocks, no braces)
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C or below")

# SAME — ternary (DIFF — word order)
label = "pass" if score >= 60 else "fail"
print(label)

# DIFF — match/case (Python 3.10+) — structural pattern matching
day = "mon"
match day:
    case "mon" | "tue":
        print("weekday start")
    case "sat" | "sun":
        print("weekend")
    case _:
        print("midweek")

# SAME — truthy condition
items = []
if items:
    print("Python: empty list is falsy — this does NOT run")
if len(items):
    print("length check")

# PY-ONLY — pass as empty block placeholder
if score > 100:
    pass  # TODO later
