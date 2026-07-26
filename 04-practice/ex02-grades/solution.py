def letter_grade(score):
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    if score >= 70:
        return "C"
    if score >= 60:
        return "D"
    return "F"


def summarize(scores):
    return {name: letter_grade(score) for name, score in scores.items()}


def assert_eq(actual, expected, label):
    ok = actual == expected
    print(f"OK   {label}" if ok else f"FAIL {label}: got {actual}")


assert_eq(letter_grade(95), "A", "A")
assert_eq(letter_grade(72), "C", "C")
assert_eq(letter_grade(50), "F", "F")
assert_eq(summarize({"Ada": 95, "Grace": 72}), {"Ada": "A", "Grace": "C"}, "summarize")
