# ============================================================
# 01 — Typing  (Python)
# Annotations are optional at runtime; checkers (pyright/mypy) enforce them.
# ============================================================

from __future__ import annotations

from typing import TypeVar, Protocol


# SAME — annotate params and return types
def greet(name: str, age: int | None = None) -> str:
    if age is None:
        return f"Hi, {name}"
    return f"Hi, {name} ({age})"


# SAME — unions / optional (Python 3.10+ uses |)
class User(dict):  # simple demo; dataclasses/TypedDict preferred in real code
    pass


def parse_user(raw: str | None) -> dict[str, int | str | None] | None:
    if raw is None or raw.strip() == "":
        return None
    return {"id": int(raw), "email": None}


# SAME — generics
T = TypeVar("T")


def first(items: list[T]) -> T | None:
    return items[0] if items else None


# SAME — structural typing via Protocol (≈ TS interface)
class HasArea(Protocol):
    def area(self) -> float: ...


def print_area(shape: HasArea) -> None:
    print(shape.area())


class Rect:
    def area(self) -> float:
        return 12.0


print_area(Rect())
print(greet("Ada", 36), parse_user("7"), first(["a", "b"]))

# DIFF — TypedDict / dataclass for object shapes (closer to TS interfaces)
from typing import TypedDict
from dataclasses import dataclass


class UserDict(TypedDict, total=False):
    id: int
    email: str


@dataclass
class UserModel:
    id: int
    email: str | None = None
