# Ex 02 — Grade report (Python)

def letter_grade(score):
    # TODO: A>=90 B>=80 C>=70 D>=60 else F
    raise NotImplementedError("TODO")


def summarize(scores):
    # TODO: map name -> letter
    raise NotImplementedError("TODO")


def assert_eq(actual, expected, label):
    ok = actual == expected
    print(f"OK   {label}" if ok else f"FAIL {label}: got {actual}")


assert_eq(letter_grade(95), "A", "A")
assert_eq(letter_grade(72), "C", "C")
assert_eq(letter_grade(50), "F", "F")
assert_eq(summarize({"Ada": 95, "Grace": 72}), {"Ada": "A", "Grace": "C"}, "summarize")
