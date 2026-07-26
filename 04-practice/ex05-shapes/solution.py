from math import pi


class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return pi * self.radius ** 2


class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


def largest(shapes):
    if not shapes:
        return None
    return max(shapes, key=lambda s: s.area())


def assert_(cond, label):
    print(f"OK   {label}" if cond else f"FAIL {label}")


c = Circle(1)
r = Rectangle(3, 4)
assert_(abs(c.area() - pi) < 1e-9, "circle area")
assert_(r.area() == 12, "rect area")
assert_(largest([c, r]) is r, "largest")
assert_(largest([]) is None, "empty")
