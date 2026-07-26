# ============================================================
# 06 — Errors & Null Style  (Python)
# ============================================================

from __future__ import annotations

from dataclasses import dataclass
from typing import TypeVar, Generic


# SAME — make absence explicit at boundaries
def find_user(id_: int) -> dict[str, int | str] | None:
    if id_ <= 0:
        return None
    return {"id": id_, "email": "ada@example.com"}


user = find_user(1)
# DIFF — no ?. operator; use short-circuit / explicit checks
print(user["email"].upper() if user else None)
print((find_user(-1) or {}).get("email") or "missing")
# clearer senior style:
missing = find_user(-1)
print(missing["email"] if missing is not None else "missing")


# SAME — Result-style for expected failures (raise is also idiomatic in Python)
T = TypeVar("T")
E = TypeVar("E")


@dataclass(frozen=True)
class Ok(Generic[T]):
    value: T


@dataclass(frozen=True)
class Err(Generic[E]):
    error: E


Result = Ok[T] | Err[E]


def parse_email(raw: str | None) -> Ok[str] | Err[str]:
    if not raw or "@" not in raw:
        return Err("invalid email")
    return Ok(raw.strip().lower())


parsed = parse_email("Ada@Example.com")
match parsed:
    case Ok(value):
        print("ok:", value)
    case Err(error):
        print("fail:", error)


# SAME — raise for exceptional cases
def must_get(id_: int) -> dict[str, int | str]:
    user = find_user(id_)
    if user is None:
        raise LookupError(f"user {id_} not found")
    return user


try:
    must_get(-1)
except LookupError as err:
    print("caught:", err)


# GOTCHA — prefer `is None` checks; don't use `or` when 0/"" are valid
value = 0
print(value or 10)  # 10 — maybe wrong
print(10 if value is None else value)  # 0 — usually right
