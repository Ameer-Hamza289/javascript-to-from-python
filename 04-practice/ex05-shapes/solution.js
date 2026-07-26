class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

function largest(shapes) {
  if (shapes.length === 0) return null;
  return shapes.reduce((best, s) => (s.area() > best.area() ? s : best));
}

function assert(cond, label) {
  console.log(cond ? `OK   ${label}` : `FAIL ${label}`);
}

const c = new Circle(1);
const r = new Rectangle(3, 4);
assert(Math.abs(c.area() - Math.PI) < 1e-9, "circle area");
assert(r.area() === 12, "rect area");
assert(largest([c, r]) === r, "largest");
assert(largest([]) === null, "empty");
