class BankAccount {
  #balance = 0;

  constructor(owner, opening = 0) {
    this.owner = owner;
    this.#balance = opening;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("amount must be positive");
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("amount must be positive");
    if (amount > this.#balance) throw new Error("insufficient funds");
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }
}

function assert(cond, label) {
  console.log(cond ? `OK   ${label}` : `FAIL ${label}`);
}

const a = new BankAccount("Ada", 100);
a.deposit(40);
assert(a.balance === 140, "deposit");
a.withdraw(20);
assert(a.balance === 120, "withdraw");
let threw = false;
try {
  a.withdraw(1000);
} catch {
  threw = true;
}
assert(threw, "overdraft throws");
