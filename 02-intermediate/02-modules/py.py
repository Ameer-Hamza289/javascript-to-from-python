# ============================================================
# 02 — Modules  (Python)
# Run from this folder OR repo root with module path care.
# Recommended: python 02-intermediate/02-modules/py.py
# ============================================================

import sys
from pathlib import Path

# Ensure local folder is importable when run from repo root
sys.path.insert(0, str(Path(__file__).resolve().parent))

# SAME — import module
import math_utils

# SAME — named imports
from math_utils import add, multiply, greet

# SAME — alias
import math_utils as math

print(add(2, 3))
print(multiply(4, 5))
print(greet("Ada"))
print(math.add(10, 1))

# DIFF — packages use folders + __init__.py (optional in namespace packages)
# DIFF — if __name__ == "__main__": guard for script entrypoints
if __name__ == "__main__":
    print("running as script")
