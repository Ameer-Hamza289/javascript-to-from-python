// Ex 04 — Mini bank (JavaScript)

class BankAccount {
  // TODO: #balance, owner, deposit, withdraw, get balance
}

function assert(cond, label) {
  console.log(cond ? `OK   ${label}` : `FAIL ${label}`);
}

try {
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
} catch (err) {
  console.log("FAIL setup:", err.message);
}
