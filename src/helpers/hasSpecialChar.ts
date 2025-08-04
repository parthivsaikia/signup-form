export default function hasSpecialCharacters(value: string) {
  // This regex looks for any character that is NOT a-z, A-Z, or 0-9
  const specialChars = /[^a-zA-Z0-9\s]/;
  return specialChars.test(value);
}
