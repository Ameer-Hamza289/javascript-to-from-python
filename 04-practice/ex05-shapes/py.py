# Ex 05 — Shapes (Python)

class Circle:
    # TODO: __init__(radius), area()
    pass


class Rectangle:
    # TODO: __init__(width, height), area()
    pass


def largest(shapes):
    # TODO: shape with max area, or None if empty
    raise NotImplementedError("TODO")


def assert_(cond, label):
    print(f"OK   {label}" if cond else f"FAIL {label}")


try:
    from math import pi

    c = Circle(1)
    r = Rectangle(3, 4)
    assert_(abs(c.area() - pi) < 1e-9, "circle area")
    assert_(r.area() == 12, "rect area")
    assert_(largest([c, r]) is r, "largest")
    assert_(largest([]) is None, "empty")
except Exception as err:
    print("FAIL setup:", err)
