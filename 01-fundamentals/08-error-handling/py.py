# ============================================================
# 08 — Error Handling  (Python)
# ============================================================

# SAME — try / except / finally  (DIFF — except, not catch)
def parse_age(input_value):
    try:
        age = int(input_value)
        if age < 0:
            raise ValueError("Age cannot be negative")
        return age
    except ValueError as err:
        print("caught:", type(err).__name__, err)
        return None
    finally:
        print("cleanup always runs")

print(parse_age("36"))
print(parse_age("nope"))
print(parse_age("-1"))

# SAME — custom exception types
class ValidationError(Exception):
    pass

def require_name(name):
    if not name:
        raise ValidationError("name required")
    return name

try:
    require_name("")
except ValidationError as err:
    print("validation failed:", err)
except Exception:
    raise  # rethrow unknowns

# PY-ONLY — else on try (runs if no exception)
try:
    n = int("10")
except ValueError:
    print("bad int")
else:
    print("parsed ok:", n)
