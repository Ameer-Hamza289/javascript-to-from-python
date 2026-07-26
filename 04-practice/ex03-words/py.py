# Ex 03 — Unique words (Python)

def unique_words(text):
    # TODO: lowercase, split, strip . , ! ?, unique, sorted
    raise NotImplementedError("TODO")


def assert_eq(actual, expected, label):
    ok = actual == expected
    print(f"OK   {label}" if ok else f"FAIL {label}: got {actual}")


assert_eq(
    unique_words("Hello, world! Hello Python."),
    ["hello", "python", "world"],
    "unique_words",
)
