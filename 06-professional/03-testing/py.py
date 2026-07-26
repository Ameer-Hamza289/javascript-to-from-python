# ============================================================
# 03 — Testing  (Python)
# Idiomatic on teams: pytest  →  pytest 06-professional/03-testing/py.py
# This file also runs standalone: python 06-professional/03-testing/py.py
# ============================================================


def cart_total(items):
    return sum(
        i["price"] * i["qty"]
        for i in items
        if i["price"] >= 0 and i["qty"] >= 0
    )


# SAME — pytest style: functions named test_* + assert
def test_cart_total_sums_valid_lines():
    items = [
        {"price": 5, "qty": 2},
        {"price": -1, "qty": 9},
    ]
    assert cart_total(items) == 10


def test_cart_total_empty():
    assert cart_total([]) == 0


# DIFF — pytest fixtures (@pytest.fixture), parametrize, monkeypatch
# unittest exists in stdlib; most mid-senior codebases prefer pytest.


if __name__ == "__main__":
    # tiny runner so the lesson works without pytest installed
    test_cart_total_sums_valid_lines()
    test_cart_total_empty()
    print("OK - all asserts passed (install pytest for the real workflow)")
