# Reference solution — Ex 01 (Python)

def line_total(price, qty):
    return price * qty


def cart_total(items):
    return sum(
        line_total(item["price"], item["qty"])
        for item in items
        if item["price"] >= 0 and item["qty"] >= 0
    )


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
