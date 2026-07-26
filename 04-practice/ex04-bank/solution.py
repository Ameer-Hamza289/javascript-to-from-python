class BankAccount:
    def __init__(self, owner, opening=0):
        self.owner = owner
        self._balance = opening

    @property
    def balance(self):
        return self._balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("amount must be positive")
        self._balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("amount must be positive")
        if amount > self._balance:
            raise ValueError("insufficient funds")
        self._balance -= amount


def assert_(cond, label):
    print(f"OK   {label}" if cond else f"FAIL {label}")


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
