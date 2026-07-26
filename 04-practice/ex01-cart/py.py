# Ex 01 — Cart total (Python)
# Read: ../prompts.md
# Compare with: js.js  |  Solution: solution.py

def line_total(price, qty):
    # TODO
    raise NotImplementedError("TODO: line_total")


def cart_total(items):
    # TODO
    raise NotImplementedError("TODO: cart_total")


def assert_eq(actual, expected, label):
    if actual != expected:
        print(f"FAIL {label}: got {actual}, expected {expected}")
    else:
        print(f"OK   {label}")


assert_eq(line_total(5, 2), 10, "line_total")
assert_eq(
    cart_total([
        {"price": 5, "qty": 2},
        {"price": -1, "qty": 3},
        {"price": 2, "qty": 4},
    ]),
    18,
    "cart_total",
)
