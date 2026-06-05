// Aufgabe 1:
const age = 18;
let  access= "Zutritt";

if (age >= 18) {
  access += " erlaubt";
} else {
  access += " verboten";
}
console.log(access);

// Aufgabe 2:
const firstNumber = 2;
const secondNumber = 3;

if (firstNumber % 2 === 0 || secondNumber % 2 === 0) {
  console.log("Mindestens eine Zahl ist gerade");
} else {
  console.log("Beide Zahlen sind ungerade");
}

// Aufgabe 3:
const currentGrade = 1;
let grade;

switch (currentGrade) {
  case 1:
    grade = "Sehr gut";
    break;
  case 2:
    grade = "Gut";
    break;
  case 3:
    grade = "Befriedigend";
    break;
  case 4:
    grade = "Ausreichend";
    break;
  case 5:
    grade = "Mangelhaft";
    break;
  case 6:
    grade = "Ungenügend"
    break;
    default:
      grade = "ungültige Note";
      break;
}
console.log(grade);

// Aufgabe 4:
let price = 10;
let discount = true;

price = discount ? price * 0.9 : price;
console.log(price);
