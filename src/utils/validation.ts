export function validateUserInput(
  name: unknown,
  email: unknown,
  age: unknown
): string | null {
  // Validate name
  if (typeof name !== "string" || name.trim() === "") {
    return "Name is required";
  }

  // Validate email
  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return "A valid email is required";
  }

  // Validate age
  if (
    typeof age !== "number" ||
    !Number.isInteger(age) ||
    age < 0 ||
    age > 120
  ) {
    return "Age must be an integer between 0 and 120";
  }

  return null;
}