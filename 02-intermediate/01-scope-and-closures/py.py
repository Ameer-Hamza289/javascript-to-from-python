# ============================================================
# 01 — Scope & Closures  (Python)
# ============================================================

# SAME — LEGB: Local → Enclosing → Global → Builtins
global_name = "global"

def outer():
    outer_var = "outer"

    if True:
        block_var = "block"  # DIFF — if-blocks do NOT create a new scope
        print(block_var)

    print(block_var)  # still visible — GOTCHA for JS devs

    # SAME — closure
    def inner():
        return f"{global_name} / {outer_var}"

    return inner

fn = outer()
print(fn())

# SAME — classic closure factory
def make_counter():
    count = 0

    def inc():
        nonlocal count  # DIFF — needed to rebind enclosing variable
        count += 1
        return count

    return inc

c1 = make_counter()
c2 = make_counter()
print(c1(), c1(), c2())  # 1 2 1
