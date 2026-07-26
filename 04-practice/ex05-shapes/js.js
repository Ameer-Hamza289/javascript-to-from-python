// Ex 05 — Shapes (JavaScript)

class Circle {
  // TODO: constructor(radius), area()
}

class Rectangle {
  // TODO: constructor(width, height), area()
}

function largest(shapes) {
  // TODO: shape with max area, or null if empty
  throw new Error("TODO");
}

function assert(cond, label) {
  console.log(cond ? `OK   ${label}` : `FAIL ${label}`);
}

try {
  const c = new Circle(1);
  const r = new Rectangle(3, 4);
  assert(Math.abs(c.area() - Math.PI) < 1e-9, "circle area");
  assert(r.area() === 12, "rect area");
  assert(largest([c, r]) === r, "largest");
  assert(largest([]) === null, "empty");
} catch (err) {
  console.log("FAIL setup:", err.message);
}
