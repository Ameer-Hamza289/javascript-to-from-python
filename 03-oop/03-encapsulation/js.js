// ============================================================
// 03 — Encapsulation  (JavaScript)
// ============================================================

class BankAccount {
  // JS-ONLY — true private fields (syntax #name)
  #balance = 0;

  constructor(owner, opening = 0) {
    this.owner = owner; // public
    this.#balance = opening;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("amount must be positive");
    this.#balance += amount;
  }

  get balance() {
    // read-only public view
    return this.#balance;
  }

  // "protected-by-convention" doesn't exist as soft underscore standard
  // the way Python does — use #private or closures.
}

const acct = new BankAccount("Ada", 100);
acct.deposit(50);
console.log(acct.owner, acct.balance);
// console.log(acct.#balance); // SyntaxError — truly private

// SAME-ish — getters / setters
class Temperature {
  #celsius = 0;

  get celsius() {
    return this.#celsius;
  }

  set celsius(value) {
    this.#celsius = value;
  }

  get fahrenheit() {
    return this.#celsius * 9/5 + 32;
  }
}

const t = new Temperature();
t.celsius = 25;
console.log(t.fahrenheit);
