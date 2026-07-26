# ============================================================
# 03 — Encapsulation  (Python)
# ============================================================

class BankAccount:
    def __init__(self, owner, opening=0):
        self.owner = owner          # public
        self._balance = opening     # DIFF — "protected" by convention (single _)
        self.__audit = []           # DIFF — name-mangled (double __)

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("amount must be positive")
        self._balance += amount
        self.__audit.append(amount)

    @property
    def balance(self):
        # read-only public view
        return self._balance


acct = BankAccount("Ada", 100)
acct.deposit(50)
print(acct.owner, acct.balance)
print(acct._balance)  # GOTCHA — still accessible; convention, not enforcement
# print(acct.__audit)  # AttributeError
print(acct._BankAccount__audit)  # mangled name — can still be reached


# SAME-ish — getters / setters via @property
class Temperature:
    def __init__(self):
        self._celsius = 0

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        self._celsius = value

    @property
    def fahrenheit(self):
        return self._celsius * 9 / 5 + 32


t = Temperature()
t.celsius = 25
print(t.fahrenheit)
