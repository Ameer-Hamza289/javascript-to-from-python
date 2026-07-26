# ============================================================
# 01 — Classes & Instances  (Python)
# ============================================================

# SAME — class with constructor and methods
class Person:
    def __init__(self, name, age):
        # DIFF — explicit `self` instead of `this`
        self.name = name
        self.age = age

    def greet(self):
        return f"Hi, I'm {self.name}"

    def have_birthday(self):
        self.age += 1


ada = Person("Ada", 36)  # DIFF — no `new` keyword
print(ada.greet())
ada.have_birthday()
print(ada.age)

# SAME — instance check
print(isinstance(ada, Person))

# SAME — attributes can be declared in __init__ (typical style)
class Counter:
    def __init__(self):
        self.count = 0

    def inc(self):
        self.count += 1
        return self.count


print(Counter().inc())

# GOTCHA — forgetting self in method signature → TypeError on call
