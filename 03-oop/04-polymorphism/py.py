# ============================================================
# 04 — Polymorphism & Duck Typing  (Python)
# ============================================================

# SAME — subtype polymorphism via inheritance
class Shape:
    def area(self):
        raise NotImplementedError("implement me")


class Circle(Shape):
    def __init__(self, r):
        self.r = r

    def area(self):
        from math import pi
        return pi * self.r ** 2


class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h


def total_area(shapes):
    return sum(s.area() for s in shapes)


print(total_area([Circle(2), Rectangle(3, 4)]))

# SAME — duck typing: if it has .area(), we can use it
class Weird:
    def area(self):
        return 42


print(total_area([Weird()]))  # works — no shared base class required

# PY-ONLY — typing.Protocol for static duck typing (optional)
from typing import Protocol, runtime_checkable


@runtime_checkable
class HasArea(Protocol):
    def area(self) -> float: ...


print(isinstance(Circle(1), HasArea))  # True with runtime_checkable
