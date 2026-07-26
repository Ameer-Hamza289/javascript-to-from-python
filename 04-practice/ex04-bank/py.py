# Ex 04 — Mini bank (Python)

class BankAccount:
    # TODO: owner, balance property, deposit, withdraw
    pass


def assert_(cond, label):
    print(f"OK   {label}" if cond else f"FAIL {label}")


try:
    a = BankAccount("Ada", 100)
    a.deposit(40)
    assert_(a.balance == 140, "deposit")
    a.withdraw(20)
    assert_(a.balance == 120, "withdraw")
    threw = False
    try:
        a.withdraw(1000)
    except Exception:
        threw = True
    assert_(threw, "overdraft raises")
except Exception as err:
    print("FAIL setup:", err)
