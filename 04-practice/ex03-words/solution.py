def unique_words(text):
    words = text.lower().split()
    cleaned = [w.strip(".,!?") for w in words if w.strip(".,!?")]
    return sorted(set(cleaned))


def assert_eq(actual, expected, label):
    ok = actual == expected
    print(f"OK   {label}" if ok else f"FAIL {label}: got {actual}")


assert_eq(
    unique_words("Hello, world! Hello Python."),
    ["hello", "python", "world"],
    "unique_words",
)
