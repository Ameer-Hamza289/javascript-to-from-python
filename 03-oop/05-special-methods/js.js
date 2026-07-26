// ============================================================
// 05 — Special Methods & Operators  (JavaScript)
// ============================================================

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // SAME — string representation
  toString() {
    return `Vector(${this.x}, ${this.y})`;
  }

  // DIFF — no operator overloading for +
  add(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  equals(other) {
    return this.x === other.x && this.y === other.y;
  }

  // JS-ONLY-ish — well-known symbols customize some behaviors
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return this.toString();
    return Math.hypot(this.x, this.y);
  }
}

const a = new Vector(1, 2);
const b = new Vector(3, 4);
console.log(String(a));
console.log(a.add(b).toString());
console.log(a.equals(new Vector(1, 2)));
console.log(+a); // uses Symbol.toPrimitive → magnitude

// DIFF — == / === compare references for objects unless you write helpers
console.log(a === new Vector(1, 2)); // false
