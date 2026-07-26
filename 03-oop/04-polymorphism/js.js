// ============================================================
// 04 — Polymorphism & Duck Typing  (JavaScript)
// ============================================================

// SAME — subtype polymorphism via inheritance
class Shape {
  area() {
    throw new Error("implement me");
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  area() {
    return Math.PI * this.r ** 2;
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.w = w;
    this.h = h;
  }
  area() {
    return this.w * this.h;
  }
}

function totalArea(shapes) {
  return shapes.reduce((sum, s) => sum + s.area(), 0);
}

console.log(totalArea([new Circle(2), new Rectangle(3, 4)]));

// SAME — duck typing: if it has .area(), we can use it
const weird = { area: () => 42 };
console.log(totalArea([weird])); // works — no shared base class required

// DIFF — TypeScript (not shown) adds static interfaces.
// Plain JS relies on docs + runtime shape checks.
function assertAreaShape(obj) {
  if (typeof obj.area !== "function") {
    throw new TypeError("object must implement area()");
  }
}
assertAreaShape(weird);
