// Named Import/Export (mindestens 3 verschiedene)
export function add (num1, num2) {
  return num1 + num2;
}

export function subtract (num1, num2) {
  return num1 - num2;
}

export function multiply (num1, num2) {
  return num1 * num2;
}

// Named Export mit Umbenennung
export { add as addBy, subtract as substractBy, multiply as multiplyBy };

// Default Import/Export
export default add
