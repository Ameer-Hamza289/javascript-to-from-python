# ============================================================
# 05 — Special Methods & Operators  (Python)
# ============================================================

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # SAME — string representation
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

    def __repr__(self):
        return f"Vector({self.x!r}, {self.y!r})"

    # PY-ONLY — operator overloading
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __abs__(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5

    def __len__(self):
        return 2


a = Vector(1, 2)
b = Vector(3, 4)
print(str(a))
print(a + b)            # calls __add__
print(a == Vector(1, 2))  # calls __eq__ → True
print(abs(a))
print(len(a))

# Other common dunders: __iter__, __getitem__, __enter__/__exit__, __hash__
