// ============================================================
// 01 — Classes & Instances  (JavaScript)
// ============================================================

// SAME — class with constructor and methods
class Person {
  constructor(name, age) {
    // DIFF — `this` instead of `self`
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }

  haveBirthday() {
    this.age += 1;
  }
}

const ada = new Person("Ada", 36); // DIFF — `new` required
console.log(ada.greet());
ada.haveBirthday();
console.log(ada.age);

// SAME — instance check
console.log(ada instanceof Person);

// SAME — class fields (modern JS)
class Counter {
  count = 0; // public field

  inc() {
    this.count += 1;
    return this.count;
  }
}
console.log(new Counter().inc());

// GOTCHA — forgetting `new` (or wrong `this`) causes bugs
// Person("X", 1) without new → TypeError in modern class syntax
