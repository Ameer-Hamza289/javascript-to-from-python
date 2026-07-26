// ============================================================
// 08 — Error Handling  (JavaScript)
// ============================================================

// SAME — try / catch / finally
function parseAge(input) {
  try {
    const age = Number(input);
    if (Number.isNaN(age)) {
      throw new Error("Not a number");
    }
    if (age < 0) {
      throw new RangeError("Age cannot be negative");
    }
    return age;
  } catch (err) {
    console.log("caught:", err.name, err.message);
    return null;
  } finally {
    console.log("cleanup always runs");
  }
}

console.log(parseAge("36"));
console.log(parseAge("nope"));
console.log(parseAge("-1"));

// SAME — custom error types
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function requireName(name) {
  if (!name) throw new ValidationError("name required");
  return name;
}

try {
  requireName("");
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("validation failed:", err.message);
  } else {
    throw err; // rethrow unknowns
  }
}
