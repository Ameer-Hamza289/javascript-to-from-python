// ============================================================
// 02 — Inheritance  (JavaScript)
// ============================================================

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

// SAME — subclass with super()
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // DIFF — must call before using `this`
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks`; // override
  }

  info() {
    return `${this.speak()} (${this.breed})`;
  }
}

const rex = new Dog("Rex", "Shepherd");
console.log(rex.speak());
console.log(rex.info());
console.log(rex instanceof Dog);
console.log(rex instanceof Animal);

// SAME — call parent implementation
class LoudDog extends Dog {
  speak() {
    return super.speak() + " loudly";
  }
}
console.log(new LoudDog("Max", "Lab").speak());
