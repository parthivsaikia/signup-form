export function checkPassword(value: string): string | null {
  const errors = [];

  if (value.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }

  if (!/[A-Z]/.test(value)) {
    errors.push("Password must contain at least one uppercase letter.");
  }

  if (!/[a-z]/.test(value)) {
    errors.push("Password must contain at least one lowercase letter.");
  }

  if (!/[0-9]/.test(value)) {
    errors.push("Password must contain at least one number.");
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    errors.push("Password must contain at least one special character.");
  }

  if (errors.length > 0) {
    return errors.join(" ");
  }

  return null;
}
